import {
  BiCurrentLocation,
  BiEnvelope,
  BiLogoCss3,
  BiLogoFirebase,
  BiLogoGithub,
  BiLogoGoLang,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoLinkedin,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTwitter,
  BiPhone,
  BiRocket,
} from "react-icons/bi";
import profile from "/profile.jpeg";
import ThemeButton from "./ThemeButton";

const HeaderLeft = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="min-h-screen flex-1 relative p-10 transition-all duration-500 dark:bg-black dark:text-white sm:border-r dark:border-gray-700">
      <section className="flex flex-col gap-5">
        {/* profile */}
        <div className="flex flex-col items-center justify-center gap-5">
          <img src={profile} alt="profile" className="w-32 rounded-full" />

          <div className="text-center space-y-1">
            <h1 className="text-4xl font-light">
              Shubham <span className="font-semibold">Giri</span>
            </h1>
            <h3 className="text-xl font-light">Web Developer</h3>
          </div>

          <ThemeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>

        {/* contact info */}
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <BiCurrentLocation className="text-xl" />
              <span>New Delhi, India</span>
            </li>
            <li className="flex items-center gap-2">
              <BiEnvelope className="text-xl" />
              <span>shubhammgiri3@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <BiPhone className="text-xl" />
              <span>+91 9718649290</span>
            </li>
          </ul>

          <ul className="flex justify-center items-center gap-4">
            <li>
              <a href="https://github.com/xshubhamg">
                <BiLogoGithub className="text-2xl" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/codin_nerd">
                <BiLogoTwitter className="text-2xl" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/shubham-giri-6b5b5b1b1">
                <BiLogoLinkedin className="text-2xl" />
              </a>
            </li>
          </ul>
        </div>

        {/* education */}
        <div className="flex flex-col items-start justify-start gap-5 p-5 border-b dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">EDUCATION</h1>
          <ul className="border-b dark:border-gray-700">
            <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
              <span className="font-semibold md:text-lg">12th Standard</span>
              <span className="font-light">
                Indian National Inter college, Ghaziabad
              </span>
              <span className="text-sm text-gray-400">2020</span>
            </li>
            <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
              <span className="font-semibold md:text-lg">
                Bachelor's of Science
              </span>
              <span className="font-light">University of Delhi, New Delhi</span>
              <span className="text-sm text-gray-400">2020-2023</span>
            </li>
            <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
              <span className="font-semibold md:text-lg">
                Master's in Computer Applications
              </span>
              <span className="font-light">INGOU, New Delhi</span>
              <span className="text-sm text-gray-400">2024-ongoing</span>
            </li>
          </ul>
        </div>

        {/* Languages */}
        <div className="flex flex-col items-start justify-start gap-5 p-5 border-b dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">LANGUAGES</h1>
          <ul className="flex list-disc gap-12 md:text-lg">
            <li>English</li>
            <li>Hindi</li>
          </ul>
        </div>
      </section>
    </header>
  );
};

export default HeaderLeft;
