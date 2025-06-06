import { ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import myImage from "@/assets/sayan.jpg"; // adjust filename accordingly

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 bg-background"
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left: Text content */}
        <div className="text-center md:text-left flex-1 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            <span className="block">Hi, I'm</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-fuchsia-500">
              Sayan Sengupta
            </span>
          </h1>

          <TypeAnimation
            sequence={[
              "Front-End Developer",
              2000,
              "React & Angular Enthusiast",
              2000,
              "UI/UX Designer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-lg md:text-xl text-muted-foreground block"
          />

          <p className="text-gray-500 max-w-xl">
            I build fast, responsive, and accessible websites that make users smile.
          </p>

          <div className="pt-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex justify-center md:justify-end">
        <img
          src={myImage}
          alt="Sayan Sengupta"
          className="rounded-full w-80 h-80 object-cover shadow-lg"
        />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-1">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
