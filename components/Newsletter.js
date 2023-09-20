const Newsletter = () => {
  return (
    <div className="px-10 pb-10 w-full">
      <div className="w-full bg-[#751fff] py-7 flex flex-col gap-3 justify-center items-center text-white">
        <h1 className="text-2xl font-semibold ">Newsletter</h1>
        <p className="text-lg font-medium">Sign up to receive updates on new arrivals and special offers</p>
        <div className="w-full flex flex-row justify-center items-center mt-3">
          <input type="email" placeholder="Your Email Here" className="py-2 px-4 w-[50%] rounded-l-3xl outline-none text-black"/>
          <button type="button" className="bg-black py-2 px-3 rounded-r-3xl">Subscribe</button>
        </div>
      </div>
    </div>
  );
};
export default Newsletter;
