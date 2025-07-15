import { Trophy } from "lucide-react";
import type { ReactNode } from "react";

interface GameOverProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
  children?: ReactNode;
}

export default function GameOver({ score, totalQuestions, onRestart, children }: GameOverProps) {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="text-center p-8">
      <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Game Over</h2>
      <p className="text-gray-700 mb-1">Final Score: {score}/{totalQuestions}</p>
      <p className="text-gray-500 mb-6">({percentage}% correct)</p>
      <p className="text-gray-600 mb-2">
        Nah udah selesai kan buat jawab2in pertanyaannya? jangan lupa yaa buat SS hasilnya dan kirim ke nomor wa calon suamimu yaa, kalo nilainya di atas rata-rata nanti bisa nebus hadiah yang akan menyusul :V
      </p>

      <button
        onClick={onRestart}
        className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
      >
        Play Again
      </button>

      {/* ✅ Tambahkan ini untuk merender konten tambahan */}
      {children}
    </div>
  );
}
