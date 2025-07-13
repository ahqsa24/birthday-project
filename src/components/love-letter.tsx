interface LoveLetterProps {
  onNext: () => void;
}

export default function LoveLetter({ onNext }: LoveLetterProps) {
  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold text-pink-600 mb-4">💌 Love Letter</h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        ullamcorper turpis nec orci euismod, nec scelerisque lorem rhoncus.
        Donec porta justo vel sem efficitur, a ullamcorper magna gravida. Nulla
        facilisi. Vivamus blandit, mauris nec suscipit eleifend, ligula eros
        posuere elit, sed congue nibh nisl ac nisi. 
        <br /><br />
        Sed tincidunt dapibus erat, nec faucibus odio porta nec. Curabitur sit
        amet ex lorem. Pellentesque fermentum lorem in nisi iaculis, ut
        facilisis augue imperdiet. Terima kasih sudah menyelesaikan permainan ini 💖
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