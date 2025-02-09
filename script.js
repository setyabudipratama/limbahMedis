VANTA.GLOBE({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: "yellow",
    backgroundColor: "black"
})

document.querySelector('.fa-bars').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('active')
    this.classList.toggle('fa-xmark')
})

document.querySelector('nav ul li:nth-child(1)').addEventListener('click', function() {
    document.querySelector('header').scrollIntoView({ behavior: 'smooth' })
})
document.querySelector('nav ul li:nth-child(2)').addEventListener('click', function() {
    document.querySelector('#statistik').scrollIntoView({ behavior: 'smooth' })
})
document.querySelector('nav ul li:nth-child(3)').addEventListener('click', function() {
    document.querySelector('#input').scrollIntoView({ behavior: 'smooth' })
})
document.querySelector('nav ul li:nth-child(4)').addEventListener('click', function() {
    document.querySelector('#laporan').scrollIntoView({ behavior: 'smooth' })
})

const myChart = document.getElementById('myChart').getContext('2d');
// myChart.canvas.style.width = '100';
const chart = new Chart(myChart, {
    type: 'bar',
    data: {
        labels: ['daur ulang', 'berbahaya', 'lainnya'],
        datasets: [{
            label: 'Pengolahan Limbah Medis',
            data: [800, 400, 300],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',    
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
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

document.querySelector('#input .container .content form .button button').addEventListener('click', function(e) {
    e.preventDefault()
})
