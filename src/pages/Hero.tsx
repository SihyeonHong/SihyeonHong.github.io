export default function Hero() {
  return (
    <div
      id="hero"
      className="h-screen snap-start flex flex-col items-center justify-center
  bg-purple-100"
    >
      <h1 className="text-3xl font-bold">Hello</h1>
      <p className="text-gray-700">Welcome description</p>

      <div className="flex">
        <a
          href="https://github.com/SihyeonHong"
          className="inline-flex h-10 p-1 bg-black rounded-lg"
        >
          <img src="./github-mark/github-mark-white.png" alt="github mark" />
          <img src="./GitHub-Logos/GitHub_Logo_White.png" alt="github logo" />
        </a>
      </div>
    </div>
  );
}
