import x0001 from "../../public/000.png";
import x11 from "../../public/1.png";
import x21 from "../../public/2.png";
import x31 from "../../public/3.png";

const Hero = () => {
  return (
    <div className="bg-white w-full min-h-screen mt-5">
      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:flex-row lg:justify-center lg:w-full lg:h-screen">
        <div className="bg-white overflow-hidden w-full max-w-[1440px] h-full flex items-center justify-center px-4">
          <div className="relative w-full max-w-[1466px] h-[700px]">
            <img
              className="absolute w-[550px] h-[550px] top-16 right-0 object-cover xl:w-[550px] xl:h-[600px] xl:top-8"
              alt="Element"
              src={x0001}
            />

            <p className="absolute w-full max-w-[630px] top-[150px] left-8 [font-family:'Inter-Regular',Helvetica] font-normal text-black text-4xl xl:text-5xl tracking-[0] leading-[normal]">
              Boost Efficiency with
              <br />
              Smart Tech &amp;
              <br />
              Custom Solutions
            </p>

            <div className="absolute w-full max-w-[663px] h-[55px] top-[340px] left-8 bg-[#00abff] rounded-[10px]" />

            <p className="absolute top-[352px] left-[84px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-xl xl:text-2xl tracking-[0] leading-[normal]">
              Smarter Scanning. Faster Operations. Zero Errors
            </p>

            <div className="absolute w-full h-[100px] top-[540px] left-0 bg-[#ffde59] rounded-[30px] flex items-center justify-start gap-4 lg:gap-8 px-8 lg:px-12">
              <img
                className="w-[150px] h-[60px] lg:w-[200px] lg:h-[80px] object-cover"
                alt="Element"
                src={x11}
              />

              <img
                className="w-[90px] h-[60px] lg:w-[120px] lg:h-[80px] object-cover"
                alt="Element"
                src={x21}
              />

              <img
                className="w-[135px] h-[60px] lg:w-[180px] lg:h-[80px] object-cover"
                alt="Element"
                src={x31}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile and Tablet Layout */}
      <div className="lg:hidden flex flex-col min-h-screen px-4 py-16 sm:py-16 ">
        {/* Content Section - Top */}
        <div className="space-y-6 mb-8 flex-1 flex flex-col justify-center">
          {/* Main Title */}
          <div className="text-center">
            <h1 className="font-normal text-black text-2xl sm:text-3xl md:text-4xl tracking-[0] leading-normal [font-family:'Inter-Regular',Helvetica]">
              Boost Efficiency with
              <br />
              Smart Tech &amp;
              <br />
              Custom Solutions
            </h1>
          </div>

          {/* Subtitle with Blue Background */}
          <div className="mx-auto max-w-lg">
            <div className="bg-[#00abff] rounded-[10px] px-4 py-3 sm:px-6 sm:py-4 text-center">
              <p className="font-normal text-white text-base sm:text-lg md:text-xl tracking-[0] leading-normal [font-family:'Inter-Regular',Helvetica]">
                Smarter Scanning. Faster Operations. Zero Errors
              </p>
            </div>
          </div>

          {/* Main Hero Image Section */}
          <div className="flex-1 flex items-end justify-end min-h-[200px] sm:min-h-[300px]">
            <div className="relative w-96 sm:w-[600px] md:w-96">
              <img
                className="w-full h-auto object-cover"
                alt="Element"
                src={x0001}
              />
            </div>
          </div>
          {/* Industry Images - Mobile */}
          <div className="mt-8">
            <div className="bg-[#ffde59] rounded-[20px] p-4 flex items-center justify-center gap-6 sm:gap-10">
              <img
                className="w-[80px] h-[40px] sm:w-[100px] sm:h-[50px] object-cover"
                alt="Element"
                src={x11}
              />

              <img
                className="w-[60px] h-[40px] sm:w-[80px] sm:h-[50px] object-cover"
                alt="Element"
                src={x21}
              />

              <img
                className="w-[75px] h-[40px] sm:w-[95px] sm:h-[50px] object-cover"
                alt="Element"
                src={x31}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
