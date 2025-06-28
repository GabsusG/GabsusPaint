import { useState } from "react";

export default function ColorPicker({ color, onChange }) {
  const [recentColors, setRecentColors] = useState([]);
  const [tempColor, setTempColor] = useState(color);

  // Aplica el color en vivo al mover el selector
  const handleInput = (e) => {
    const liveColor = e.target.value;
    setTempColor(liveColor); // color temporal
    onChange(liveColor);     // pinta en tiempo real
  };

  // Guarda el color solo al cerrar el selector
  const handleBlur = () => {
    setRecentColors((prev) => {
      const nuevos = [tempColor, ...prev.filter((c) => c !== tempColor)];
      return nuevos.slice(0, 3);
    });
  };

  const selectRecentColor = (c) => {
    onChange(c);
    setTempColor(c);
    setRecentColors((prev) => {
      const nuevos = [c, ...prev.filter((x) => x !== c)];
      return nuevos.slice(0, 3);
    });
  };

  return (
    <div className="flex items-center gap-4">
      {/* Selector principal */}
      <div className="flex flex-col items-center gap-2">
        <label className="text-sm text-purple-800 font-medium">Color</label>
        <input
          type="color"
          value={tempColor}
          onInput={handleInput}
          onBlur={handleBlur}
          className="w-10 h-10 "
        />
      </div>

      {/* Colores recientes */}
      {recentColors.length > 0 && (
        <div className="flex gap-2 pl-4 border-l-4 border-purple-400 h-full items-center">
          {recentColors.map((c) => (
            <button
              key={c}
              onClick={() => selectRecentColor(c)}
              style={{ backgroundColor: c }}
              className={`w-8 h-8 rounded-full border-2 transition ${
                c === tempColor
                  ? "border-white ring-2 ring-purple-600"
                  : "border-purple-300"
              }`}
              title={c}
            />
          ))}
        </div>
      )}
    </div>
  );
}
