import { scrollToSection } from "@/util/scroll";
import { useEffect, useRef, useState } from "react";
import { IoApps } from "react-icons/io5";

const menus = [
  { id: "hero", name: "Home" },
  { id: "ecv", name: "Easiest CV" },
  { id: "timecodi", name: "TimeCodi" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <div
        ref={menuRef}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4
            rounded-full bg-white p-2 bg-opacity-30 shadow-md
            cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <IoApps />

        {isMenuOpen && (
          <div
            className="absolute top-16 left-1/2 transform -translate-x-1/2
          rounded-lg bg-white bg-opacity-20 shadow-md p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="flex flex-col gap-3 sm:flex-row sm:gap-8">
              {menus.map((menu) => (
                <li
                  key={menu.id}
                  className="opacity-70 hover:opacity-100 hover:underline"
                  style={{ whiteSpace: "nowrap" }}
                  onClick={() => scrollToSection(menu.id)}
                >
                  {menu.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
