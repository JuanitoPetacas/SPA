<?php
include('../../Model/main.php');

$id = $_POST['id'];
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$direccion = $_POST['direccion'];
$correo = $_POST['correo'];
$id_Servicio = $_POST['id_Servicio'];


$conexion->Conectar();

try {
    $consulta = "UPDATE clientes SET nombre = :nombre, apellido = :apellido, direccion = :direccion, correo = :correo, id_Servicio = :id_Servicio WHERE id = :id";
    $stmt = $conexion->$conexion->prepare($consulta);

    $stmt->bindParam(':nombre', $nombre, PDO::PARAM_STR);
    $stmt->bindParam(':apellido', $apellido, PDO::PARAM_STR);
    $stmt->bindParam(':direccion', $direccion, PDO::PARAM_STR);
    $stmt->bindParam(':correo', $correo, PDO::PARAM_STR);
    $stmt->bindParam(':id_Servicio', $id_Servicio, PDO::PARAM_INT);
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);

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