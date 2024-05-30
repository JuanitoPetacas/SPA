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
                <h1>Gestión de Empleados</h1>
            </div>
            <div class="row px-5">
                <div class="col-auto">
                    <button class="btn btn-info fw-bold border-3" type="button" id="btnNuevo">
                        <i class="bi bi-plus-lg"></i>
                        Nuevo
                    </button>
                </div>
            </div>
            <div class="row p-5 pt-3">
                <div class="col">
                    <div class="table-responsive">
                        <table id="dataTable" class="table table-hover w-100">
                            <thead class="table-dark"></thead>
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
    <script src="../../Utils/datatables.min.js"></script>
    <script type="module" src="main.js"></script>
</body>
</html>