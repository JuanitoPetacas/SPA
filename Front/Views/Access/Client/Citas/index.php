<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body class="container-fluid bg-body-secondary">
    <div class="container-fluid">
        <header class="row"></header>
        <div class="row p-2 pb-0">
            <nav class="navbar navbar-expand-lg bg-body-tertiary rounded-3 shadow-sm"></nav>
        </div>
    </div>
    <main class="row mb-5 mb-md-0">
        <aside class="col col-md-auto g-0 p-2">
            <div class="bg-light rounded-3 p-2 shadow overflow-x-auto">
                <ul class="nav flex-nowrap flex-md-column gap-2" id="asideBar"></ul>
            </div>
        </aside>
        <section class="col px-3 px-md-5">
            <h4 class="mt-3 mb-0 fw-normal">Bienvenido a</h4>
            <h2 class="fw-bold mb-3">Reservar Cita</h2>
            <div class="row mb-2">
                <div class="col col-md-6">
                    <div class="bg-body rounded-3 p-3 p-md-4 shadow-sm">
                        <form id="frmReservar">
                            <div class="row">
                                <div class="col mb-2">
                                    <label class="fs-5 ms-1 mb-1 text-black-50" for="fecha">Fecha</label>
                                    <input class="form-control" type="date" name="fecha" id="fecha" required>
                                </div>
                            </div>
                            <div class="row row-cols-1 row-cols-md-2">
                                <div class="col mb-2">
                                    <label class="fs-5 ms-1 mb-1 text-black-50" for="horaInicio">Hora de Inicio</label>
                                    <input class="form-control" type="time" name="hora_Inicio" id="horaInicio" required>
                                </div>
                                <div class="col mb-2">
                                    <label class="fs-5 ms-1 mb-1 text-black-50" for="horaFin">Hora de Fin</label>
                                    <input class="form-control" type="time" name="hora_Fin" id="horaFin" required>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col mb-4">
                                    <label class="fs-5 ms-1 mb-1 text-black-50" for="idServicio">Servicio</label>
                                    <select class="form-select" name="id_Servicio" id="idServicio" required>
                                        <option value="">Seleccionar...</option>
                                    </select>
                                </div>
                            </div>
                            <p class="mb-0" id="lblErr"></p>
                            <button class="btn btn-primary w-100" type="button" id="btnReservar">
                                Reservar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer class="row"></footer>
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true"></div>
    <script src="../../../Assets/Js/bootstrap.bundle.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script type="module" src="main.js"></script>
</body>

</html>