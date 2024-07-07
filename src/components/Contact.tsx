"use client";
import { cn } from "@/utils/cn";
import { Email } from "./Email";

function Contact() {
  return (
    <div
      className="h-auto p-10 relative w-full overflow-hidden  flex flex-col items-center justify-center rounded-lg"
      id="contact"
    >
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <h1
        className={cn(
          "text-2xl md:text-2xl lg:text-4xl text-white font-bold text-center mb-6 relative z-20"
        )}
      >
        Get In Touch
      </h1>

      <div className="mt-5 max-w-md w-full mx-auto rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black border z-30">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
          Have a question or want to work together?
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center">
          Let's collaborate and discuss your project 🚀
        </p>

        <Email />
      </div>
    </div>
  );
}

export default Contact;
