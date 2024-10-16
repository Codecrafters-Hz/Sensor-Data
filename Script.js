document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('dataForm');
    const sensorChart = document.getElementById('sensorChart').getContext('2d');

    // Sample data for the chart
    let chartData = {
        labels: ['Time 1', 'Time 2', 'Time 3'],
        datasets: [{
            label: 'Sensor Value',
            data: [10, 20, 30],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    // Create a new chart
    const myChart = new Chart(sensorChart, {
        type: 'line',
        data: chartData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Handle form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault();  // Prevent default form submission

        const inputData = document.getElementById('inputData').value;

        // Update chart with new data (for example purposes)
        chartData.datasets[0].data.push(inputData);  // Add the new input data
        chartData.labels.push(`Time ${chartData.labels.length + 1}`);  // Update label

        // Update the chart
        myChart.update();

        // Clear the input field
        document.getElementById('inputData').value = '';
    });
});
