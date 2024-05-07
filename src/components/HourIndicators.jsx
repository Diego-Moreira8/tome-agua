export default function HourIndicators({ sleepHour, wakeUpHour }) {
  return (
    <div className="absolute right-4 h-[100%] flex flex-col justify-between">
      <p className="text-right">{sleepHour}h</p>
      <p className="text-right">{wakeUpHour}h</p>
    </div>
  );
}
