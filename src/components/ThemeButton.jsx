import { BiMoon, BiSun } from "react-icons/bi";

const ThemeButton = ({ darkMode, toggleDarkMode }) => {
  return (
    <button className="absolute right-10 top-10" onClick={toggleDarkMode}>
      {darkMode ? (
        <BiSun className="text-2xl" />
      ) : (
        <BiMoon className="text-2xl" />
      )}
    </button>
  );
};

export default ThemeButton;
