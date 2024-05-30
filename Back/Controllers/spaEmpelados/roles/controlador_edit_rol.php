<?php
include('../../../Model/conexion.php');

$id = $_POST['id'];
$descripcion = $_POST['descripcion'];


$conexion = new conexion();
$conexion->conectar();


try {
    $consulta = "UPDATE roles SET descripcion = :descripcion WHERE id = :id";
    $stmt = $conexion->conexion->prepare($consulta);
    $stmt->bindParam(':descripcion', $descripcion, PDO::PARAM_STR);
    $resultado = $stmt->execute();

    if ($resultado) {
      "Descripcion editado Exitosamente";
    } else {
        echo "Error en la consulta";
    }
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
} finally {
    $conexion->Desconectar();
}
