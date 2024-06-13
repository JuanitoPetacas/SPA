<?php
include('../../Model/conexion.php');


$conexion = new conexion();
$conexion->conectar();

try {
/*5)	Reporte de ocupación de terapeutas: 
• Muestra la ocupación de cada terapeuta durante un período de tiempo, 
destacando los horarios ocupados y disponibles. 
*/
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
    $stmtVerificacion->bindParam(':horaFin', $hora_fin);
    $stmtVerificacion->execute();
    $count = $stmtVerificacion->fetchColumn();

    if ($count > 0) {
        // Hora ocupada
        echo "La fecha que escogiste ya está reservada";
    } else {
        // Insertar nueva cita
        $consultaInsertar = "INSERT INTO citas (fecha, hora_Inicio, hora_Fin, id_Cliente, id_Servicio) VALUES (:fecha, :horaInicio, :horaFin, :id_cliente, :id_Servicio)";
        $stmtInsertar = $conexion->prepare($consultaInsertar);
        $stmtInsertar->bindParam(':fecha', $fecha);
        $stmtInsertar->bindParam(':horaInicio', $horaInicio);
        $stmtInsertar->bindParam(':horaFin', $hora_fin);
        $stmtInsertar->bindParam(':id_cliente', $id_cliente);
        $stmtInsertar->bindParam(':id_Servicio', $id_Servicio);
        $stmtInsertar->execute();
    }
    // Enviar la respuesta como JSON
    echo "Cita Agendada Correctamente";
} catch (PDOException $e) {
    echo $e->getMessage();
}
