<?php
include('../../Model/conexion.php');

$conexion = new Conexion();

try {
    $consulta = "select clientes.id, nombre, apellido, direccion, correo, descripcion_Servicio from clientes INNER JOIN servicios ON clientes.id_Servicio = servicios.id";
    $clientes = $conexion->ConsultaCompleja($consulta);
    echo json_encode($clientes);
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}
