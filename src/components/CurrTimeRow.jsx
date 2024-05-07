export default function CurrTimeRow({ wakeUpHour, sleepHour }) {
  const getPercentageElapsed = () => {
    const current = new Date();
    const totalMinutes = (sleepHour - wakeUpHour) * 60;
    const elapsedMinutes =
      (current.getHours() - wakeUpHour) * 60 + current.getMinutes();

    let percentageElapsed = (elapsedMinutes / totalMinutes) * 100;

    percentageElapsed = Math.floor(percentageElapsed);
    percentageElapsed = Math.min(percentageElapsed, 100);
    percentageElapsed = Math.max(percentageElapsed, 0);

    console.log(percentageElapsed);
    return percentageElapsed;
  };

  return (
    <div
      className="absolute -z-10 w-dvw h-1 bg-red-500"
      style={{ bottom: `${getPercentageElapsed()}%` }}
    ></div>
  );
}
