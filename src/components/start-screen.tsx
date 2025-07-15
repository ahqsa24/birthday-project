import { Play } from "lucide-react";

interface StartScreenProps {
  onStart: () => void;
}
export default function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Birthday Game
      </h1>
      <p className="text-gray-600 mb-8">Penasaran kan projek yang aku buat apa kemarin? nah ini dia waktu yang pas buat spill projek tersebut. Sejujurnya bingung mau dibuat gimana, tapi semoga kamu suka ya sama konsepnya. Love U, happy birthday yaa cantik!</p>
      <button
        onClick={onStart}
        className="inline-flex items-center px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-900 transition-colors"
      >
        <Play className="w-5 h-5 mr-2" />
        Mulai Quiz
      </button>
    </div>
  );
}