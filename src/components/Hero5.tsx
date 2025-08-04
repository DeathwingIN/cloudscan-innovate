
import x0001 from "../../public/000.png";
import x11 from "../../public/1.png";
import x21 from "../../public/2.png";
import x31 from "../../public/3.png";

const Hero = () => {
  return (
    <div className="bg-white w-full min-h-screen">
      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:flex-row lg:justify-center lg:w-full lg:h-screen">
        <div className="bg-white overflow-hidden w-[1440px] h-full flex items-center justify-center">
          <div className="relative w-[1466px] h-[700px] left-[95px]">
            <img
              className="absolute w-[600px] h-[600px] top-14 left-[700px] object-cover"
              alt="Element"
              src={x0001}
            />

            <p className="absolute w-[630px] top-[150px] left-8 [font-family:'Inter-Regular',Helvetica] font-normal text-black text-5xl tracking-[0] leading-[normal]">
              Boost Efficiency with
              <br />
              Smart Tech &amp;
              <br />
              Custom Solutions
            </p>

            <div className="absolute w-[663px] h-[55px] top-[340px] left-8 bg-[#00abff] rounded-[10px]" />

            <p className="absolute top-[352px] left-[84px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal]">
              Smarter Scanning. Faster Operations. Zero Errors
            </p>

            <div className="absolute w-[1466px] h-[100px] top-[550px] left-0 bg-[#ffde59] rounded-[30px] flex items-center justify-start gap-8 px-12">
              <img
                className="w-[200px] h-[80px] object-cover"
                alt="Element"
                src={x11}
              />
              
              <img
                className="w-[120px] h-[80px] object-cover"
                alt="Element"
                src={x21}
              />
              
              <img
                className="w-[180px] h-[80px] object-cover"
                alt="Element"
                src={x31}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile and Tablet Layout */}
      <div className="lg:hidden flex flex-col min-h-screen px-4  py-[100px]">
        {/* Content Section - Top */}
        <div className="space-y-6 mb-8">
          {/* Main Title */}
          <div className="text-center">
            <h1 className="font-normal text-black text-3xl sm:text-4xl md:text-5xl tracking-[0] leading-normal [font-family:'Inter-Regular',Helvetica]">
              Boost Efficiency with
              <br />
              Smart Tech &amp;
              <br />
              Custom Solutions
            </h1>
          </div>

          {/* Subtitle with Blue Background */}
          <div className="mx-auto max-w-lg">
            <div className="bg-[#00abff] rounded-[10px] px-6 py-4 text-center">
              <p className="font-normal text-white text-lg sm:text-xl md:text-2xl tracking-[0] leading-normal [font-family:'Inter-Regular',Helvetica]">
                Smarter Scanning. Faster Operations. Zero Errors
              </p>
            </div>
          </div>
        </div>

        {/* Main Hero Image Section - Right Corner */}
        <div className="flex-1 flex items-end justify-end">
          <div className="relative w-96 sm:w-[750px] md:w-64">
            <img
              className="w-full h-auto object-cover"
              alt="Element"
              src={x0001}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
