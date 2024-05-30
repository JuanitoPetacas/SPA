const DefaultOptions = {
    language: {
        "decimal":        "",
        "emptyTable":     "No hay datos disponibles en la tabla",
        "info":           "Mostrando _START_ a _END_ de _TOTAL_ entradas",
        "infoEmpty":      "Mostrando 0 a 0 de 0 entradas",
        "infoFiltered":   "(filtrado de _MAX_ entradas totales)",
        "infoPostFix":    "",
        "thousands":      ",",
        "lengthMenu":     "Mostrar _MENU_ entradas",
        "loadingRecords": "Cargando...",
        "processing":     "",
        "search":         "Buscar:",
        "zeroRecords":    "No se encontraron registros coincidentes",
        "paginate": {
            "first":      "Primero",
            "last":       "Ultimo",
            "next":       "&raquo;",
            "previous":   "&laquo;"
        },
        "aria": {
            "orderable":  "Ordenar por esta columna",
            "orderableReverse": "Ordenar esta columna en orden inverso"
        }
    }
};
const SetColumns = (dataTable, arrayCols) => {
    let tr = document.createElement('tr');
    arrayCols.forEach(Col => {
        var th = document.createElement('th');
        th.textContent = Col;
        tr.appendChild(th);
    });
    dataTable.firstElementChild.appendChild(tr);
};
function JsonToMatriz(json) {
    let Row = new Array();
    json.forEach(item => {
        let Cols = new Array();
        for (var key in item) {
            Cols.push(item[key].toString());
        };
        Row.push(Cols);
    });
    return Row;
};
const FillTable = (dataTable, data, boolBtn) => {
    dataTable.lastElementChild.innerHTML = '';
    let matrizData = JsonToMatriz(data);
    matrizData.forEach(Row => {
        let tr = document.createElement('tr');
        Row.forEach(Col => {
            var td = document.createElement('td');
            td.textContent = Col;
            tr.appendChild(td);
        });
        if (boolBtn) {
            tr.innerHTML += `
            <td>
                <div class="d-flex justify-content-center">
                    <div class="btn-group">
                        <button class="btn btn-sm btn-outline-info" type="button">
                            <i class="bi bi-pencil-square"></i>
                        </button>
                        <button class="btn btn-sm btn-danger" type="button">
                            <i class="bi bi-trash-fill"></i>
                        </button>
                    </div>
                </div>
            </td>
            `;
        };
        dataTable.lastElementChild.appendChild(tr);
    });

};
export {
    DefaultOptions,
    SetColumns,
    FillTable
};