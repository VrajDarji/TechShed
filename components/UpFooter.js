const UpFooter = () => {
  return (
    <div className="w-full grid grid-cols-2 mb-10 relative overflow-hidden h-[60vh]">
      <div className="w-[55vw] bg-black z-10 h-[100vh] tilt2 mt-[-7rem] ml-[-4rem] flex justify-start items-start text-white"></div>
      <div className="absolute top-0 left-0 w-[50vw] h-[60vh] flex justify-center items-start z-20 text-white p-20 flex-col gap-3">
        <h1 className="capitalize tracking-wide text-6xl font-semibold pr-20">
          need help?check out our help center
        </h1>
        <p className="pr-20 text-lg font-medium">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ab
          perferendis tenetur illum? Quos voluptatem magnam dolores, debitis
          aspernatur saepe.
        </p>
        <button className="py-2 px-6 capitalize font-semibold border-2 border-[#751fff] bg-[#751fff] rounded-3xl hover:bg-black hover:text-[#751fff] fadeout">
          go to help center
        </button>
      </div>
      <div className="slap3 w-full h-full"></div>
    </div>
  );
};
export default UpFooter;
