<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../Assets/Css/styles.css">
</head>
<body class="container-fluid bg-body-tertiary">
    <header class="row"></header>
    <div class="row">
        <nav class="navbar navbar-expand-lg bg-dark shadow"></nav>
    </div>
    <main class="row bg-img-login align-content-center py-5">
        <div class="col-11 col-md-4 mx-auto">
            <div class="bg-body-secondary rounded-4 border shadow p-4 p-md-5">
                <h1 class="display-5 fw-normal text-center mb-0">
                    <i class="bi bi-box-arrow-in-right"></i>
                    Ingreso
                </h1>
                <p class="text-black-50 fs-4 text-center mb-4">Bienvenido a Azkara Spa</p>
                <form>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control rounded-3" name="email" id="email" placeholder="Ejemplo@dominio.com" required>
                        <label for="email">Correo electrónico</label>
                    </div>
                    <div class="form-floating mb-1">
                        <input type="password" class="form-control rounded-3" name="pass" id="contraseña" placeholder="Juan1#23$%" required>
                        <label for="contraseña">Contraseña</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="showPassword">
                        <label class="form-check-label" for="showPassword">
                            Mostrar Contraseña
                        </label>
                    </div>
                    <p class="mb-0" id="lblErr"></p>
                    <div class="row">
                        <div class="col-auto ms-auto">
                            <button class="btn btn-lg btn-dark rounded-pill px-4" type="button" id="btnEntrar">
                                Entrar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="container-fluid Social-Media"></div>
    </main>
    <footer class="row"></footer>
    <script type="module" src="main.js"></script>
</body>
</html>