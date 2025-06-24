const ctx = document.getElementById('graficaVentas2025').getContext('2d');
const ventasMensuales = [1200, 1500, 1100, 1800, 1700, 1600, 2000, 2100, 1900, 2200, 2300, 2500];
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [{
            label: 'Ventas 2025 ($)',
            data: ventasMensuales,
            backgroundColor: 'rgba(33, 150, 243, 0.7)',
            borderColor: 'rgba(33, 150, 243, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});