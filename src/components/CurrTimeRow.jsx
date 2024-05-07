export default function CurrTimeRow({
  wakeUpHour,
  sleepHour,
  getPercentageCompleted,
}) {
  const getPercentageElapsed = () => {
    const current = new Date();
    const totalMinutes = (sleepHour - wakeUpHour) * 60;
    const elapsedMinutes =
      (current.getHours() - wakeUpHour) * 60 + current.getMinutes();

    let percentageElapsed = (elapsedMinutes / totalMinutes) * 100;

    percentageElapsed = Math.floor(percentageElapsed);
    percentageElapsed = Math.min(percentageElapsed, 100);
    percentageElapsed = Math.max(percentageElapsed, 0);

    return percentageElapsed;
  };

  return (
    <div
      className="absolute -z-10 w-dvw"
      style={{ bottom: `${getPercentageElapsed()}%` }}
    >
      {getPercentageCompleted() > getPercentageElapsed() ? (
        <div className="bg-green-200 h-1">
          <p className="pt-1 pl-2 text-xs">Continue assim!</p>
        </div>
      ) : (
        <div className="bg-red-500 h-1">
          <p className="pt-1 pl-2 text-xs">Beba água!</p>
        </div>
      )}
    </div>
  );
}
