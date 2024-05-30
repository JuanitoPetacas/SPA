<?php
include('../../Model/conexion.php');

$id = $_POST['id'];

$conexion = new Conexion();

try {
    $consulta = "DELETE FROM clientes WHERE id = :id";
    $stmt = $conexion->conexion->prepare($consulta);
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $resultado = $stmt->execute();

    if ($resultado) {
        echo "Registro eliminado correctamente";
    } else {
        echo "Error al eliminar el registro";
    }
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
} finally {
    $conexion->Desconectar();
}
