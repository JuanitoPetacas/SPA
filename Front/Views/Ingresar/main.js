import {
  SetTitle,
  ValidForm,
  SetLoading,
  SetError,
  GetHost,
} from "../Assets/Js/globals.functions.js";
import {} from "../Assets/Helper/layout.js";
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
});
