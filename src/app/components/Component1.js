export default function Component1() {
  return (
    <div className="h-[600px] w-full bg-[#D3E5FF] flex items-center justify-center">
      <div className="flex w-full h-full">
        
        {/* Left Section with Image Inside a Frame/Mockup */}
        <div className="w-1/2 h-full flex justify-center items-center p-5">
          <div className="relative w-full max-w-[800px] h-full max-w-[520px] max-h-[520px] bg-white border-8 border-white rounded-xl shadow-lg m-2 overflow-hidden">
            <div
              className="w-[full] h-full bg-cover bg-center"
              style={{ backgroundImage: "url('/assets/img1.png')" }}
            >
              {/* Image is inside a frame with border and shadow */}
            </div>
          </div>
        </div>
        
        {/* Right Section with Text and Solid Background */}
        <div className="w-1/2 flex flex-col justify-center p-10 bg-blue rounded-r-xl space-y-6">
          <h2 className="text-4xl text-black font-bold mb-6 leading-tight">
            Announcements and Memos
          </h2>
          <p className="text-lg text-black font-light leading-relaxed">
            Access to memos and announcements on any internet-enabled device.
          </p>
        </div>
      </div>
    </div>
  );
}
