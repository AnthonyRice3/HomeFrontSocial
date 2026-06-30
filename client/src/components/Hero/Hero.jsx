import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="text-white relative z-[1] pb-8 bg-cover bg-center"
      style={{ backgroundImage: "url(../../../public/heroimg.png)", height: "75vh" }}
    >
      <div className="paddings flexCenter justify-around items-end">
        {/* left side */}
        <div className="flexColStart gap-12">
          <div className="relative z-[99] pt-16">
            <div
              className="absolute h-16 w-16 rounded-full right-[28%] top-[25%] -z-[1]"
              style={{ background: "var(--orange-gradient)" }}
            />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "ease-in" }}
              className="font-semibold text-[3.8rem] leading-[4rem] z-[99] text-black"
            >
              Strength <br />
              You Can Trust,
              <br /> Beauty That Lasts.
            </motion.h1>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter" />
      </div>
    </section>
  );
};

export default Hero;
