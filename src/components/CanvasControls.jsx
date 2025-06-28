
export default function CanvasControls({
  onUndo,
  onRedo,
  onToggleEraser,
  isEraser,
  onClear,
}) {
  return (
    <div className="absolute top-2 right-2 flex gap-2 z-20">
      <button
        onClick={onUndo}
        className="w-10 h-10 rounded-full bg-white border border-purple-300 shadow hover:bg-purple-100"
        title="Deshacer"
      >
        ⬅️
      </button>
      <button
        onClick={onRedo}
        className="w-10 h-10 rounded-full bg-white border border-purple-300 shadow hover:bg-purple-100"
        title="Rehacer"
      >
        ➡️
      </button>
      <button
        onClick={onToggleEraser}
        className={`w-10 h-10 rounded-full shadow border transition ${
          isEraser
            ? "bg-red-500 text-white border-red-700"
            : "bg-white border-purple-300 hover:bg-purple-100"
        }`}
        title="Borrador"
      >
        🧽
      </button>
      <button
        onClick={onClear}
        className="w-10 h-10 rounded-full bg-white border border-red-400 shadow hover:bg-red-100 transition"
        title="Limpiar Canvas"
      >
        🗑️
      </button>
    </div>
  );
}
