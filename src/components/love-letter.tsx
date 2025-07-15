interface LoveLetterProps {
  onNext: () => void;
}

export default function LoveLetter({ onNext }: LoveLetterProps) {
  return (
    <div className="p-8 text-justify">
      <h2 className="text-2xl font-bold text-pink-600 mb-4">💌 Love Letter</h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        My Dearest Love,
        <br />
        <br />
        Hari ini adalah hari yang paling aku syukuri, karena pada hari ini—beberapa tahun yang lalu—dunia mengenal sosok luar biasa yang kini menjadi bagian terindah dalam hidupku: kamu.
        <br />
        <br />
        Selamat ulang tahun, sayang. Terima kasih telah hadir, tumbuh, dan bertahan sampai sejauh ini. Terima kasih telah mengizinkanku mencintai kamu, dengan segala tawa dan tangismu. Kamu adalah keajaiban kecil yang membuat segalanya terasa lebih hangat, lebih berarti, dan lebih berwarna.
        <br />
        <br />
        Aku mencintaimu bukan hanya karena siapa kamu, tapi juga karena siapa aku saat bersamamu. Kamu membuatku ingin jadi lebih baik setiap harinya. Dan meskipun dunia kadang rumit, kamu adalah rumah yang selalu membuatku tenang.
        <br />
        <br />
        Hari ini, aku tidak hanya ingin merayakan ulang tahunmu, tapi juga merayakan betapa berharganya kamu dalam hidupku. Aku berdoa agar setiap langkahmu dipenuhi cahaya, setiap harapanmu dijawab semesta, dan setiap mimpimu perlahan menjadi nyata.
        <br />
        <br />
        Selamat ulang tahun, cintaku. Mari kita terus berjalan bersama, berbagi cerita, menua berdua. Karena selama masih ada kamu, aku percaya setiap hari akan selalu punya alasan untuk disyukuri.
        <br />
        <br />
        Dengan cinta yang tak pernah habis,
        <br />
        Ahmad Qaulan Sadida
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