export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Teman Curhat AI</h1>
      <form className="w-full max-w-md bg-white p-6 rounded-xl shadow">
        <textarea placeholder="Tulis curhatmu di sini..." className="w-full p-3 border rounded mb-4 h-40"></textarea>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Kirim</button>
      </form>
    </div>
  );
}
