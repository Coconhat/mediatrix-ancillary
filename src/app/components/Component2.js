export default function Component2() {
  return (
    <div className="h-[600px] w-full bg-white flex items-center justify-center">
      <div className="flex w-full h-full">
        
        {/* Left Section with Text and Solid Background */}
        <div className="w-1/2 flex flex-col justify-center p-10 bg-blue">
          <h2 className="text-4xl text-black font-bold mb-4">Communication</h2>
          <p className="font-sans text-lg text-black">
            Centralized communication enabling department heads to receive accurate and timely updates.
          </p>
        </div>
        
        {/* Right Section with Background Image */}
        <div
          className="w-1/2 h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/img3.png')" }}
        >
          {/* Image will cover the full height and right side of the component */}
        </div>
      </div>
    </div>
  );
}
