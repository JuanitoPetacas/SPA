import { GetHost, SetTitle, SetError, SetCatchModal, SetLoading, ValidForm } from '../../../Assets/Js/globals.functions.js';
import {} from '../Assets/Helper/Admin.Layout.js';
import { SetAsideActive } from '../../Utils/asidebar.js';
import { DefaultOptions, SetColumns, FillTable } from '../Assets/Js/table.js';
import { SetModal, ShowModal } from '../../../Assets/Js/modal.js';
SetTitle('Roles');
SetAsideActive('Usuarios');
//Set columns
const Columns = [
    'Id',
    'Descripción',
    ''
];
const btnNuevo = document.getElementById('btnNuevo');
const dataTable = document.getElementById('dataTable');
const GetData = async () => {
    //Set controller
    var response = await fetch('Clientes.json');
    if (response.ok) {
        var data = await response.json();
        //Fill table, valid buttons
        FillTable(dataTable, data, true);
        var btnEdit = document.querySelectorAll('.btn-outline-info');
        btnEdit.forEach(item => {
            item.addEventListener('click', ()=>{
                var dataNode = item.parentElement.parentElement.parentElement.parentElement.childNodes;
                SetModal(
                    `
                    <div class="text-info">
                        <i class="bi bi-pencil-square"></i>
                        Editar Roles
                    </div>
                    `,
                    `
                    <form id="frmEditar">
                        <div class="row flex-column">
                            <div class="col mb-2">
                                <label class="ms-1 mb-1 text-black-50" for="descripcion">Descripción</label>
                                <input class="form-control" type="text" name="descripcion" id="descripcion" value="${dataNode[1].innerText}" required>
                            </div>
                        </div>
                    </form>
                    `,
                    `
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-info" id="btnEditar">Guardar</button
                    `
                );
                ShowModal();
                var btnEditar = document.getElementById('btnEditar');
                btnEditar.addEventListener('click', ()=>{
                    if (ValidForm('frmEditar')) {
                        SetLoading(btnEditar);
                        //Set controller and send data for body
                        fetch('', {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        }).then(response => response.json())
                        .then(data => {
                            //Manipulate data
                        }).catch(err => {
                            SetCatchModal(err);
                        })
                    };
                });
            });
        });
        var btnDelete = document.querySelectorAll('.btn-danger');
        btnDelete.forEach(item => {
            item.addEventListener('click', ()=>{
                var dataNode = item.parentElement.parentElement.parentElement.parentElement.childNodes;
                SetModal(
                    `
                    <div class="text-info">
                        <i class="bi bi-trash-fill"></i>
                        Eliminar Roles
                    </div>
                    `,
                    `
                    ¿Seguro que quieres eliminar a "<b>${dataNode[1].innerText} ${dataNode[2].innerText}</b>"?
                    `,
                    `
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-danger" id="btnEliminar">Eliminar</button
                    `
                );
                ShowModal();
                var btnEliminar = document.getElementById('btnEliminar');
                btnEliminar.addEventListener('click', ()=>{
                    SetLoading(btnEliminar);
                    //Set controller and send data for body
                    fetch('', {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then(response => response.json())
                    .then(data => {
                        //Manipulate data
                    }).catch(err => {
                        SetCatchModal(err);
                    })
                });
            });
        });
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
document.addEventListener('DOMContentLoaded', ()=>{
    SetColumns(dataTable, Columns);
    GetData();
});
btnNuevo.addEventListener('click', ()=>{
    SetModal(
        `
        <div class="text-primary">
            <i class="bi bi-plus-lg"></i>
            Agregar Roles
        </div>
        `,
        `
        <form id="frmNuevo">
            <div class="row flex-column">
                <div class="col mb-2">
                    <label class="ms-1 mb-1 text-black-50" for="descripcion">Descripción</label>
                    <input class="form-control" type="text" name="descripcion" id="descripcion" required>
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
            //Set controller and send data for body
            fetch('', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json())
            .then(data => {
                //Manipulate data
            }).catch(err => {
                SetCatchModal(err);
            })
        };
    });
});