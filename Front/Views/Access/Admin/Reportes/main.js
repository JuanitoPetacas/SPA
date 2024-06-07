import { GetHost, SetTitle } from '../../../Assets/Js/globals.functions.js';
import { } from '../Assets/Helper/Admin.Layout.js';
import { SetAsideActive } from '../../Utils/asidebar.js';
import { FillTable } from '../Assets/Js/table.js';
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
const clearNavLinks = (navLinks) => {
    navLinks.forEach(item => {
        if (item.classList.contains('active')) {
            item.classList.replace('active', 'link-secondary');
        };
    });
};
const setActiveLinks = (navLinks, text) => {
    clearNavLinks(navLinks);
    navLinks.forEach(item => {
        if (item.textContent.trim() == text) {
            item.classList.replace('link-secondary', 'active');
        };
    });
};
let navLinks = document.querySelectorAll('.nav-link.link-secondary');
const setDataTable = (URL, btnContent, innerHTML, idTable) => {
    setActiveLinks(navLinks, btnContent);
    let table = document.getElementById('table');
    table.innerHTML = innerHTML;
    let dataTable = document.getElementById(idTable);
    fetch(URL).then(response => response.json())
    .then(data => {
        FillTable(dataTable, data, '')
    }).catch(err => {
        console.error(err);
        document.getElementById('lblError').innerHTML = `
        <div class="alert bg-danger text-light shadow alert-dismissible fade show" role="alert">
            <i class="bi bi-exclamation-circle-fill me-2"></i>
            <strong>Ha ocurrido un error al recibir los datos</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `;
    }).finally(()=>{
        new DataTable(`#${idTable}`, Options);
    });
};
//*
//* AQUÍ EMPIEZAN LOS ENDPOINTS
//*
setDataTable(`${GetHost()}`, 'Ingresos Generados', `
<table class="table table-light table-hover fs-5 w-100 mb-0" id="dtIngresosTiempo">
    <thead>
        <tr>
            <th>Dia</th>
            <th>Mes</th>
            <th>Año</th>
            <th>Ingreso</th>
        </tr>
    </thead>
    <tbody></tbody>
</table>
`, 'dtIngresosTiempo');
navLinks.forEach(item => {
    item.addEventListener('click', ()=>{
        switch (item.textContent.trim()) {
            case 'Ingresos Generados':
                setDataTable(`${GetHost()}`, 'Ingresos Generados', `
                <table class="table table-light table-hover fs-5 w-100 mb-0" id="dtIngresosTiempo">
                    <thead>
                        <tr>
                            <th>Dia</th>
                            <th>Mes</th>
                            <th>Año</th>
                            <th>Ingreso</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
                `, 'dtIngresosTiempo');
                break;
            case 'Ocupación Terapeutas':
                setDataTable(`${GetHost()}`, 'Ocupación Terapeutas', `
                <table class="table table-light table-hover fs-5 w-100 mb-0" id="dtOcupacionTerapeutas">
                    <thead>
                        <tr>
                            <th>Terapeuta</th>
                            <th>Ocupación</th>
                            <th>Horarios</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
                `, 'dtOcupacionTerapeutas');
                break;
            case 'Clientes Frecuentes':
                setDataTable(`${GetHost()}`, 'Clientes Frecuentes', `
                <table class="table table-light table-hover fs-5 w-100 mb-0" id="dtClientesFrecuentes">
                    <thead>
                        <tr>
                            <th>Cliente</th>
                            <th>Tratamiento</th>
                            <th>Visitas</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
                `, 'dtClientesFrecuentes');
                break;
            case 'Consumo Productos':
                setDataTable(`${GetHost()}`, 'Consumo Productos', `
                <table class="table table-light table-hover fs-5 w-100 mb-0" id="dtInventarioConsumo">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Stock</th>
                            <th>Consumidos</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
                `, 'dtInventarioConsumo');
                break;
        };
    });
});