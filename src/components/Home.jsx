import {
  BiLogoCss3,
  BiLogoFirebase,
  BiLogoGoLang,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiRocket,
} from "react-icons/bi";

const Home = () => {
  return (
    <main className="min-h-screen flex-[3] transition-all duration-500 dark:bg-black dark:text-white">
      <section className="flex max-w-[1000px] flex-col gap-10 p-5 md:mx10 md:py-14">
        {/* About */}
        <div className="space-y-5">
          <h1 className="text-2xl font-bold md:text-4xl">About me</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
            Hello! I'm Shubham Giri, a passionate Web/Software developer with a
            deep interest in building efficient, scalable solutions. With
            expertise in various programming languages and tools, I specialize
            in writing clean, maintainable code, and continuously strive to
            learn new technologies. My GitHub
            <a
              className="text-blue-400 hover:underline"
              href="https://github.com/xshubhamg"
            >
              @xshubhamg
            </a>{" "}
            showcases my open-source contributions and projects. I enjoy solving
            complex problems, whether it's through development or optimizing
            workflows. In my free time, I love to explore and learn new things
            about my environment and the tools i use.
          </p>
        </div>

        {/* Experience */}
        <div className="space-y-10">
          <h1 className="text-2xl font-bold md:text-4xl">Projects</h1>
          <div className="flex flex-col lg:flex-row lg:gap-20">
            <ul className="border-b dark:border-gray-700">
              <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
                <span className="text-lg font-semibold">Instagram clone</span>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  The Instagram Clone project is a feature-rich web application
                  built using React, Tailwind CSS, and Appwrite to emulate the
                  core functionalities of Instagram. Leveraging React, the
                  application delivers a seamless and dynamic user experience
                  with efficient component-based architecture. Tailwind CSS is
                  used to craft a visually appealing and responsive interface,
                  ensuring the design adapts beautifully to different screen
                  sizes. On the backend, Appwrite provides robust user
                  authentication, database management, and file storage
                  capabilities, enabling functionalities like user sign-ups,
                  secure logins, real-time data updates, and photo uploads. This
                  project serves as an excellent showcase of integrating modern
                  frontend technologies with a powerful backend-as-a-service,
                  providing an engaging platform for users to share photos,
                  follow others, and interact, much like Instagram. It’s a
                  comprehensive example of building scalable and interactive web
                  applications.
                </p>
              </li>
              <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
                <span className="font-semibold md:text-lg">
                  Todo App using Vanilla JS
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  The To-Do App is a simple and interactive web application
                  created using HTML, CSS, and JavaScript. The app enables users
                  to efficiently manage their tasks by adding, editing, marking
                  as complete, and deleting them. The user interface is
                  structured with HTML, styled with CSS for a clean and modern
                  look, and enhanced with JavaScript for dynamic functionality.
                </p>
              </li>

              <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
                <a href="https://nerd-cv.netlify.app/">
                  <span className="font-semibold md:text-lg">
                    CV website using react
                  </span>
                </a>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  The CV Website project is a sleek and responsive web
                  application built using React to showcase an individual’s
                  professional profile. It is designed to serve as an online
                  portfolio, highlighting key information like skills, work
                  experience, education, and projects. By leveraging React’s
                  component-based architecture, the application ensures
                  reusability and scalability, making it easy to customize and
                  update.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* skills */}
        <div className="flex flex-col items-start justify-start gap-5 p-5 border-b dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">SKILLS</h1>
          <div className="flex flex-wrap gap-3">
            <span className="rounded-xl flex items-center justify-center gap-2 bg-black text-white p-3 dark:bg-white dark:text-black">
              <BiLogoHtml5 />
              HTML
            </span>
            <span className="rounded-xl flex items-center justify-center gap-2 bg-black text-white p-3 dark:bg-white dark:text-black">
              <BiLogoCss3 />
              CSS
            </span>
            <span className="rounded-xl flex items-center justify-center gap-2 bg-black text-white p-3 dark:bg-white dark:text-black">
              <BiLogoTailwindCss />
              Tailwind
            </span>
            <span className="rounded-xl flex items-center justify-center gap-2 bg-black text-white p-3 dark:bg-white dark:text-black">
              <BiLogoJavascript />
              JavaScript
            </span>
            <span className="rounded-xl flex items-center justify-center gap-2 bg-black text-white p-3 dark:bg-white dark:text-black">
              <BiLogoReact />
              React
            </span>
            <span className="rounded-xl flex items-center justify-center gap-2 bg-black text-white p-3 dark:bg-white dark:text-black">
              <BiRocket />
              Astro
            </span>
            <span className="rounded-xl flex items-center justify-center gap-2 bg-black text-white p-3 dark:bg-white dark:text-black">
              <BiLogoGoLang />
              Golang
            </span>
            <span className="rounded-xl flex items-center justify-center gap-2 bg-black text-white p-3 dark:bg-white dark:text-black">
              <BiLogoFirebase />
              Firebase
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
