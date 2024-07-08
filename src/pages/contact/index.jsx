import { Button, Carousel, InputField } from "../../components";

function Contact() {
  return (
    <div>
      <Carousel />
      <div className="my-10 xs:mx-5 sm:mx-5 md:mx-20 lg:mx-20">
        <h2 className="text-[20px] text-center">REACHING OUR OFFICE</h2>
        <h1 className="text-[30px] font-bold text-center">
          REACHING OUR OFFICE
        </h1>
        <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 grid-cols-3">
          <div className="h-[200px] flex flex-col justify-center items-center mx-5">
            <h1>VISIT OUR OFFICE</h1>
            <h2>9051 Constra Incorporate, USA</h2>
          </div>
          <div className="h-[200px] flex flex-col justify-center items-center mx-5">
            <h1>VISIT OUR OFFICE</h1>
            <h2>9051 Constra Incorporate, USA</h2>
          </div>
          <div className="h-[200px] flex flex-col justify-center items-center mx-5">
            <h1>VISIT OUR OFFICE</h1>
            <h2>9051 Constra Incorporate, USA</h2>
          </div>
        </div>
        <div className="xs:mx-5 sm:mx-5 md:mx-20 lg:mx-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14159906.420505691!2d58.3546319874604!3d29.950436907162743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2s!4v1720422033050!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: "0px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="mt-[20px]">
          <h1 className="text-[30px] font-bold text-center">WE LOVE TO HEAR</h1>
        </div>
        <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 grid-cols-3">
          <div className="mx-3">
            <InputField
              type="text"
              name="name"
              label="Name"
              className="border-[1px] border-black w-full"
              labelClassName="text-[15px]"
            />
          </div>
          <div className="mx-3">
            <InputField
              type="email"
              name="email"
              label="Email"
              className="border-[1px] border-black w-full"
              labelClassName="text-[15px]"
            />
          </div>
          <div className="mx-3">
            <InputField
              type="text"
              name="subject"
              label="Subject"
              className="border-[1px] border-black w-full"
              labelClassName="text-[15px]"
            />
          </div>
          <div className="xs:col-span-1 md:col-span-3 lg:col-span-3 mx-3">
            <InputField
              type="text"
              name="message"
              label="Message"
              className="border-[1px] border-black w-full"
              labelClassName="text-[15px]"
            />
          </div>
          <div className="xs:col-span-1 md:col-span-3 lg:col-span-3 mx-3 flex justify-end mt-4">
            <Button className="bg-black text-white p-3">Send Message</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Contact };
