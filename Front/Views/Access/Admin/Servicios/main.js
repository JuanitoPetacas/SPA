import { GetHost, SetTitle, SetError, SetCatchModal, SetSucessModal, SetLoading, FillSelect, SetSelectOpt, ValidForm } from '../../../Assets/Js/globals.functions.js';
import {} from '../Assets/Helper/Admin.Layout.js';
import { SetAsideActive } from '../../Utils/asidebar.js';
import { DefaultOptions, SetColumns, FillTable } from '../Assets/Js/table.js';
import { SetModal, ShowModal } from '../../../Assets/Js/modal.js';
SetTitle('Servicios');
SetAsideActive('Servicios');
//Set columns
const Columns = [
    'Id',
    'Descripción',
    'Duración',
    'Valor',
    'Terapeuta',
    ''
];
let arrayTerapeutas = [];
fetch(`${GetHost()}/Back/Controllers/spaEmpelados/terapeutas/controlador_select_terapeutas.php`).then(response => response.json())
    .then(data => {
        arrayTerapeutas = data;
    })
    .catch(err => {
        SetCatchModal(err);
    })
const btnNuevo = document.getElementById('btnNuevo');
const dataTable = document.getElementById('dataTable');
const GetData = async () => {
    //Set controller
    var response = await fetch(`${GetHost()}/Back/Controllers/spaEmpelados/servicios/controlador_Select_servicios.php`);
    if (response.ok) {
        var data = await response.json();
        //Fill table, valid buttons
        FillTable(dataTable, data, 'edit');
        SetButtons();
    } else {
        SetModal(
            `
            <div class="text-danger">
                <i class="bi bi-emoji-frown-fill"></i>
                ERROR ${response.status}
            </div>
            `,
            'Ha ocurrido un fallo con el servidor, te recomendamos <b>recargar la pagina</b>',
            `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Aceptar</button>`
        );
        ShowModal();
    };
    let table = new DataTable('#dataTable', DefaultOptions);
};
const SetButtons = () => {
    var btnEdit = document.querySelectorAll('.btn-outline-info');
    btnEdit.forEach(item => {
        item.addEventListener('click', ()=>{
            var dataNode = item.parentElement.parentElement.parentElement.parentElement.childNodes;
            SetModal(
                `
                <div class="text-info">
                    <i class="bi bi-pencil-square"></i>
                    Editar Servicio
                </div>
                `,
                `
                <form id="frmEditar">
                    <div class="row flex-column">
                        <div class="col mb-2">
                            <label class="ms-1 mb-1 text-black-50" for="descripcionServicio">Descripción</label>
                            <input class="form-control" type="text" name="descripcion_Servicio" id="descripcionServicio" value="${dataNode[1].innerText}" required>
                        </div>
                        <div class="col">
                            <div class="row row-cols-1 row-cols-md-2">
                                <div class="col mb-2">
                                    <label class="ms-1 mb-1 text-black-50" for="duracion">Duración</label>
                                    <input class="form-control" type="text" name="duracion" id="duracion" value="${dataNode[2].innerText}" required>
                                </div>
                                <div class="col mb-2">
                                    <label class="ms-1 mb-1 text-black-50" for="valorServicio">Valor</label>
                                    <input class="form-control" type="number" name="valor_Servicio" id="valorServicio" value="${dataNode[3].innerText}" required>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <label class="ms-1 mb-1 text-black-50" for="idTerapeuta">Terapeuta</label>
                            <select class="form-select" name="id_Terapeuta" id="idTerapeuta"></select>
                        </div>
                    </div>
                </form>
                `,
                `
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-info" id="btnEditar">Guardar</button
                `
            );
            FillSelect('idTerapeuta', arrayTerapeutas);
            SetSelectOpt('idTerapeuta', dataNode[4].innerText)
            ShowModal();
            var btnEditar = document.getElementById('btnEditar');
            btnEditar.addEventListener('click', ()=>{
                if (ValidForm('frmEditar')) {
                    SetLoading(btnEditar);
                    var formData = new FormData(document.getElementById('frmEditar'));
                    formData.append('id', parseInt(dataNode[0].innerText));
                    var object = {};
                    formData.forEach((value, key) => {
                        object[key] = value;
                    });
                    //Set controller and send data for body
                    $.ajax({
                        url: `${GetHost()}/Back/Controllers/spaEmpelados/servicios/controlador_edit_servicio.php`,
                        type: 'POST',
                        data: object,
                        success: function (data) {
                            SetSucessModal(data);
                        },
                        error: function (err) {
                            SetCatchModal(err);
                        }
                    });
                };
            });
        });
    });
};
document.addEventListener('DOMContentLoaded', ()=>{
    SetColumns(dataTable, Columns);
    GetData();
});
btnNuevo.addEventListener('click', ()=>{
    SetModal(
        `
        <div class="text-primary">
            <i class="bi bi-plus-lg"></i>
            Agregar Servicio
        </div>
        `,
        `
        <form id="frmNuevo">
            <div class="row flex-column">
                <div class="col mb-2">
                    <label class="ms-1 mb-1 text-black-50" for="descripcionServicio">Descripción</label>
                    <input class="form-control" type="text" name="descripcion_Servicio" id="descripcionServicio" required>
                </div>
                <div class="col">
                    <div class="row row-cols-1 row-cols-md-2">
                        <div class="col mb-2">
                            <label class="ms-1 mb-1 text-black-50" for="valorServicio">Valor</label>
                            <input class="form-control" type="number" name="valor_Servicio" id="valorServicio" required>
                        </div>
                        <div class="col mb-2">
                            <label class="ms-1 mb-1 text-black-50" for="duracion">Duración</label>
                            <input class="form-control" type="text" name="duracion" id="duracion" required>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <label class="ms-1 mb-1 text-black-50" for="idTerapeuta">Terapeuta</label>
                    <select class="form-select" name="id_Terapeuta" id="idTerapeuta"></select>
                </div>
            </div>
        </form>
        `,
        `
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary" id="btnGuardar">Guardar</button>
        `
    );
    ShowModal();
    var btnGuardar = document.getElementById('btnGuardar');
    btnGuardar.addEventListener('click', ()=>{
        if (ValidForm('frmNuevo')) {
            SetLoading(btnGuardar);
            var formData = new FormData(document.getElementById('frmNuevo'));
            var object = {};
            formData.forEach((value, key) => {
                object[key] = value;
            });
            //Set controller and send data for body
            $.ajax({
                url: `${GetHost()}/Back/Controllers/spaEmpelados/servicios/controlador_insertar_servicio.php`,
                type: 'POST',
                data: object,
                success: function (data) {
                    SetSucessModal(data);
                },
                error: function (err) {
                    SetCatchModal(err);
                }
            });
        };
    });
});