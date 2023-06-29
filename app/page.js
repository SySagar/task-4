import Image from "next/image";

export default function Home() {
  return (
    <main className="main flex min-h-screen flex-col items-center justify-between relative">
      <div className="overlay-wrapper absolute bottom-0 left-0 right-0 z-10">
        <Image
          className="object-contain"
          width={0}
          height={0}
          alt="overlay"
          style={{ width: "100%", height: "auto" }}
          sizes="100vw"
          src={"/assets/svg/overlay.svg"}
        />

        <div className="lower-container absolute top-1/3 z-20 min-h-[50px] w-full flex flex-col justify-center items-center">
          <p className="text-6xl text-white font-semibold">How it works?</p>
          <img className="mt-8" src="/assets/png/working.png" alt="image" />
                  <div className="flex flex-row gap-44 ml-8">
          <p className="text-white font-light text-2xl w-44 text-center">Answer few questions</p>
          <p className="text-white font-light text-2xl w-52 text-center">Register using phone and OTP</p>
          <p className="text-white font-light text-2xl w-60 text-center">Get report and
personal roadmap</p>
        </div>
        <button className="start-btn rounded-full w-[264px] p-4 px-6 mt-20 text-white font-normal bg-[#FB7306] text-3xl">
          Get Started
        </button>
        </div>

        

      </div>

      <div className="upper-container relative flex flex-col w-full p-20 justify-center items-center">
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: 600,
            letterSpacing: "1px",
            wordSpacing: "2px",
            wordWrap: "break-word",
            color: "white",
          }}
        >
          Check your financial health
        </h1>
        <p className="secondary-text">
          Use WeathoMeter to get a free report card for your finances- within
          minutes!{" "}
        </p>

        <button className="start-btn rounded-full w-[264px] p-4 px-6 mt-9 text-white font-normal bg-[#FB7306] text-3xl">
          Get Started
        </button>
        <div className="object-contain absolute bottom-0 ml-28">
          <Image
            className="object-contain relative top-20"
            width={500}
            height={500}
            alt="center-image"
            src={"/assets/png/center-image.png"}
          />
        </div>
        <div className="hero-banner w-full flex flex-row gap-12 relative mt-12 py-24">
          <div className="left-container flex  flex-col gap-12">
            <div className="flex flex-row gap-2 items-center relative">
              <img width={40} src="/assets/png/checkbox.png" alt="checkbox" />
              <div className="flex flex-col w-full">
                <p className="font-medium text-3xl text-white">
                  Expected Retirement Age
                </p>
                <div className="w-full bg-white h-[2px] relative top-6 flex"></div>
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center relative">
              <img width={40} src="/assets/png/checkbox.png" alt="checkbox" />
              <div className="flex flex-col w-full">
                <p className="font-medium text-3xl text-white">
                  Identify Mistakes
                </p>
                <div className="w-full bg-white h-[2px] relative top-6 flex"></div>
              </div>
            </div>
          </div>

          <div className="center-image min-w-[350px]"></div>

          <div className="right-container  flex flex-col gap-12">
            <div className="flex flex-row gap-2 items-center relative">
              <img width={40} src="/assets/png/checkbox.png" alt="checkbox" />
              <div className="flex flex-col w-full">
                <p className="font-medium text-3xl text-white">
                  Personalised Road Map
                </p>
                <div className="w-full bg-white h-[2px] relative top-6 flex"></div>
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center relative">
              <img width={40} src="/assets/png/checkbox.png" alt="checkbox" />
              <div className="flex flex-col w-full">
                <p className="font-medium text-3xl text-white">
                  Tips To Improve
                </p>
                <div className="w-full bg-white h-[2px] relative top-6 flex"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
