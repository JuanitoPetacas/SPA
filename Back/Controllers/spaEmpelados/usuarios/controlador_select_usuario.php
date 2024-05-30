<?php
include('../../../Model/conexion.php');

$conexion = new Conexion();

$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$correo = $_POST['correo'];
$id_Rol = $_POST['$id_Rol'];

try {
    $consulta = 'SELECT usuarios.id, nombre, apellido, correo, roles.descripcion FROM usuarios INNER JOIN roles ON usuarios.id_Rol = roles.id;';
    $usuario = $conexion->ConsultaCompleja($consulta);
    echo json_encode($usuario);
} catch (PDOException $e) {
    echo 'error: ' . $e->getMessage();
}