export default function Subscribe() {
  return (
    <div className="p-4 space-y-3 ">
      <div className="bg-[#C6E4D6] p-10 space-y-3 rounded-xl">
        <p className="font-bold text-xl">Subscribe Newsletter</p>
        <p className="text-sm">
          Bangladesh 2.0 aims to redefine the nation&apos;s trajectory by
          embracing cutting-edge technology, promoting inclusive growth.
        </p>
        <div className="flex">
          <input
            type="number"
            placeholder="Enter your email here"
            className="bg-white w-full px-4 py-3 text-sm outline-none rounded-l-xl"
          />
          <button className="bg-[#006A50] text-white p-3 text-sm rounded-r-xl">
            Subscribe
          </button>
        </div>
        <p>We promise not to spam you!</p>
      </div>
    </div>
  );
}
