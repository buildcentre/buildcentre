import { useEffect, useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { Link } from "react-router";
import BCLOGO from "~/media/images/BUILD CENTRE LOGO.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerClasses = [
    "h-20 px-10 w-screen fixed flex items-center justify-between top-0 left-0 z-10 transition-all group/header",
    isScrolled ? "bg-white text-black shadow-sm" : "bg-transparent text-white",
  ].join(" ");

  const linkTextClass = isScrolled ? "text-black" : "text-white";

  return (
    <header className={`${headerClasses} hover:bg-white`}>
      <Link to="">
        <img src={BCLOGO} alt="Build Centre logo" className="w-40" />
      </Link>
      <nav className="h-20 flex items-center gap-x-5 justify-center">
        <div className="flex flex-col group">
          <Link
            to="/"
            className={`${linkTextClass} group-hover/header:text-black flex items-center mt-8 pb-5 hover:text-blue-400`}
          >
            <span>What We Are</span>
            <RxCaretDown
              size={20}
              className="group-hover:rotate-180 transition-all"
            />
          </Link>
          <div className="absolute h-100 w-screen top-full left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto bg-white text-black shadow-lg">
            <div className=" absolute p-4 grid grid-cols-2 h-full">
              <div
                className="flex items-center justify-center h-full w-full px-10
              "
              >
                <p className="">
                  We are the leading provider of building materials. Unrivaled
                  in size, scale and capability, we are a critical partner for
                  some of the world’s most iconic structures. From neighborhood
                  streets to highways, above ground and below, our essential
                  materials form the very foundations of the communities where
                  we live and work.
                </p>
              </div>
              <div className="border-l-2 my-10 border-gray-300 px-10 items-center flex">
                <div className="grid grid-cols-2 gap-2">
                  <Link to="" className="p-2 hover:text-blue-400 transition">
                    Overview
                  </Link>
                  <Link to="" className="p-2 hover:text-blue-400 transition">
                    Leadership
                  </Link>
                  <Link to="" className="p-2 hover:text-blue-400 transition">
                    Our Presence
                  </Link>
                  <Link to="" className="p-2 hover:text-blue-400 transition">
                    Why Choose Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col group">
          <Link
            to="/"
            className={`${linkTextClass} group-hover/header:text-black flex items-center mt-8 pb-5 hover:text-blue-400`}
          >
            <span>What We Do</span>
            <RxCaretDown
              className="group-hover:rotate-180 transition-all"
              size={20}
            />
          </Link>
          <div className="absolute h-100 w-screen top-full left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto bg-white text-black shadow-lg">
            <div className=" absolute p-4 grid grid-cols-2 h-full">
              <div
                className="flex items-center justify-center h-full w-full px-10
              "
              >
                <p className="">
                  We are the leading provider of building materials. Unrivaled
                  in size, scale and capability, we are a critical partner for
                  some of the world’s most iconic structures. From neighborhood
                  streets to highways, above ground and below, our essential
                  materials form the very foundations of the communities where
                  we live and work.
                </p>
              </div>
              <div className="border-l-2 my-10 border-gray-300 px-10 items-center flex">
                <div className="grid grid-cols-2 gap-2">
                  <Link to="" className="p-2 hover:text-blue-400 transition">
                    Overview
                  </Link>
                  <Link to="" className="p-2 hover:text-blue-400 transition">
                    Our History
                  </Link>
                  <Link to="" className="p-2 hover:text-blue-400 transition">
                    Our Purpose
                  </Link>
                  <Link to="" className="p-2 hover:text-blue-400 transition">
                    Innovation at Build Centre
                  </Link>
                  <Link to="" className="p-2 hover:text-blue-400 transition">
                    Our Leadership
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col group">
          <Link
            to="/our-brands"
            className={`${linkTextClass} group-hover/header:text-black flex items-center mt-8 pb-5 hover:text-blue-400`}
          >
            <span>Our Brands</span>
          </Link>
        </div>
        <div className="flex flex-col group">
          <Link
            to="/"
            className={`${linkTextClass} group-hover/header:text-black flex items-center mt-8 pb-5 hover:text-blue-400`}
          >
            <span>Our Presence Across East Africa</span>
            <RxCaretDown
              className="group-hover:rotate-180 transition-all"
              size={20}
            />
          </Link>
          <div className="absolute h-100 w-screen top-full left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto bg-white text-black shadow-lg">
            <div className=" absolute p-4 grid grid-cols-2 h-full">
              <div
                className="flex items-center justify-center h-full w-full px-10
              "
              >
                <p className="">
                  We are the leading provider of building materials. Unrivaled
                  in size, scale and capability, we are a critical partner for
                  some of the world’s most iconic structures. From neighborhood
                  streets to highways, above ground and below, our essential
                  materials form the very foundations of the communities where
                  we live and work.
                </p>
              </div>
              <div className="border-l-2 my-10 border-gray-300 px-10 items-center flex">
                <div className="grid grid-cols-2 gap-2">
                  <Link to="" className="p-2 hover:text-blue-400 transition">
                    Overview
                  </Link>
                  <Link to="" className="p-2 hover:text-blue-400 transition">
                    Our History
                  </Link>
                  <Link to="" className="p-2 hover:text-blue-400 transition">
                    Our Purpose
                  </Link>
                  <Link to="" className="p-2 hover:text-blue-400 transition">
                    Innovation at Build Centre
                  </Link>
                  <Link to="" className="p-2 hover:text-blue-400 transition">
                    Our Leadership
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col group">
          <Link
            to="/blog"
            className={`${linkTextClass} group-hover/header:text-black flex items-center mt-8 pb-5 hover:text-blue-400`}
          >
            <span>Blog</span>
          </Link>
        </div>
        <div className="flex flex-col group">
          <Link
            to="/"
            className={`${linkTextClass} group-hover/header:text-black flex items-center mt-8 pb-5 hover:text-blue-400`}
          >
            <span>Contact</span>
            <RxCaretDown
              className="group-hover:rotate-180 transition-all"
              size={20}
            />
          </Link>
          <div className="absolute h-100 w-screen top-full left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto bg-white text-black shadow-lg">
            <div className=" absolute p-4 grid grid-cols-2 h-full">
              <div
                className="flex items-center justify-center h-full w-full px-10
              "
              >
                <p className="">
                  Connect with our team for quotations, product specifications,
                  and project support.
                </p>
              </div>
              <div className="border-l-2 my-10 border-gray-300 px-10 items-center flex">
                <div className="grid grid-cols-2 gap-2">
                  <Link to="" className="p-2 hover:text-blue-400 transition">
                    Request a Quote
                  </Link>
                  <Link to="" className="p-2 hover:text-blue-400 transition">
                    Submit BOQ
                  </Link>
                  <Link to="" className="p-2 hover:text-blue-400 transition">
                    Contact Offices
                  </Link>
                  <Link to="" className="p-2 hover:text-blue-400 transition">
                    WhatsApp Enquiry
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
