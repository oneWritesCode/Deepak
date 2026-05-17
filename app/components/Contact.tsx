"use client";

import React, { useRef, useState, FormEvent } from "react";
import Input from "./Input";

function Contact(): React.ReactElement {
  const formRef = useRef<HTMLFormElement>(null);
  const [cooldown, setCooldown] = useState<boolean>(false);
  const [messaging, setMessaging] = useState<boolean>(false);

  // Web3Forms public key (NOT secret)
  const PUBLIC_FORM_KEY: string = "e23227b3-e9b3-4f57-a2a8-82469f3f248f"; // okay to expose this

  // Cooldown after submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    if (cooldown) {
      e.preventDefault();
      alert("You're submitting too fast. Wait a few seconds.");
      return;
    }
    setCooldown(true);
    setTimeout(() => setCooldown(false), 10000); // 10 seconds lockout
  };

  return (
    <>
      {/* <button
        onClick={() => setMessaging((prev) => !prev)}
        className="fixed bottom-10 right-10 z-100 flex items-center justify-center bg-transparent flex-col capitalize"
      >
        let's chat
      </button>
      {messaging && (
        <div className="fixed bottom-0 right-0 z-100 flex items-center justify-center bg-transparent flex-col capitalize">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="relative lg:w-150 w-full max-w-125 backdrop-blur-xl lg:p-6 p-4 flex justify-center items-center flex-col shadow-sm border-2 border-white/10 rounded-2xl"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <button
              onClick={() => setMessaging((prev) => !prev)}
              className="absolute top-2 right-2 font-bold flex items-center justify-center bg-transparent flex-col capitalize"
            >
              x
            </button>
            <input type="hidden" name="access_key" value={PUBLIC_FORM_KEY} />

            <input type="text" name="honeypot" style={{ display: "none" }} />

            <Input
              type="text"
              name="Name"
              placeholder="eg: deepak"
              label="Enter your name"
              className="bg-gray-400/10"
              required
            />
            <Input
              type="email"
              name="Email"
              placeholder="eg: deepak.dev@gmail.com"
              label="Enter your email"
              className="bg-gray-400/10"
              required
            />
            <Input
              type="text"
              name="Twitter-Id"
              placeholder="eg: @triordeep"
              label="Enter your twitter id*"
              className="bg-gray-400/10"
            />
            <Input
              type="text"
              name="Message"
              placeholder="eg: hey, i am deepak"
              label="Enter your message"
              className="bg-gray-400/10"
              required
            />  

            <button
              className="px-4 sm:px-6 py-1 sm:py-2 mt-4 mb-2 sm:mt-10 rounded-xl rotate-2 shadow-xl shadow-neutral-500/30 hover:rotate-0 bg-neutral-900 text-sm sm:text-xl font-medium transition-all duration-300 hover:scale-105 cursor-pointer"
              disabled={cooldown}
            >
              {cooldown ? (
                "Please wait..."
              ) : (
                <>
                  Send <span className="mogra ml-1">{`:)`}</span>
                </>
              )}
            </button>
          </form>
        </div>
      )} */}
    </>
  );
}

export default Contact;
