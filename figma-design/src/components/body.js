import shoe from "./nike-shoe-img.png";
import flipkart from "./flipkart-logo.png";
import amazon from "./amazon-logo.png";
function body() {
  return (
    <div className="flex justify-center items-center mt-12">
      <div className="ml-40">
        <div className="text-8xl font-bold">YOUR FEET DESERVE <br/>THE BEST</div>
        <div className="mt-8 font-semibold text-1xl flex justify-start text-black opacity-65">
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO <br/>HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE <br/>BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
        </div>
        <div className="flex justify-start items-center mt-7">
            <button className="bg-red-600 text-white rounded-sm w-32 h-10 mr-10 font-semibold hover:opacity-85">
                SHOP NOW</button>
            <button className="bg-white text-black border border-black w-32 h-10 font-semibold hover:bg-slate-200">CATEGORY</button>
        </div>
        <div className="mt-5 ">Also Available On</div>
        <div className="flex justify-start items-center mt-2">
            <img src={flipkart} className="w-10 mr-4"/>
            <img src={amazon} className="w-10"/>
        </div>
      </div>
      <img src={shoe} className="w-[800px] h-[630px] mr-48"/>
    </div>
  );
}
export default body;
