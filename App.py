from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        input_data = request.form.get('inputData')
        # Process the input_data as needed
        return render_template('index.html', data=input_data)
    return render_template('index.html', data=None)

if __name__ == "__main__":
    app.run(debug=True)
