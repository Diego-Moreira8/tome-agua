export default function App() {
  return (
    <div className="min-h-dvh flex gap-8 flex-col items-center justify-around py-8 font-bold">
      <div className="flex flex-col items-center gap-2">
        <p className="text-6xl font-black">1500ml</p>

        <div className="flex items-center gap-1">
          <label htmlFor="target">Meta:</label>
          <input
            className="px-4 py-2 w-24 text-center bg-gray-200 rounded-lg border-black border-2"
            type="number"
            id="target"
            value={3000}
            min={0}
            step={250}
          />
          <p>ml</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex flex-col gap-1 w-32">
          <button
            className="px-4 py-2 border-black border-2 rounded-lg bg-green-400"
            type="button"
          >
            Adicionar
          </button>
          <button
            className="px-4 py-2 border-black border-2 rounded-lg bg-red-400"
            type="button"
          >
            Remover
          </button>
        </div>

        <div className="flex flex-col gap-1 w-36">
          <button
            className="w-24 px-4 py-2 border-black border-2 rounded-lg"
            type="button"
          >
            +
          </button>

          <div className="flex items-center gap-1">
            <input
              className="px-4 py-2 w-24 text-center bg-gray-200 rounded-lg border-black border-2"
              type="number"
              value={2000}
              min={0}
              step={50}
            />
            <p>ml</p>
          </div>

          <button
            className="w-24 px-4 py-2 border-black border-2 rounded-lg"
            type="button"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}
