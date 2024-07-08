function Footer() {
  return (
    <div>
      <div className="p-20 bg-[#484848]">
        <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 grid-cols-3">
          <div className="flex flex-col justify-between mx-5">
            <h1 className="text-[30px] font-bold text-white">ABOUT US</h1>
            <h2 className="text-[20px] text-white">Constra</h2>
            <p className="text-[15px] text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor inci done idunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex">
              <h2>Icon</h2>
              <h2>Icon</h2>
            </div>
          </div>
          <div className="flex flex-col justify-between mx-5">
            <h1 className="text-[30px] font-bold text-white">WORKING HOURS</h1>
            <p className="text-[15px] text-white">
              We work 7 days a week, every day excluding major holidays. Contact
              us if you have an emergency, with our Hotline and Contact form.
            </p>
            <div>
              <div className="flex justify-between">
                <h2 className="text-white">Monday - Friday:</h2>
                <h2 className="text-white">10:00 - 16:00</h2>
              </div>
              <div className="flex justify-between">
                <h2 className="text-white">Monday - Friday:</h2>
                <h2 className="text-white">10:00 - 16:00</h2>
              </div>
              <div className="flex justify-between">
                <h2 className="text-white">Monday - Friday:</h2>
                <h2 className="text-white">10:00 - 16:00</h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between mx-5">
            <h1 className="text-[30px] font-bold text-white">SERVICES</h1>
            <div className="flex flex-col">
              <h2 className="text-white">Pre-Construction</h2>
              <h2 className="text-white">Pre-Construction</h2>
              <h2 className="text-white">Pre-Construction</h2>
              <h2 className="text-white">Pre-Construction</h2>
              <h2 className="text-white">Pre-Construction</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 grid-cols-3 px-20 py-4 items-center">
        <p className="text-[15px]">Copyright © 2024, Designed & Developed by Themefisher</p>
        <div className="flex col-span-2  md:justify-end lg:justify-end ">
          <p className="text-black p-2">About </p>
          <p className="text-black p-2">Our people </p>
          <p className="text-black p-2">Faq </p>
          <p className="text-black p-2">Blog</p>
          <p className="text-black p-2">Pricing</p>
        </div>
      </div>
    </div>
  );
}

export { Footer };
