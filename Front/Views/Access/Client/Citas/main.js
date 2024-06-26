import { GetHost, SetTitle, SetCatchModal, SetLoading, ValidForm, SetSucessModal, FillSelect } from '../../../Assets/Js/globals.functions.js';
import { } from '../Assets/Helper/Client.Layout.js';
import { SetAsideActive } from '../../Utils/asidebar.js';
import { ShowModal } from '../../../Assets/Js/modal.js';
SetTitle('Citas');
SetAsideActive('Citas');
const inpFecha = document.getElementById('fecha');
inpFecha.min = new Date().toISOString().split('T')[0];

fetch(`${GetHost()}/Back/Controllers/clientes/controlador_servicio_cliente.php`).then(response => response.json())
    .then(data => {
        FillSelect('idServicio', data);
    })
    .catch(err => {
        SetCatchModal(err);
    })
fetch(`${GetHost()}/Back/Controllers/productos/select_Productos.php`).then(response => response.json())
    .then(data => {
        FillSelect('idProducto', data);
    })
    .catch(err => {
        SetCatchModal(err);
    })
let btnReservar = document.getElementById('btnReservar');
btnReservar.addEventListener('click', () => {
    if (ValidForm('frmReservar')) {
        SetLoading(btnReservar);
        var formData = new FormData(document.getElementById('frmReservar'));
        formData.append('id', window.localStorage.getItem('idUser'))
        var object = {};
        formData.forEach((value, key) => {
            object[key] = value;
        });
        //Set controller and send data for body
        $.ajax({
            url: `${GetHost()}/Back/Controllers/ReservaCitas/controlador_insertar_cita.php`,
            type: 'POST',
            data: object,
            success: function (data) {
                data =JSON.parse(data)
                console.log(data);
                if (data.access) {
                    /**
                     * Aquí va la URL del controlador de la factura
                     */
                    $.ajax({
                        url: `${GetHost()}/Back/Controllers/ReservaCitas/controlador_insertar_cita.php`,
                        type: 'POST',
                        data: object,
                        success: function (data) {
                            data =JSON.parse(data)
                            console.log(data);
                            if (data.access) {
                                SetSucessModal(data.message);    
                            }else{
                                SetCatchModal(data.message);
                            }
                            ShowModal();
                        },
                        error: function (err) {
                            SetCatchModal(err);
                            ShowModal();
                        }
                    });   
                }else{
                    SetCatchModal(data.message);
                    ShowModal();
                }
            },
            error: function (err) {
                SetCatchModal(err);
                ShowModal();
            }
        });
        btnReservar.innerHTML = 'Reservar';
    };
});