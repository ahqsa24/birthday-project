interface LoveLetterProps {
  onNext: () => void;
}

export default function LoveLetter({ onNext }: LoveLetterProps) {
  return (
    <div className="p-8 text-justify">
      <h2 className="text-2xl font-bold text-pink-600 mb-4">💌 Love Letter</h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Happy birthday my beloved Fara Attira Sutrisno! 
        <br />
        <br />
        Perasaan ini muncul dari awal kita bertemu, dari mata turun ke hati. Sekarang? jangan ditanya, agaknya makin2 aku cinta ke kamu, gatau pelet apa yang kamu kasih sampe bisa secinta ini sama kamu. 
        <br />
        <br />
        Umurnya udah 21 ya sekarang? ciee udah seumuran kita. Semoga di momen bertambahnya usia kamu, bisa menjadi titik balik buat jadi pribadi yang lebih baik, semoga bisa panjang umur, jaga kesehatan terus INGETT JANGAN LUPA MAKAN, rajin terus ibadahnya, berbakti sama orang, serta bisa meng usahakan semua cita-cita yang kamu harapkan. Jangan takut gagal yaa, karena ingett di belakang kamu masih ada aku🤗. 
        <br />
        <br />
        Pokonya aku bakal selalu ada disini kapanpun kamu butuh, kamu butuh temen cerita, ngerumpi, partner dalam segala hal, intinya semua2nya aku pasti siap sedia buat kamu, anytime asal bisa dibangunin aja kalo ketiduran😫. 
        <br />
        <br />
        Maaf yaa di saat2 ultahmu ini gabisa nemenin kamu di sana, tapii bentar lagi kita ketemu lhoo! harusnya ga sampe 1 bulan kita skip ketemu, maaf juga baru bisa baliknya di tanggal 20 nanti, smoga kamu okee ya dengan hal itu dan keputusanku ijin dengan alesan yang sebenernya jugaa bisa kamu terima. 
        <br />
        <br />
        Eitss belum abiss, mau nyampein wish juga buat hubungan kita, semoga kita bisa langgeng terus, kamu juga bisa bahagia terus sama aku, kuat-kuat yaa di masa LDR inii bentar lagi kelar kok, semoga kita juga bisa menjadi pasangan yang saling menguatkan satu sama lain, bisa menjadi support system di segala kondisi, bisa terus sama2 besar cintanya, sampe orang2 bingung siapa yang kecintaan banget wkwk, oiyaa kalo ada unek2 apapun pastiin jangan dipendem yaa, ayoo keluarkan dan selesaikan bersama2, dan yang pasti bisa terus berproses buat jadi yang lebih baik. POKONYA LOVEE UUU, FOVERER. TERUS SAMA AKU YAA! 
        <br />
        <br />
        Calon Suamimu, Adid.
      </p>

      <button
        onClick={onNext}
        className="mt-6 bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-800"
      >
        Halaman Berikutnya
      </button>
    </div>
  );
}