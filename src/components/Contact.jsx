import React from "react";

const Contact = () => {
  return (
    <div name="Contact" className="h-full w-full pt-10 text-center">
      <div className="mx-[12%]">
        <div className="text-white">
          <p className="text-2xl md:text-2xl lg:text-5xl font-goldman">
            Contact
          </p>
          <p className="text-base md:text-lg lg:text-2xl">
            Submit the form below to get in touch with me.
          </p>
        </div>
        <div className=" w-full ">
          <div className="text-white my-5  ">
            <p className="text-base md:text-lg lg:text-2xl">
              Interested in working with me?
            </p>
          </div>
          <div className="flex justify-center items-center w-full mt-10">
            <form
              action="https://getform.io/f/385a1d29-4433-49c6-9b01-366823a80825"
              method="POST"
              className="flex flex-col w-full md:w-1/2 gap-8"
            >
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />

              <input
                name="email"
                type="text"
                placeholder="Enter your email"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <textarea
                name="message"
                rows="10"
                placeholder="Enter message"
                className="p-2 bg-transparent border-2 rounded-md focus:outline-none text-white"
              ></textarea>

              <button className="text-white bg-cyan-500 font-goldman flex items-center px-6 py-3 mt-5 mb-8 mx-auto rounded-md hover:scale-110 duration-300">
                Sent
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
