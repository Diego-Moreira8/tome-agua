export default function Status({ consumed, target, changeTarget }) {
  const handleTargetInput = (e) => changeTarget(parseInt(e.target.value));

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-6xl font-black">{consumed}ml</p>

      <div className="flex items-center gap-1">
        <label htmlFor="target">Meta:</label>
        <input
          className="px-4 py-2 w-24 text-center bg-gray-200 rounded-lg border-black border-2"
          type="number"
          id="target"
          value={target}
          onChange={handleTargetInput}
          min={0}
          step={250}
        />
        <p>ml</p>
      </div>
    </div>
  );
}
