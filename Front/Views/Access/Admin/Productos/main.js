import { GetHost, SetTitle, SetError, SetCatchModal, SetSucessModal, SetLoading, ValidForm } from '../../../Assets/Js/globals.functions.js';
import {} from '../Assets/Helper/Admin.Layout.js';
import { SetAsideActive } from '../../Utils/asidebar.js';
import { DefaultOptions, SetColumns, FillTable } from '../Assets/Js/table.js';
import { SetModal, ShowModal } from '../../../Assets/Js/modal.js';
SetTitle('Productos');
SetAsideActive('Productos');
//Set columns
const Columns = [
    'Id',
    'Descripción',
    'Stock',
    'Valor',
    'Estado',
    ''
];
const btnNuevo = document.getElementById('btnNuevo');
const dataTable = document.getElementById('dataTable');
fetch(`${GetHost()}/Back/Controllers/spaEmpelados/productos/controlador_select_empleados.php`).then(response => response.json())
.then(data => {
    FillTable(dataTable, data, 'ambos');
    SetButtons();
}).catch(err => {
    SetModal(
        `
        <div class="text-danger">
            <i class="bi bi-emoji-frown-fill"></i>
            ERROR <span class="fs-6">${err}</span>
        </div>
        `,
        'Ha ocurrido un fallo con el servidor, te recomendamos <b>recargar la pagina</b>',
        `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Aceptar</button>`
    );
    ShowModal();
}).finally(()=>{
    new DataTable('#dataTable', DefaultOptions('productos', Columns.length - 1));
});
const SetButtons = () => {
    var btnEdit = document.querySelectorAll('.btn-outline-info');
    btnEdit.forEach(item => {
        item.addEventListener('click', ()=>{
            var dataNode = item.parentElement.parentElement.parentElement.parentElement.childNodes;
            SetModal(
                `
                <div class="text-info">
                    <i class="bi bi-pencil-square"></i>
                    Editar Producto
                </div>
                `,
                `
                <form id="frmEditar">
                    <div class="row flex-column">
                        <div class="col mb-2">
                            <label class="ms-1 mb-1 text-black-50" for="descripcion">Descripción</label>
                            <input class="form-control" type="text" name="descripcion" id="descripcion" value="${dataNode[1].innerText}" required>
                        </div>
                        <div class="col">
                            <div class="row row-cols-1 row-cols-md-2">
                                <div class="col mb-2">
                                    <label class="ms-1 mb-1 text-black-50" for="stock">Stock</label>
                                    <input class="form-control" type="text" name="stock" id="stock" value="${dataNode[2].innerText}" required>
                                </div>
                                <div class="col mb-2">
                                    <label class="ms-1 mb-1 text-black-50" for="valorProducto">Valor</label>
                                    <input class="form-control" type="text" name="valor_Producto" id="valorProducto" value="${dataNode[3].innerText}" required>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-2">
                            <label class="ms-1 mb-1 text-black-50" for="estado">Estado</label>
                            <select class="form-select" name="estado" id="estado" required>
                                <option value="">Seleccionar...</option>
                                <option value="1">Activo</option>
                                <option value="0">Inactivo</option>
                            </select>
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
                    var formData = new FormData(document.getElementById('frmEditar'));
                    formData.append('id', parseInt(dataNode[0].innerText));
                    var object = {};
                    formData.forEach((value, key) => {
                        object[key] = value;
                    });
                    //Set controller and send data for body
                    $.ajax({
                        url: `${GetHost()}/Back/Controllers/spaEmpelados/productos/controlador_edit_producto.php`,
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
    var btnDelete = document.querySelectorAll('.btn-danger');
    btnDelete.forEach(item => {
        item.addEventListener('click', ()=>{
            var dataNode = item.parentElement.parentElement.parentElement.parentElement.childNodes;
            SetModal(
                `
                <div class="text-info">
                    <i class="bi bi-trash-fill"></i>
                    Eliminar Producto
                </div>
                `,
                `
                ¿Seguro que quieres eliminar a "<b>${dataNode[1].innerText}</b>"?
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
                $.ajax({
                    url: `${GetHost()}/Back/Controllers/spaEmpelados/productos/controlador_eliminar_producto.php`,
                    type: 'POST',
                    data: { id: parseInt(dataNode[0].innerText) },
                    success: function (data) {
                        SetSucessModal(data);
                    },
                    error: function (err) {
                        SetCatchModal(err);
                    }
                });
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
            Agregar Producto
        </div>
        `,
        `
        <form id="frmNuevo">
            <div class="row flex-column">
                <div class="col mb-2">
                    <label class="ms-1 mb-1 text-black-50" for="descripcion">Descripción</label>
                    <input class="form-control" type="text" name="descripcion" id="descripcion" required>
                </div>
                <div class="col">
                    <div class="row row-cols-1 row-cols-md-2">
                        <div class="col mb-2">
                            <label class="ms-1 mb-1 text-black-50" for="stock">Stock</label>
                            <input class="form-control" type="text" name="stock" id="stock" required>
                        </div>
                        <div class="col mb-2">
                            <label class="ms-1 mb-1 text-black-50" for="valorProducto">Valor</label>
                            <input class="form-control" type="text" name="valor_Producto" id="valorProducto" required>
                        </div>
                    </div>
                </div>
                <div class="col mb-2">
                    <label class="ms-1 mb-1 text-black-50" for="estado">Estado</label>
                    <select class="form-select" name="estado" id="estado" required>
                        <option value="">Seleccionar...</option>
                        <option value="1">Activo</option>
                        <option value="0">Inactivo</option>
                    </select>
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
                url: `${GetHost()}/Back/Controllers/spaEmpelados/productos/controlador_insertar_producto.php`,
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