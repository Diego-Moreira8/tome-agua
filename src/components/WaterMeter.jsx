export default function WaterMeter({ getPercentageCompleted }) {
  return (
    <div
      className="fixed bottom-0 w-dvw bg-gradient-to-b from-[#4396f4] to-[#74a7e3] -z-20"
      style={{ height: `${getPercentageCompleted()}dvh` }}
    ></div>
  );
}
