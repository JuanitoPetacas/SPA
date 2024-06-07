<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../Utils/datatables.min.css">
</head>
<body class="container-fluid">
    <header class="row"></header>
    <div class="row">
        <nav class="navbar navbar-expand-lg bg-dark shadow"></nav>
    </div>
    <main class="row">
        <aside class="col-auto border border-secondary px-0">
            <ul class="nav nav-pills flex-column" id="asideBar"></ul>
        </aside>
        <div class="col">
            <div class="row p-5 pb-4">
                <h1>Reportes de Empresa</h1>
            </div>
            <div class="row p-5 pt-3">
                <div class="col">
                    <h3>Ingresos Generados por Tiempo</h3>
                    <div id="lblIngresosTiempo"></div>
                    <div class="table-responsive">
                        <table id="dtIngresosTiempo" class="table table-hover w-100">
                            <thead class="table-dark">
                                <tr>
                                    <th>Dia</th>
                                    <th>Mes</th>
                                    <th>Año</th>
                                    <th>Ingreso</th>
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="row p-5 pt-3">
                <div class="col">
                    <h3>Ocupación de Terapeutas</h3>
                    <div id="lblOcupacionTerapeutas"></div>
                    <div class="table-responsive">
                        <table id="dtOcupacionTerapeutas" class="table table-hover w-100">
                            <thead class="table-dark">
                                <tr>
                                    <th>Terapeuta</th>
                                    <th>Ocupación</th>
                                    <th>Horarios</th>
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="row p-5 pt-3">
                <div class="col">
                    <h3>Clientes Frecuentes</h3>
                    <div id="lblClientesFrecuentes"></div>
                    <div class="table-responsive">
                        <table id="dtClientesFrecuentes" class="table table-hover w-100">
                            <thead class="table-dark">
                                <tr>
                                    <th>Cliente</th>
                                    <th>Tratamiento</th>
                                    <th>Visitas</th>
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="row p-5 pt-3">
                <div class="col">
                    <h3>Inventario y Consumo de Productos</h3>
                    <div id="lblInventarioConsumo"></div>
                    <div class="table-responsive">
                        <table id="dtInventarioConsumo" class="table table-hover w-100">
                            <thead class="table-dark">
                                <tr>
                                    <th>Producto</th>
                                    <th>Stock</th>
                                    <th>Consumidos</th>
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer class="row"></footer>
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true"></div>
    <script src="../../../Assets/Js/bootstrap.bundle.min.js"></script>
    <script src="../../Utils/vfs_fonts.js"></script>
    <script src="../../Utils/pdfmake.min.js"></script>
    <script src="../../Utils/datatables.min.js"></script>
    <script type="module" src="main.js"></script>
</body>
</html>