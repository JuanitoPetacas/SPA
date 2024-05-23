<?php
include('../../Model/conexion.php');

$fecha = $_POST['fecha'];
$horaInicio = $_POST['hora_Inicio'];
$hora_fin = $_POST['hora_Fin'];
$id_cliente = $_POST['id_Cliente'];
$id_Servicio = $_POST['id_Servicio'];

$conexion->conectar();

try {
    $consulta = "INSERT INTO citas (fecha, horaInicio, hora_fin, id_cliente, id_Servicio) VALUES (:fecha, :horaInicio, :hora_fin, :id_cliente, :id_Servicio)";
    $stmt = $conexion->prepare($consulta);
    $stmt->bindParam(':fecha', $fecha, PDO::PARAM_STR);
    $stmt->bindParam(':horaInicio', $horaInicio, PDO::PARAM_STR);
    $stmt->bindParam(':hora_fin', $hora_fin, PDO::PARAM_STR);
    $stmt->bindParam(':id_cliente', $id_cliente, PDO::PARAM_INT);
    $stmt->bindParam(':id_Servicio', $id_Servicio, PDO::PARAM_INT);
    $resultado = $stmt->execute();

    if ($resultado) {
        echo "Consulta ejecutada correctamente";
    } else {
        echo "Error en la consulta";
    }
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
} finally {
    $conexion->Desconectar();
}