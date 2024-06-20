<?php
    include ('../../Model/conexion.php');

    $email = $_POST['email'];
    $pass = $_POST['pass'];
    $conexion = new conexion();
    $conexion -> conectar();
    $mensaje_Validado ;
    try{
        $consulta = "SELECT correo, password FROM usuarios WHERE correo = :correo and password = :pass" ;
        $stmt = $conexion ->prepare($consulta) ;
        $stmt -> bindParam(':correo', $email, PDO::PARAM_STR);
        $stmt -> bindParam(':pass', $pass, PDO::PARAM_STR);
        $stmt-> execute();

        if($stmt -> rowCount() > 0)
        {
            $consulta = "SELECT id_Rol FROM usuarios WHERE correo = '".$email."' and password = '".$pass."' ;" ;
            $stmt = $conexion ->ConsultaCompleja($consulta) ;
            $datos = json_encode($stmt);
            echo $datos;
        }
        else
        {
            $mensaje= array (
                'message' => 'El usuario no existe' 
            );
            $mensaje_Validado = json_encode($mensaje);
            echo $mensaje_Validado;
        }
    }
    catch(PDOException $e)
    {
        echo "Error: " . $e->getMessage();
    } finally {
        $conexion->Desconectar();
    }
  

?>