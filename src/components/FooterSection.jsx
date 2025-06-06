import { ArrowUp } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="bg-gradient-to-r from-[#1f1f1f] to-[#2a2a2a] text-white py-10 px-6 border-t border-gray-700 mt-12">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-gray-400 text-center md:text-left">
          &copy; {new Date().getFullYear()} <span className="text-primary font-semibold">Sayan Sengupta</span>. All rights reserved.
        </p>

        <a
          href="#hero"
          className="p-3 rounded-full bg-primary/20 hover:bg-primary hover:text-white transition-all duration-300 shadow-md"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
