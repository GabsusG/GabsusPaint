export default function SaveButton() {
  const handleSave = () => {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    // Crear una copia con fondo blanco
    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    const tempCtx = tempCanvas.getContext("2d");

    // Fondo blanco
    tempCtx.fillStyle = "white";
    tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

    // Copia lo dibujado
    tempCtx.drawImage(canvas, 0, 0);

    const link = document.createElement("a");
    link.download = "mi-dibujo.png";
    link.href = tempCanvas.toDataURL("image/png");
    link.click();
  };

  return (
    <button style={{ fontFamily: "'Anton'" }}
      onClick={handleSave}
      className="bg-purple-600 text-white px-4 py-2 rounded-xl shadow hover:bg-purple-700 transition"
    >
      Guardar Dibujo
    </button>
  );
}
