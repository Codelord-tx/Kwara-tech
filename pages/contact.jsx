import Image from "next/image";
// import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
// import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../assets/images/contact.jpg";

const contact = () => {
  // const [name, setName] = useState("");
  // const [phone, setPhone] = useState("");
  // const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  // const [message, setMessage] = useState("");

  // const handleSubmit = () => {
  //   setName("");
  //   setPhone("");
  //   setEmail("");
  //   setSubject("");
  //   setMessage("");
  // };

  return (
    <div id="contact" className="w-full lg:h-auto py-20 p-4">
      <div className="w-[100%] mx-auto h-[80vh] md:h-[35vh] flex justify-center items-center text-center bg-gradient-to-r from-[#3762f2] to-[#123dcc] rounded-[1.5rem] sm:rounded-[3rem]">
        <h1 className="font-bold animate-in fade-in zoom-in delay-120 duration-1000 text-center text-4xl uppercase">
          contact
        </h1>
      </div>
      {/*  */}
      <div className="max-w-6xl m-auto px-4 pt-16 sm:pt-20 w-full ">
        <h2 className="py-4 font-serif">Get In Touch</h2>
        <div className="grid md:grid-cols-5 lg:grid-cols-5 md:gap-4 lg:gap-8 space-y-5 md:space-y-0">
          {/* left */}
          <div className="col-span-3 md:col-span-2 w-full h-full border border-gray-400 rounded-3xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ContactImg}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">kwara-tech academy</h2>
                <p></p>
                <p className="py-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam quaerat expedita consectetur, consequuntur quas
                  distinctio vel veritatis, aliquam porro iusto rerum amet id,
                  sit aliquid sed illum consequatur. Enim, explicabo.
                </p>
              </div>

              <div>
                <p className="uppercase pt-8">Connect With us on</p>
                <div className="flex items-center justify-between py-3">
                  <a
                    href="https://www.linkedin.com/in/kwara-tech-academy-a774a1244"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg bg-blue-600 text-white p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://www.facebook.com/kwaratechacademy?mibextid=LQQJ4d"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg bg-blue-600 text-white p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaFacebook />
                    </div>
                  </a>
                  <a
                    href="https://instagram.com/kwaratechacademy?igshid=MzRlODBiNWFlZA=="
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg bg-gradient-to-r from-[#2e2d2d] to-[#16161b] text-white p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaInstagram />
                    </div>
                  </a>
                  <a
                    href="https://wa.me/07011198112"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg bg-green-500 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaWhatsapp />
                    </div>
                  </a>
                  {/*  */}
                  <a href="https://twitter.com/kwaratech?s=21&t=sYf7NFdQaYs03psUDuFqhQ">
                    <div className="rounded-full shadow-lg bg-blue-500 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaTwitter />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          {/* FORM INPUT */}

          <div className="col-span-3 w-full h-auto border border-gray-400 rounded-3xl lg:p-4">
            <div className="p-4">
              <form action="https://" method="POST">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="text-black border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="text-black border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="phone"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="text-black border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="text-black border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 text-black border-gray-300"
                    rows="5"
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <button
                  className="w-full p-4 rounded-md
                 text-gray-100 mt-4 bg-[#233dfc]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/*  */}

        {/* <div className="flex justify-center py-10">
          <a href="#home">
            <div className="rounded-full shadow shadow-gray-600 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#f0eff7]" size={30} />
            </div>
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default contact;
