const Marks = () => {
  return (
    <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
      <span className="font-semibold md:text-lg">12th Standard</span>
      <span className="font-light">
        Indian National Inter college, Ghaziabad
      </span>
      <span className="text-sm text-gray-400">2020</span>
    </li>
  );
};

export default Marks;
