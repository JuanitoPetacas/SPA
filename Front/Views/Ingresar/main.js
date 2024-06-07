import {
  SetTitle,
  ValidForm,
  SetLoading,
  SetError,
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
    let form = document.querySelector('form');
    let formData = new FormData(form);
    fetch(`../../../Back/Controllers/iniciarSesion/iniciarSesion.php`, {
      method: "post",
      body: formData
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message == "Existe")
          {
            // ?  le doy permiso para la pagina
            window.location.href = "../Inicio/index.php"
          }else{
            // ? No le doy permiso
            window.location.href = "./index.php"
          }
      })

});
