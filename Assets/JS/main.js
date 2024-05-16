// clientes.js
fetch('../../back/controllers/clientes/controlador_Select_cliente.php')
    .then(response => response.json())
    .then(data => {
        const tablaClientes = document.getElementById('tabla-clientes').getElementsByTagName('tbody')[0];

        data.forEach(cliente => {
            const fila = document.createElement('tr');

            const celdaId = document.createElement('td');
            celdaId.textContent = cliente.id;
            fila.appendChild(celdaId);

            const celdaNombre = document.createElement('td');
            celdaNombre.textContent = cliente.nombre;
            fila.appendChild(celdaNombre);

            const celdaEmail = document.createElement('td');
            celdaEmail.textContent = cliente.email;
            fila.appendChild(celdaEmail);

            const celdaTelefono = document.createElement('td');
            celdaTelefono.textContent = cliente.telefono;
            fila.appendChild(celdaTelefono);

            tablaClientes.appendChild(fila);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });