export default function SleepControls({
  wakeUpHour,
  sleepHour,
  changeWakeUpHour,
  changeSleepHour,
}) {
  const handleWakeUpHourInput = (e) => {
    const hour = e.target.value;

    if (hour >= 0 || hour <= 23) {
      changeWakeUpHour(hour);
    }
  };

  const handleSleepHourInput = (e) => {
    const hour = e.target.value;

    if (hour >= 0 || hour <= 23) {
      changeSleepHour(hour);
    }
  };

  return (
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
  );
}
