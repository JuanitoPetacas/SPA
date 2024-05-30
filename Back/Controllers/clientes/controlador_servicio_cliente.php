<?php
include('../../Model/conexion.php');

$conexion = new Conexion();

try {
    $consulta = "SELECT descripcion_servicio FROM servicios;";
    $clientes = $conexion->ConsultaCompleja($consulta);
    echo json_encode($clientes);
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}