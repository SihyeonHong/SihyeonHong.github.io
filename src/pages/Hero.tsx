export default function Hero() {
  return (
    <div
      id="hero"
      className="h-screen snap-start flex flex-col items-center justify-center
  bg-purple-100"
    >
      {/* title */}
      <div className="inline-flex text-3xl font-bold mb-5 gap-2">
        <h1 className="">"쉬운 개발자" </h1>
        <h1 className=""> 홍시현입니다.</h1>
      </div>

      {/* descriptions */}
      <p
        className=" text-gray-700 mb-10
      max-w-[360px] sm:max-w-[70vw] lg:max-w-[48rem] w-full"
      >
        동료에게는 함께 일하기 좋은 개발자, 사용자에게는 가장 쉬운 경험을
        제공하는 개발자가 되고 싶습니다. 협업 과정에서 문제를 즉시 공유하고 해결
        방법을 함께 찾아가는 태도, 그리고 직관적이고 단순한 UX를 지향하는 기술을
        통해 이러한 목표를 실현해 나가고 있습니다.
      </p>

      <div className="flex">
        <a
          href="https://github.com/SihyeonHong"
          className="inline-flex h-10 p-1 bg-black rounded-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./github-mark/github-mark-white.png" alt="github mark" />
          <img src="./GitHub-Logos/GitHub_Logo_White.png" alt="github logo" />
        </a>
      </div>
    </div>
  );
}
