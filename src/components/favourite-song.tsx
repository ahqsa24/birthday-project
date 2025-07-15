import { useEffect, useRef } from "react";

interface MusicScreenProps {
  onBackToNext: () => void;
}

export default function FavouriteSong({ onBackToNext }: MusicScreenProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current?.play();
  }, []);

  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">🎶 Fatin - Kaulah Kamuku</h2>
      <p className="text-gray-600 mb-6">Lagu spesial yang menurutku mewakili hubungan ini, entah kenapa kalo ngedenger lagu ini tu keinget kamu aja, karena ya mau ada cobaan seberat apapun kaulah kamuku dan bakal tetep seperti itu. ANJAY</p>
      
      <audio ref={audioRef} controls autoPlay loop className="mx-auto mb-6">
        <source src="/music/Fatin - Kaulah Kamuku.mp3" type="audio/mpeg" />
        Browser kamu tidak mendukung pemutar musik.
      </audio>

      <button
        onClick={onBackToNext}
        className="mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-800"
        >
        Halaman Berikutnya
      </button>
    </div>
  );
}
