<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../Assets/Css/styles.css">
</head>
<body class="container-fluid">
    <header class="row"></header>
    <div class="row">
        <nav class="navbar navbar-expand-lg bg-dark shadow"></nav>
    </div>
    <main class="row bg-img-register py-5">
        <div class="col-11 col-md-9 col-lg-8 mx-auto">
            <div class="bg-body-secondary rounded-4 border shadow p-4 p-md-5">
                <div class="row g-3 g-md-5">
                    <div class="col-12 col-md-6 align-content-center">
                        <h1 class="display-4 fw-bold">¡Regístrate hoy!</h1>
                        <p class="fw-light fs-4">Los datos de se encuentran con un <b>(*)</b> son obligatorios</p>
                    </div>
                    <div class="col-12 col-md-6">
                        <form>
                            <h3 class="mb-1">Datos básicos</h3>
                            <label class="text-secondary fs-5 ms-1 mb-1" for="nombres">Nombres*</label>
                            <input type="text" class="form-control form-control-lg rounded-3 mb-1" name="nombres" id="nombres" required>
                            <label class="text-secondary fs-5 ms-1 mb-1" for="nombres">Apellidos*</label>
                            <input type="text" class="form-control form-control-lg rounded-3 mb-1" name="apellidos" id="apellidos" required>
                            <label class="text-secondary fs-5 ms-1 mb-1" for="telefono">Teléfono*</label>
                            <input type="tel" class="form-control form-control-lg rounded-3 mb-3" name="telefono" id="telefono" pattern="^[0-9]*$" required>
                            <h3 class="mb-1">Datos de ingreso</h3>
                            <label class="text-secondary fs-5 ms-1 mb-1" for="email">Email*</label>
                            <input type="email" class="form-control form-control-lg rounded-3 mb-1" name="email" id="email" required>
                            <label class="text-secondary fs-5 ms-1 mb-1" for="password">Contraseña*</label>
                            <input type="password" class="form-control form-control-lg rounded-3 mb-2" name="password" id="password" minlength="8" required>
                            <input type="password" class="form-control form-control-lg rounded-3 mb-1" placeholder="Confirmar contraseña" id="confirmPass" minlength="8" required>
                            <p class="pb-3 mb-0" id="lblErr"></p>
                            <div class="row">
                                <div class="col-auto ms-auto">
                                    <button class="btn btn-lg btn-dark rounded-pill px-4" type="button" id="btnRegistrarme">
                                        Registrarme
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid Social-Media"></div>
    </main>
    <footer class="row"></footer>
    <script type="module" src="main.js"></script>
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true"></div>
    <script src="../Assets/Js/bootstrap.bundle.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
</body>
</html>