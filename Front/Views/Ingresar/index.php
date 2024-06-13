<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../Assets/Css/styles.css">
</head>

<body class="container-fluid bg-body-secondary">
    <main class="row mb-5 mb-md-0">
        <div class="container-fluid">
            <header class="row"></header>
            <div class="row p-2 pb-0">
                <nav class="navbar navbar-expand-lg bg-body-tertiary rounded-3 shadow-sm"></nav>
            </div>
        </div>
        <div class="row bg-img-login align-content-around">
            <div class="col-11 col-md-4 col-lg-3 mx-auto">
                <div class="bg-body-tertiary rounded-4 border shadow p-3 p-md-4">
                    <h1 class="display-5 fw-normal text-center mb-0">
                        Ingreso
                    </h1>
                    <p class="text-black-50 fs-4 text-center mb-4">Bienvenido a Azkara Spa</p>
                    <form>
                        <div class="form-floating fs-5 py-1 mb-3">
                            <input type="email" class="form-control rounded-3" name="email" id="email"
                                placeholder="Ejemplo@dominio.com" required>
                            <label for="email">Correo electrónico</label>
                        </div>
                        <div class="form-floating fs-5 py-1 mb-1">
                            <input type="password" class="form-control rounded-3" name="pass" id="contraseña"
                                placeholder="Juan1#23$%" required>
                            <label for="contraseña">Contraseña</label>
                        </div>
                        <div class="form-check text-black-50">
                            <input class="form-check-input" type="checkbox" id="showPassword">
                            <label class="form-check-label" for="showPassword">
                                Mostrar contraseña
                            </label>
                        </div>
                        <p class="mb-0" id="lblErr"></p>
                        <div class="row">
                            <div class="col-auto ms-auto">
                                <button class="btn btn-lg btn-primary px-3" type="button" id="btnEntrar">
                                    <i class="bi bi-box-arrow-in-right"></i>
                                    Entrar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="container-fluid Social-Media"></div>
        </div>
    </main>
    <footer class="row"></footer>
    <script type="module" src="main.js"></script>
</body>

</html>