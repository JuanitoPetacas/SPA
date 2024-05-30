<?php 

include('../../../Model/conexion.php');


$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$especialidad = $_POST['especialidad'];

$conexion = new conexion();
$conexion->conectar();

try {
    $consulta = 'UPDATE terapeutas SET nombre = :nombre, apellido = :apellido, especialidad = :especialidad';
    $stmt = $conexion->prepare($consulta);
    $stmt->bindParam(':nombre',$nombre, PDO::PARAM_STR);
    $stmt->bindParam(':apellido',$apellido, PDO::PARAM_STR);
    $stmt->bindParam(':especialidad',$especialidad, PDO::PARAM_STR);
    
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