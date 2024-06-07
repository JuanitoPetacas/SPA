import { GetHost, SetTitle } from '../../../Assets/Js/globals.functions.js';
import { } from '../Assets/Helper/Admin.Layout.js';
import { SetAsideActive } from '../../Utils/asidebar.js';
SetTitle('Gráficos');
SetAsideActive('Gráficos');
fetch('').then(response => response.json())
.then(data => {
  document.getElementById('ingresosPorTiempo').innerHTML = `
  <canvas id="cvsIngresosTiempo"></canvas>
  `;
  const cvsIngresosTiempo = document.getElementById('cvsIngresosTiempo');
  new Chart(cvsIngresosTiempo, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: 'Ingresos',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: 'green'
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}).catch(err => {
  console.error(err);
});
fetch('').then(response => response.json())
.then(data => {
  document.getElementById('popularidadTratamientos').innerHTML = `
  <canvas id="cvsPopularidadTratamientos"></canvas>
  `;
  const cvsPopularidadTratamientos = document.getElementById('cvsPopularidadTratamientos');
  new Chart(cvsPopularidadTratamientos, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: 'Popularidad',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: 'yellow'
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}).catch(err => {
  console.error(err);
});
fetch('').then(response => response.json())
.then(data => {
  document.getElementById('ingresosPorServicio').innerHTML = `
  <canvas id="cvsIngresosServicio"></canvas>
  `;
  const cvsIngresosServicio = document.getElementById('cvsIngresosServicio');
  new Chart(cvsIngresosServicio, {
    type: 'pie',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        }
      }
    },
  });
}).catch(err => {
  console.error(err);
});