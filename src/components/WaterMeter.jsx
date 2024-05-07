export default function WaterMeter({ consumed, target }) {
  const getPercentageCompleted = () => {
    const result = (consumed / target) * 100;

    if (result > 100) {
      return 100;
    } else if (result >= 0 && result <= 100) {
      return result;
    }
  };

  return (
    <div
      className="fixed bottom-0 w-dvw bg-gradient-to-b from-[#4396f4] to-[#74a7e3] -z-10"
      style={{ height: `${getPercentageCompleted()}dvh` }}
    ></div>
  );
}
