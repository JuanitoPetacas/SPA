<?php
include('../../Model/main.php');


$conexion->Conectar();

try {
   $consulta = "SELECT * FROM clientes";
   $stmt = $conexion->$conexion->prepare($consulta);
   $stmt->execute();

   $clientes = $stmt->fetchAll(PDO::FETCH_ASSOC);

   // Enviar los datos en formato JSON
   header('Content-Type: application/json');
   echo json_encode($clientes);
} catch (PDOException $e) {
   echo "Error: " . $e->getMessage();
} finally {
   $conexion->Desconectar();
}