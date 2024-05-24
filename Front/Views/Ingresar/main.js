import { SetTitle, ValidForm, SetLoading, SetError } from '../Assets/Js/globals.functions.js';
import {} from '../Assets/Helper/layout.js';
SetTitle('Ingresar');
//objs
let txtPass = document.getElementById('contraseña');
const ckShowPass = document.getElementById('showPassword');
const btnEntrar = document.getElementById('btnEntrar');
//events
ckShowPass.addEventListener('change', ()=>{
    if (txtPass.type == 'password') {
        txtPass.type = 'text';
    } else {
        txtPass.type = 'password';
    };
});
btnEntrar.addEventListener('click', ()=>{
    if (ValidForm(document.querySelector('form'))) {
        SetLoading(btnEntrar);
        //controller
        fetch('', {
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        }).then(res => res.json())
        .then(data => {
            //valid login
            if (data.success) {
                window.location.href = data.access;
            } else {
                SetError(data.message);
            };
        }).catch(err => {
            SetError(err);
        });
    }
});