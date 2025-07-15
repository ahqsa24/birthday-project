interface FlowerIntroProps {
  onGoToFlower: () => void;
}

export default function FlowerIntro({ onGoToFlower }: FlowerIntroProps) {
  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold text-pink-500 mb-4">🌸 A Little Gift For You!</h2>
      <p className="text-gray-700 mb-6">
        Hal ini udah aku janjiin dari awal kita berhubungan, but this one is special for you, aku rasa momennya juga tepat sekarang buat ngasiin ini, jadi coba klik tombol di bawah yaa!
      </p>
      <button
        onClick={onGoToFlower}
        className="mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-800"
      >
        Tampilkan Hadiah
      </button>
    </div>
  );
}
