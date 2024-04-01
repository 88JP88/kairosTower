
</html>
<script src="qrcodejs/qrcode.min.js"></script>

<div id="codigo-qr"></div>

<script>


const codigoQRDiv = document.getElementById('codigo-qr');
const codigoQR = new QRCode(codigoQRDiv, {
  text: 'Texto......',
  width: 128,
  height: 128
});
</script>