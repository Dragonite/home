import ChevronRightIcon from "@/components/HomePage/ChevronRight";

export default function Home() {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <div className="text-center w-full text-primary leading-tighter max-w-2xl text-6xl font-semibold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:text-5xl xl:tracking-tighter">
        Haolin Wu
      </div>
      <div className="mt-8">
        <div className="m-0 inline-flex mx-auto font-mono tracking-wider text-lg sm:text-2xl">
          <ChevronRightIcon className="mr-1 md:mr-2" />
          <span className="animate-typewriter overflow-hidden whitespace-nowrap">
            Software &amp; Data Engineer</span>
          <div className="ml-2 animate-blink">_</div>
        </div>
      </div>
    </div>
  );
}
