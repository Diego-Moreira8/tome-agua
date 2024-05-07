import { useState } from "react";

export default function CupControls({ consumed, changeConsumed }) {
  const [cupSize, setCupSize] = useState(200);

  const addCup = () => changeConsumed(consumed + cupSize);

  const removeCup = () => {
    const result = consumed - cupSize;
    if (result >= 0) changeConsumed(result);
  };

  const handleCupSizeInput = (e) => setCupSize(parseInt(e.target.value));

  return (
    <div className="flex items-center gap-2">
      <div className="flex flex-col gap-1 w-32">
        <button
          className="px-4 py-2 border-black border-2 rounded-lg text-white bg-[#277204]"
          type="button"
          onClick={addCup}
        >
          Adicionar
        </button>
        <button
          className="px-4 py-2 border-black border-2 rounded-lg text-white bg-[#c13434]"
          type="button"
          onClick={removeCup}
        >
          Remover
        </button>
      </div>

      <div className="flex items-center gap-1">
        <input
          className="px-4 py-2 w-24 text-center bg-gray-200 border-black border-2 rounded-lg"
          type="number"
          value={cupSize}
          onChange={handleCupSizeInput}
          min={0}
          step={50}
        />
        <p>ml</p>
      </div>
    </div>
  );
}
