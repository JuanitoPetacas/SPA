import { GetHost, SetTitle, SetError, SetCatchModal, SetLoading, ValidForm } from '../../../Assets/Js/globals.functions.js';
import {} from '../Assets/Helper/Client.Layout.js';
import { SetAsideActive } from '../../Utils/asidebar.js';
SetTitle('Citas');
SetAsideActive('Citas');
const inpFecha = document.getElementById('fecha');
inpFecha.min = new Date().toISOString().split('T')[0];

let btnReservar = document.getElementById('btnReservar');
btnReservar.addEventListener('click', ()=>{
    if (ValidForm('frmReservar')) {
        SetLoading(btnReservar);
        //Controller
        fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then(data => {
            //Manipulate data
            
        })
        .catch(err => {
            SetCatchModal(err);
        });
    };
});