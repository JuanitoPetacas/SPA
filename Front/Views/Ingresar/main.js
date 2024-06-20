import {
  SetTitle,
  ValidForm,
  SetLoading,
  SetError,
  GetHost,
} from "../Assets/Js/globals.functions.js";
import { } from "../Assets/Helper/layout.js";
SetTitle("Ingresar");
//objs
let txtPass = document.getElementById("contraseña");
const ckShowPass = document.getElementById("showPassword");
const btnEntrar = document.getElementById("btnEntrar");
//events
ckShowPass.addEventListener("change", () => {
  if (txtPass.type == "password") {
    txtPass.type = "text";
  } else {
    txtPass.type = "password";
  }
});
btnEntrar.addEventListener("click", () => {
<<<<<<< HEAD
  let form = document.querySelector('form');
  let formData = new FormData(form);
  fetch(`../../../Back/Controllers/iniciarSesion/iniciarSesion.php`, {
    method: "post",
    body: formData
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.message == "Existe") {
        window.localStorage.setItem('idUser') = data.id;
        window.localStorage.setItem('userName') = data.nombre;
        window.localStorage.setItem('asideBar') = data.asideBar;
        // ?  le doy permiso para la pagina
        window.location.href = "../Inicio/index.php"
      } else {
        // ? No le doy permiso
        window.location.href = "./index.php"
      }
    })

=======
  let form = document.querySelector("form");
  let formData = new FormData(form);
  fetch(`${GetHost()}/Back/Controllers/iniciarSesion/iniciarSesion.php`, {
    method: "post",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      let id = data[0].id_Rol;
      if (id == 1) {
        // ?  Redirecciono al administrador
        window.location.href = "../Inicio/index.php";
      } else if (id == 2) {
        // ? Redirecciono al Empleado
        window.location.href = "./index.php";
      }else{
        // ? Redirecciono al Cliente
        window.location.href = "./index.php";
      }
    });
>>>>>>> d0e6343ecf9ba039898e4f6d2d80e9d7f6c81cc5
});
