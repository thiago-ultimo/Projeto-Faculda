from flask import Flask, render_template

app = Flask(__name__)

@app.route('/cadastro1')
def cadastro():
    return render_template('cadastro1.html')

if __name__ == '__main__':
    app.run(debug=True)
