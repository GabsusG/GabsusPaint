const tamaños = [2, 4, 8, 16];

export default function BrushSizeSelector({ brushSize, onChange }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <label className="text-sm text-purple-800 font-medium">Tamaño pincel</label>
      <div className="flex gap-2">
        {tamaños.map((size) => (
          <button
            key={size}
            onClick={() => onChange(size)}
            className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition
              ${brushSize === size
                ? "bg-purple-600 text-white border-purple-800"
                : "bg-white text-purple-600 border-purple-400 hover:bg-purple-100"}`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}