from flask import Flask, render_template
import qrcode

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/gerar_qr_code')
def gerar_qr_code():
    texto = "Gerando QR code..."
    nome_arquivo = "static/qr_code.png"
    gerar_qr_code(texto, nome_arquivo)
    return render_template('aceso.html')

def gerar_qr_code(texto, nome_arquivo):
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(texto)
    qr.make(fit=True)

    imagem_qr = qr.make_image(fill_color="black", back_color="white")
    imagem_qr.save(nome_arquivo)

if __name__ == '__main__':
    app.run(debug=True)
