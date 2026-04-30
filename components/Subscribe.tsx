export default function Subscribe() {
  return (
    <div className="p-4 space-y-3 lg:space-y-8">
      <div className="bg-[#C6E4D6] dark:bg-green-600 p-10 space-y-3 rounded-xl xl:p-20 mb-20">
        <p className="font-bold text-xl xl:text-4xl xl:text-center">
          Subscribe Newsletter
        </p>
        <p className="text-sm xl:text-center">
          Bangladesh 2.0 aims to redefine the nation&apos;s trajectory by
          embracing cutting-edge technology, promoting inclusive growth.
        </p>
        <div className="flex xl:w-180 xl:mx-auto">
          <input
            type="text"
            placeholder="Enter your email here"
            className="bg-white dark:bg-zinc-800 w-full px-4 py-3 text-sm outline-none rounded-l-xl"
          />
          <button className="bg-[#006A50] text-white p-3 text-sm rounded-r-xl">
            Subscribe
          </button>
        </div>
        <p className="text-sm text-center">We promise not to spam you!</p>
      </div>
    </div>
  );
}
