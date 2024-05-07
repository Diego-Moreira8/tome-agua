import { useState } from "react";
import Status from "./components/Status";
import CupControls from "./components/CupControls";
import SleepControls from "./components/SleepControls";
import HourIndicators from "./components/HourIndicators";
import WaterMeter from "./components/WaterMeter";

export default function App() {
  const [consumed, setConsumed] = useState(0);
  const [target, setTarget] = useState(2000);
  const [wakeUpHour, setWakeUpHour] = useState(8);
  const [sleepHour, setSleepHour] = useState(22);

  const changeTarget = (newTarget) => setTarget(newTarget);
  const changeConsumed = (newValue) => setConsumed(newValue);
  const changeWakeUpHour = (newHour) => setWakeUpHour(newHour);
  const changeSleepHour = (newHour) => setSleepHour(newHour);

  return (
    <div className="relative min-h-dvh flex gap-8 flex-col items-center justify-around py-8 font-bold">
      <Status consumed={consumed} target={target} changeTarget={changeTarget} />

      <CupControls consumed={consumed} changeConsumed={changeConsumed} />

      <SleepControls
        wakeUpHour={wakeUpHour}
        sleepHour={sleepHour}
        changeWakeUpHour={changeWakeUpHour}
        changeSleepHour={changeSleepHour}
      />

      <HourIndicators wakeUpHour={wakeUpHour} sleepHour={sleepHour} />

      <WaterMeter consumed={consumed} target={target} />
    </div>
  );
}
