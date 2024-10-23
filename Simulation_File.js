document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('sensorChart').getContext('2d');
    
    let interval;
    let isRunning = false;

    // Chart.js configuration with interpolation for smooth curves
    const sensorChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],  // Time intervals
            datasets: [
                {
                    label: 'Voltage (V)',
                    data: [],
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4,  // Interpolation mode for smooth curves
                },
                {
                    label: 'Resistance (Ω)',
                    data: [],
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4,  // Interpolation mode for smooth curves
                }
            ]
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

    // Simulate real-time sensor data
    function fetchSensorData() {
        const voltage = (Math.random() * 5).toFixed(2);  // Simulate voltage between 0 and 5V
        const resistance = (Math.random() * 100).toFixed(2);  // Simulate resistance between 0 and 100Ω

        const currentTime = new Date().toLocaleTimeString();

        if (sensorChart.data.labels.length > 20) {
            sensorChart.data.labels.shift();
            sensorChart.data.datasets[0].data.shift();
            sensorChart.data.datasets[1].data.shift();
        }

        sensorChart.data.labels.push(currentTime);
        sensorChart.data.datasets[0].data.push(voltage);
        sensorChart.data.datasets[1].data.push(resistance);

        sensorChart.update();
    }

    // Start the simulation
    document.getElementById('startBtn').addEventListener('click', function () {
        if (!isRunning) {
            interval = setInterval(fetchSensorData, 1000);
            isRunning = true;
            document.getElementById('startBtn').disabled = true;
            document.getElementById('stopBtn').disabled = false;
            document.getElementById('resetBtn').disabled = false;
        }
    });

    // Stop the simulation
    document.getElementById('stopBtn').addEventListener('click', function () {
        clearInterval(interval);
        isRunning = false;
        document.getElementById('startBtn').disabled = false;
        document.getElementById('stopBtn').disabled = true;
    });

    // Reset the chart
    document.getElementById('resetBtn').addEventListener('click', function () {
        clearInterval(interval);
        isRunning = false;
        sensorChart.data.labels = [];
        sensorChart.data.datasets[0].data = [];
        sensorChart.data.datasets[1].data = [];
        sensorChart.update();

        document.getElementById('startBtn').disabled = false;
        document.getElementById('stopBtn').disabled = true;
        document.getElementById('resetBtn').disabled = true;
    });
});
