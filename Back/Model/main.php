<?php
class MySql
{
    private $hostname = "localhost";
    private $username = "root";
    private $password = "";
    private $database = "db_tienda";

    private $cnn;

    public function Conectar()
    {
        try {
            $this->cnn = mysqli_connect($this->hostname, $this->username, $this->password, $this->database);
            return true;
        } catch (mysqli_sql_exception $ex) {
            echo $ex;
            return false;
        }
    }

    public function Desconectar()
    {
        try {
            mysqli_close($this->cnn);
            return true;
        } catch (mysqli_sql_exception $ex) {
            echo $ex;
            return false;
        }
    }






/* Método ConsultaSimple($consulta):
Este método se utiliza para ejecutar consultas SQL simples (como INSERT, UPDATE o DELETE) en la base de datos.*/

    public function ConsultaSimple($consulta)
    {
        try {
            // Primero, llama al método Conectar() para establecer la conexión con la base de datos.
            if ($this->Conectar()) {
                //Luego, ejecuta la consulta SQL utilizando la función mysqli_query().
                mysqli_query($this->cnn, $consulta);
                if ($this->Desconectar()) {
                    // Después de ejecutar la consulta, llama al método Desconectar() para cerrar la conexión.
                    return true;
                } else {
                    echo "Error al Desconectarse...\n";
                    return false;
                }
            } else {
                echo "Error al conectarse...\n";
                return false;
            }
        } catch (mysqli_sql_exception $ex) {
            echo $ex;
            return false;
        }
    }


/*Método ConsultaCompleja($consulta):
Este método se utiliza para ejecutar consultas SQL complejas (como SELECT) que devuelven un conjunto de resultados.*/
    public function ConsultaCompleja($consulta)
    {
        try {
            if ($this->Conectar()) {
                //ejecuta la consulta SQL utilizando la función mysqli_query() y almacena el resultado en la variable $resultado.
                $resultado = mysqli_query($this->cnn, $consulta);
                if ($this->Desconectar()) {
                    //Después de ejecutar la consulta, llama al método Desconectar() para cerrar la conexión.
                    return $resultado;
                } else {
                    echo "Error al Desconectarse...\n";
                    return false;
                }
            } else {
                echo "Error al conectarse...\n";
                return false;
            }
        } catch (mysqli_sql_exception $ex) {
            echo $ex;
            return false;
        }
    }
}