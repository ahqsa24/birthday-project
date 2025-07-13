interface FlowerIntroProps {
  onGoToFlower: () => void;
}

export default function FlowerIntro({ onGoToFlower }: FlowerIntroProps) {
  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold text-pink-500 mb-4">🌸 Bunga Koding</h2>
      <p className="text-gray-700 mb-6">
        Ini adalah bunga digital yang dirangkai dari kode dan kasih sayang.  
        Setiap kelopak melambangkan perhatian, perjuangan, dan cinta.  
        Klik tombol di bawah untuk melihat bunga spesial ini tumbuh.
      </p>
      <button
        onClick={onGoToFlower}
        className="mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-800"
      >
        Tampilkan Bunga
      </button>
    </div>
  );
}
