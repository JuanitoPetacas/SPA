import { SetTitle, ValidForm, ConfirmPass, SetLoading, SetError } from '../Assets/Js/globals.functions.js';
import {} from '../Assets/Helper/layout.js';
import { SetModal, ShowModal } from '../Assets/Js/modal.js';
SetTitle('Registrarse');
//objs
const txtPass = document.getElementById('password');
const txtConfirmPass = document.getElementById('confirmPass');
const btnRegistrarme = document.getElementById('btnRegistrarme');
//events
txtConfirmPass.addEventListener('focusout', ()=>{
    ConfirmPass(txtPass.value, txtConfirmPass);
    txtPass.addEventListener('focusout', ()=>{
        ConfirmPass(txtPass.value, txtConfirmPass);
    });
});
btnRegistrarme.addEventListener('click', ()=>{
    if (ValidForm(document.querySelector('form'))) {
        SetLoading(btnRegistrarme);
        //controller
        fetch('', {
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        }).then(res => res.json())
        .then(data => {
            // valid login
            if (data.success) {
                SetModal(
                    `
                    <i class="bi bi-emoji-laughing-fill"></i>
                    ¡Felicidades!
                    `,
                    'Usuario registrado correctamente',
                    `
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    `
                );
                ShowModal();
            } else {
                SetError(data.message);
            };
        }).catch(err => {
            SetError(err);
        });
    };
});