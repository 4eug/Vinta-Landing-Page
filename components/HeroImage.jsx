

export default function HeroImage() {
  return (
    <section className="">
        <div className="relative w-full pt-20 pb-0 flex justify-center text-center flex-col items-center">
        <img
            className="absolute sm:block bottom-[-280px] left-[-190px] h-[300px] md:bottom-[-730px] md:left-[-520px] md:h-[900px]"
            src="/Ball.png"
          />
        <img
            className="absolute bottom-[-220px] left-[15%] w-[250px] md:bottom-[-660px] md:w-[900px] md:left-[20%]"
            src="/Bag.png"
          />
          <img
            className="absolute z-[20] bottom-[-200px] right-[-7px] w-[290px] md:bottom-[-540px] md:w-[900px] md:right-[-1px]"
            src="/TV.png"
          />
    </div>   
    </section>
  )
}
