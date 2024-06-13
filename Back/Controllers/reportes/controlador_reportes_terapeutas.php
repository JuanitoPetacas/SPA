<?php
include('../../Model/conexion.php');

$conexion = new Conexion();

try {
    $consulta = "SELECT terapeutas.id AS TerapeutaID, CONCAT(terapeutas.nombre, ' ', terapeutas.apellido) AS Terapeuta, GROUP_CONCAT(CONCAT('Fecha: ', citas.fecha, ' | Inicio: ', TIME_FORMAT(citas.hora_Inicio, '%H:%i'), ' | Fin: ', TIME_FORMAT(citas.hora_Fin, '%H:%i')) SEPARATOR '; ') AS Horarios_Ocupados FROM terapeutas LEFT JOIN servicios ON terapeutas.id = servicios.id_Terapeuta LEFT JOIN citas ON servicios.id = citas.id_Servicio GROUP BY terapeutas.id, terapeutas.nombre, terapeutas.apellido ORDER BY terapeutas.id;";
    $clientes = $conexion->ConsultaCompleja($consulta);
    echo json_encode($clientes);
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}
