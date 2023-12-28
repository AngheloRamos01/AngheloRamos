import React, { useState } from "react";
import cert1 from "../assets/cert1.png";
import cert2 from "../assets/cert2.jpg";
import cert3 from "../assets/cert3.png";
import cert4 from "../assets/CertCode.png";
import cert5 from "../assets/CertExcel.png";
import { IoIosClose } from "react-icons/io";
const Certificates = () => {
  const [file, setFile] = useState(null);
  //list of Certificates
  const certificates = [
    {
      id: 1,
      type: "img",
      src: cert1,
      dsc: "This certificates comes from the company where I did an internship upon completing ",
    },
    {
      id: 2,
      type: "img",
      src: cert4,
      dsc: "This certificates comes from the company where I did an internship upon completing ",
    },
    {
      id: 3,
      type: "img",
      src: cert5,
      dsc: "This certificates comes from the company where I did an internship upon completing ",
    },
    { id: 4, src: cert2, type: "img" },
    { id: 5, src: cert3, type: "img" },
  ];
  return (
    <div name="Certificates" className="mb-16">
      <div>
        <h2 className="text-2xl md:text-2xl lg:text-5xl font-goldman text-center mb-10 ">
          Certificates
        </h2>
      </div>
      <div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-2 mx-10">
          {certificates.map((file, id) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center hover:cursor-pointer"
              onClick={() => setFile(file)}
            >
              {file.type === "img" && (
                <img
                  src={file.src}
                  alt="my Certificates"
                  data-original
                  className=" h-full w-[300px] object-fit md:h-[300px] md:w-[500px]"
                />
              )}
            </div>
          ))}
        </div>
        <div className="relative">
          <span
            style={{ display: file ? "block " : "none" }}
            onClick={() => setFile(null)}
            className={
              file
                ? "absolute z-20 -top-[480px] left-[295px]  md:-top-[490px] md:left-[600px] lg:-top-[380px] lg:left-[810px] xl:-top-[500px] xl:left-[1300px] text-red-600"
                : ""
            }
          >
            <IoIosClose className="h-10 w-10 md:h-14 md:w-14 " size={60} />
          </span>
          <img
            src={file?.src}
            alt=""
            className={
              file
                ? " absolute z-10 -top-[490px] left-[8%]   h-[280px] w-[320px] md:-top-[500px] md:left-[10%]  md:h-[450px] md:w-[600px] lg:-top-[400px] lg:left-[10%]  lg:h-[500px] lg:w-[800px] xl:-top-[501px] xl:left-[20%]  xl:h-[700px] xl:w-[1000px] "
                : ""
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Certificates;
