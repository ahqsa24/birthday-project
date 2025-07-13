export default function DateInvitation() {
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Concert+date+with+You&details=Let%27s+spend+time+together+on+music+concert&location=Lapangan+Pancoran&dates=20250810T000000Z/20250810T170000Z&add=faraattira@gmail.com`;

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col justify-center items-center text-center p-8">
      <h1 className="text-3xl font-bold text-pink-800 mb-4">💖 Date Invitation</h1>
      <p className="text-lg text-gray-700 mb-6">Let’s go on a sweet little date together 🌸</p>
      <a
        href={googleCalendarUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition"
      >
        Tambahkan ke Google Calendar
      </a>
    </div>
  );
}