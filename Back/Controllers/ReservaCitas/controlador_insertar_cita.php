<?php
include('../../Model/conexion.php');


$conexion = new conexion();
$conexion->conectar();

try {
    
 // obtenemos datos del post 
$fecha = $_POST['fecha'];
$horaInicio = $_POST['hora_Inicio'];
$hora_fin = $_POST['hora_Fin'];
$id_cliente = $_POST['id_Cliente'];
$id_Servicio = $_POST['id_Servicio']; 

 // Consulta para verificar si la hora está ocupada
 $consultaVerificacion = "SELECT COUNT(*) FROM citas WHERE fecha = :fecha AND ((:horaInicio < hora_Fin AND :horaFin > hora_Inicio))";
    $stmtVerificacion = $conexion->prepare($consultaVerificacion);
    $stmtVerificacion->bindParam(':fecha', $fecha);
    $stmtVerificacion->bindParam(':horaInicio', $horaInicio);
    $stmtVerificacion->bindParam(':horaFin', $horaFin);
    $stmtVerificacion->execute();
    $count = $stmtVerificacion->fetchColumn();

    if ($count > 0) {
        // Hora ocupada
        $response = array('status' => 'error', 'message' => 'La hora seleccionada ya está ocupada.');
    } else {
        // Insertar nueva cita
        $consultaInsertar = "INSERT INTO citas (fecha, hora_Inicio, hora_Fin, id_Cliente, id_Servicio) VALUES (:fecha, :horaInicio, :horaFin, :id_cliente, :id_Servicio)";
        $stmtInsertar = $conexion->prepare($consultaInsertar);
        $stmtInsertar->bindParam(':fecha', $fecha);
        $stmtInsertar->bindParam(':horaInicio', $horaInicio);
        $stmtInsertar->bindParam(':horaFin', $horaFin);
        $stmtInsertar->bindParam(':id_cliente', $id_cliente);
        $stmtInsertar->bindParam(':id_Servicio', $id_Servicio);
        $stmtInsertar->execute();

        $response = array('status' => 'success', 'message' => 'La cita ha sido reservada exitosamente.');
    }

    header('Content-Type: application/json');

    // Enviar la respuesta como JSON
    echo json_encode($response);

} catch (PDOException $e) {
    echo json_encode(array('status' => 'error', 'message' => 'Error: ' . $e->getMessage()));
}