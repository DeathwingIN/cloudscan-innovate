
import x0001 from "../../public/000.png";
import x11 from "../../public/1.png";
import x21 from "../../public/2.png";
import x31 from "../../public/3.png";

const Hero = () => {
  return (
    <div className="bg-white w-full min-h-screen">
      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:flex-row lg:justify-center lg:w-full">
        <div className="bg-white overflow-hidden w-[1440px] h-[827px]">
          <div className="relative w-[1466px] h-[827px] left-[95px]">
            <img
              className="absolute w-[700px] h-[700px] top-0 left-[600px] object-cover"
              alt="Element"
              src={x0001}
            />

            <div className="absolute w-[1466px] h-[117px] top-[669px] left-0 bg-[#ffde59] rounded-[30px]" />

            <p className="absolute w-[630px] top-[218px] left-8 [font-family:'Inter-Regular',Helvetica] font-normal text-black text-5xl tracking-[0] leading-[normal]">
              Boost Efficiency with
              <br />
              Smart Tech &amp;
              <br />
              Custom Solutions
            </p>

            <div className="absolute w-[663px] h-[55px] top-[430px] left-8 bg-[#00abff] rounded-[10px]" />

            <p className="absolute top-[442px] left-[84px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal]">
              Smarter Scanning. Faster Operations. Zero Errors
            </p>

            <img
              className="absolute w-[277px] h-[152px] top-[652px] left-[23px] object-cover"
              alt="Element"
              src={x11}
            />

            <img
              className="absolute w-[197px] h-[113px] top-[674px] left-[588px] object-cover"
              alt="Element"
              src={x31}
            />

            <img
              className="absolute w-[129px] h-[124px] top-[669px] left-[341px] object-cover"
              alt="Element"
              src={x21}
            />
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
          <div className="relative w-96 sm:w-56 md:w-64">
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
