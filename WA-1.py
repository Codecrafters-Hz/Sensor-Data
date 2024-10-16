import matplotlib.pyplot as plt
import numpy as np
import time

# Initialize the plot
plt.ion()  # Turn on interactive mode
fig, ax = plt.subplots()
x_data = []
y_data = []

# Set up the plot labels
ax.set_xlabel('Time (s)')
ax.set_ylabel('Sensor Value (Resistance or Voltage)')
line, = ax.plot(x_data, y_data, label="Sensor Data")
ax.legend()

start_time = time.time()

# Function to simulate reading data from a sensor
def read_sensor_data():
    # Simulate sensor data, e.g., resistance or voltage (this can be replaced with real data reading)
    return np.random.uniform(0.5, 5.0)  # Simulated data between 0.5 and 5.0

try:
    while True:
        # Update time and sensor value
        current_time = time.time() - start_time
        sensor_value = read_sensor_data()

        # Append new data
        x_data.append(current_time)
        y_data.append(sensor_value)

        # Update the plot
        line.set_xdata(x_data)
        line.set_ydata(y_data)
        ax.relim()
        ax.autoscale_view()

        # Redraw the plot
        plt.draw()
        plt.pause(0.1)  # Adjust to control how often the plot updates

except KeyboardInterrupt:
    # Graceful exit on interruption
    print("Stopped plotting.")
