import { GetHost, SetTitle, SetError, SetCatchModal, SetSucessModal, SetLoading, FillSelect, SetSelectOpt, ValidForm } from '../../../Assets/Js/globals.functions.js';
import { } from '../Assets/Helper/Admin.Layout.js';
import { SetAsideActive } from '../../Utils/asidebar.js';
import { DefaultOptions, SetColumns, FillTable } from '../Assets/Js/table.js';
import { SetModal, ShowModal } from '../../../Assets/Js/modal.js';
SetTitle('Gráficos');
SetAsideActive('Gráficos');
const ingresosPorTiempo = document.getElementById('ingresosPorTiempo');
const popularidadTratamientos = document.getElementById('popularidadTratamientos');
const ingresosPorServicio = document.getElementById('ingresosPorServicio');

new Chart(ingresosPorTiempo, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: 'Ingresos Generados por Tiempo',
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
new Chart(popularidadTratamientos, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: 'Popularidad de Tratamientos',
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
new Chart(ingresosPorServicio, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'Popularidad de Tratamientos',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
        }]
      },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Distribución de Ingresos por Servicio'
        }
      }
    },
  });