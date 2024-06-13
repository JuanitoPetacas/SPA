<?php
include('../../../Model/conexion.php');

$conexion = new Conexion();

try {
    $consulta = 'SELECT * FROM terapeutas';
    $citas = $conexion->ConsultaCompleja($consulta);
    echo json_encode($citas);
} catch (PDOException $e) {
    echo 'error: ' . $e->getMessage();
}
