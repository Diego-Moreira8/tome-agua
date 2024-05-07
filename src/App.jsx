import { useState } from "react";

export default function App() {
  const [consumed, setConsumed] = useState(0);
  const [target, setTarget] = useState(2000);
  const [cupSize, setCupSize] = useState(200);
  const [wakeUpHour, setWakeUpHour] = useState(8);
  const [sleepHour, setSleepHour] = useState(22);

  const percentageCompleted = () => {
    const result = (consumed / target) * 100;

    if (result > 100) {
      return 100;
    } else if (result >= 0 && result <= 100) {
      return result;
    }
  };

  const handleTargetInput = (e) => {
    setTarget(parseInt(e.target.value));
  };

  const handleCupSizeInput = (e) => {
    setCupSize(parseInt(e.target.value));
  };

  const addCup = () => setConsumed((prev) => prev + cupSize);

  const removeCup = () => {
    const result = consumed - cupSize;
    if (result >= 0) setConsumed(result);
  };

  const handleWakeUpHourInput = (e) => {
    const hour = e.target.value;

    if (hour >= 0 || hour <= 23) {
      setWakeUpHour(hour);
    }
  };

  const handleSleepHourInput = (e) => {
    const hour = e.target.value;

    if (hour >= 0 || hour <= 23) {
      setSleepHour(hour);
    }
  };

  return (
    <div className="min-h-dvh flex gap-8 flex-col items-center justify-around py-8 font-bold">
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

      <div className="flex flex-col gap-2 items-end">
        <div className="flex items-center gap-1">
          <label htmlFor="wake-up-hour">Acordei às:</label>
          <input
            className="px-4 py-2 w-16 text-center bg-gray-200 rounded-lg border-black border-2"
            type="number"
            id="wake-up-hour"
            value={wakeUpHour}
            onChange={handleWakeUpHourInput}
            min={0}
            max={23}
          />
          <p>h</p>
        </div>
        <div className="flex items-center gap-1">
          <label htmlFor="sleep-hour">Vou dormir por volta de:</label>
          <input
            className="px-4 py-2 w-16 text-center bg-gray-200 rounded-lg border-black border-2"
            type="number"
            id="sleep-hour"
            value={sleepHour}
            onChange={handleSleepHourInput}
            min={0}
            max={23}
          />
          <p>h</p>
        </div>
      </div>

      <div></div>

      <div className="fixed right-4 h-dvh flex flex-col justify-between">
        <p className="text-right">{sleepHour}h</p>
        <p className="text-right">{wakeUpHour}h</p>
      </div>

      <div
        className="fixed bottom-0 w-dvw bg-gradient-to-b from-[#4396f4] to-[#74a7e3] -z-10"
        style={{ height: `${percentageCompleted()}dvh` }}
      ></div>
    </div>
  );
}
