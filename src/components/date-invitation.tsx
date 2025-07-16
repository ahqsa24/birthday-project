export default function DateInvitation() {
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Concert+date+with+You&details=Let%27s+spend+time+together+on+music+concert&location=Lapangan+Pancoran&dates=20250810T000000Z/20250810T170000Z&add=faraattira@gmail.com`;

  return (
    <div className="min-h-screen bg-pink-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8 text-center">
        <h1 className="text-3xl font-bold text-pink-800 mb-4">💖 Date Invitation</h1>
        <p className="text-lg text-gray-700 mb-6">
          Maaf yaa karena baru sempet nepatin janji buat bunga tersebut sekarang🥺,
          semoga ga error dan kamu suka sama hasilnya.
          Ini juga jadi akhir buat website singkat ini sebagai hadiah ulang tahun online kamu,
          dannn jangan lupa kalau kita masih punya jadwal date di tanggal 10 Agustus 2025 nanti,
          concert date lhoo jangan lupa, sung aja tambahin ke kalender,
          jangan buat aku yang jadi sumala yhaa!
        </p>
        <a
          href={googleCalendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition"
        >
          Tambahkan ke Google Calendar
        </a>
      </div>
    </div>
  );
}