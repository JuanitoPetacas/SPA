import { GetHost, SetTitle } from '../../../Assets/Js/globals.functions.js';
import { } from '../Assets/Helper/Admin.Layout.js';
import { SetAsideActive } from '../../Utils/asidebar.js';
import { FillTable } from '../Assets/Js/table.js';
import { SetModal, ShowModal } from '../../../Assets/Js/modal.js';
SetTitle('Reportes');
SetAsideActive('Reportes');
const Options = {
    responsive: true,
    language: {
        "decimal": "",
        "emptyTable": "No hay datos disponibles en la tabla",
        "info": "Mostrando _START_ a _END_ de _TOTAL_ entradas",
        "infoEmpty": "Mostrando 0 a 0 de 0 entradas",
        "infoFiltered": "(filtrado de _MAX_ entradas totales)",
        "infoPostFix": "",
        "thousands": ",",
        "lengthMenu": "Mostrar _MENU_ entradas",
        "loadingRecords": "Cargando...",
        "processing": "",
        "search": "Buscar:",
        "zeroRecords": "No se encontraron registros coincidentes",
        "paginate": {
            "first": "«",
            "last": "»",
            "next": "›",
            "previous": "‹"
        },
        "aria": {
            "orderable": "Ordenar por esta columna",
            "orderableReverse": "Ordenar esta columna en orden inverso"
        }
    },
    layout: {
        top2Start: 'buttons'
    },
    buttons: [
        {
            extend: 'excel',
            text: `
            <i class="bi bi-file-earmark-spreadsheet"></i>
            Excel
            `,
            className: 'btn-success'
        },
        {
            extend: 'pdf',
            text: `
            <i class="bi bi-filetype-pdf"></i>
            PDF
            `,
            className: 'btn-danger'
        }
    ]
};
const dtIngresosTiempo = document.getElementById('dtIngresosTiempo');
const dtOcupacionTerapeutas = document.getElementById('dtOcupacionTerapeutas');
const dtClientesFrecuentes = document.getElementById('dtClientesFrecuentes');
const dtInventarioConsumo = document.getElementById('dtInventarioConsumo');
const Query = async (URL) => {
    var response = await fetch(URL);
    if (response.ok) {
        var data = await response.json();
        return data;
    } else {
        return null;
    };
};
const SetErrAlert = (Err) => {
    return `
    <div class="alert alert-danger alert-dismissible mt-4 mb-0" role="alert">
        <div><b>Ha ocurrido un error al cargar los datos:</b> ${Err}</div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `;
};
// TABLA INGRESOS POR TIEMPO
Query('').then(data => {
    FillTable(dtIngresosTiempo, data, '')
}).catch(err => {
    document.getElementById('lblIngresosTiempo').innerHTML = SetErrAlert(err);
}).finally(()=>{
    new DataTable('#dtIngresosTiempo', Options);
});
// TABLA OCUPACIÓN DE TERAPEUTA
Query('').then(data => {
    FillTable(dtOcupacionTerapeutas, data, '')
}).catch(err => {
    document.getElementById('lblOcupacionTerapeutas').innerHTML = SetErrAlert(err);
}).finally(()=>{
    new DataTable('#dtOcupacionTerapeutas', Options);
});
// TABLA CLIENTES MÁS FRECUENTES
Query('').then(data => {
    FillTable(dtClientesFrecuentes, data, '')
}).catch(err => {
    document.getElementById('lblClientesFrecuentes').innerHTML = SetErrAlert(err);
}).finally(()=>{
    new DataTable('#dtClientesFrecuentes', Options);
});
// TABLA INVENTARIO Y CONSUMO DE PRODUCTOS
Query('').then(data => {
    FillTable(dtInventarioConsumo, data, '')
}).catch(err => {
    document.getElementById('lblInventarioConsumo').innerHTML = SetErrAlert(err);
}).finally(()=>{
    new DataTable('#dtInventarioConsumo', Options);
});