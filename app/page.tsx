"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = ["/Groupt4760.svg", "/Groupt4758.svg", "/Groupt4759.svg"];

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    <main className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Group4.svg"
            alt="Ywork.ai Logo"
            width={200}
            height={40}
            className="w-32 md:w-48 lg:w-56"
          />
        </Link>

        {/* Button Section */}
        <Link
          href="/signin"
          className="bg-[#FF5C00] text-white px-6 py-3 rounded-full font-light w-fit min-w-[120px] text-center"
        >
          Book Demo
        </Link>
      </header>

      {/* Hero Section */}
      <section className="min-h-[90vh] md:h-screen flex flex-col items-center justify-center px-4  ">
        <h1 className="text-[13vw] md:text-6xl lg:text-7xl font-light leading-tight md:mb-10">
          Smarter, Faster, Cheaper
          <br />
          AI-enabled procurement
        </h1>

        {/* Google Sign-In Button */}
        <button className="flex items-center mt-6 md:mt-10 justify-center gap-4 rounded-full w-full max-w-[350px]">
        <a
            href="https://backend.sablink.co.in/yoga1/api/auth/google/signup/"
            target="_blank"
            rel="noopener noreferrer"
        >
          <Image
            src="/WithText.svg"
            alt="Google Logo"
            width={350}
            height={300}
            className="w-[80vw] max-w-[350px]"
          />
        </a>
        
        </button>

        {/* Description Text */}
        <p className="text-lg sm:text-xl font-light mt-10">
          Start for free. No credit card required
        </p>
      </section>

      <section className="mt-10 py-10 px-4 md:px-10 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 lg:gap-32">
        {/* Text Section */}
        <div className="text-left max-w-md">
          <h2 className="text-[9vw] md:text-4xl text-center font-light mb-4">
            Reads your <span className="block md:inline">project folder</span>
          </h2>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-auto">
          {/* Image for Larger Screens */}
          <Image
            src="/Group4763.svg"
            alt="Ywork.ai Banner"
            width={800}
            height={40}
            className="w-full max-w-[600px] h-auto hidden md:block"
          />

          {/* Image for Small Screens */}
          <Image
            src="/Group4762-mob.svg"
            alt="Ywork.ai Mobile Banner"
            width={400}
            height={40}
            className="w-full max-w-[400px] h-auto block md:hidden"
          />
        </div>
      </section>

      <section className="mt-10 py-10 px-4 md:px-6 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 lg:gap-44">
        {/* Text Section */}
        <div className="text-left max-w-md">
          <h2 className="text-[9vw] md:text-4xl font-light mb-4">
            Finds Supply Chain
          </h2>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-auto">
          <Image
            src="/Group4756.svg"
            alt="Ywork.ai Banner"
            width={600}
            height={40}
            className="w-full max-w-[600px] h-auto"
          />
        </div>
      </section>

      <section className="mt-10 md:py-40  px-4 md:px-6 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 lg:gap-32">
        {/* Text Section */}
        <div className="text-left max-w-lg">
          <h2 className="text-[9vw] text-center md:text-4xl font-light mb-4">
            Reaches out from your email
          </h2>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-auto">
          <Image
            src="/Group4738.svg"
            alt="Ywork.ai Banner"
            width={500}
            height={40}
            className="w-full max-w-[500px] h-auto"
          />
        </div>
      </section>

      {/* Mobile Carousel Section */}
      <div className="relative w-full mt-10 pt-20 px-4 block md:hidden">
        <h2 className="text-[9vw] text-center font-light mb-4">
          Reviews and compares quotes
        </h2>

        {/* Carousel Image */}
        <div className="relative w-full h-72 overflow-hidden items-center rounded-lg flex justify-center bg-white">
          <Image
            src={images[currentIndex]}
            alt={`Ywork.ai Banner ${currentIndex + 1}`}
            width={500}
            height={300}
            className="object-contain max-w-full max-h-full"
          />
        </div>

        {/* Rounded Indicator Buttons */}
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-orange-400" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Desktop Section */}
      <section className="hidden md:flex mt-10 py-20 px-4 md:px-6 justify-center items-center gap-8 md:gap-16 lg:gap-32">
        {/* Text Section */}
        <div className="text-left">
          <h2 className="text-[9vw] md:text-4xl text-center font-light mb-4">
            Reviews and compares quotes
          </h2>
        </div>
        {/* Static Image Section */}
        <div className="w-full md:w-auto">
          <Image
            src="/Group4764.svg"
            alt="Ywork.ai Banner"
            width={600}
            height={40}
            className="w-full max-w-[600px] h-auto"
          />
        </div>
      </section>

      <section className="mt-10 py-20 px-4 md:px-6 flex flex-col items-center gap-y-12 md:gap-y-16 lg:gap-y-20">
        {/* Text Section */}
        <div>
          <h2 className="text-[8vw] md:text-4xl lg:text-5xl px-4 md:px-20 lg:px-64 text-center font-light">
            Save up to £3000 of work/month and up to 30% of project costs
          </h2>
        </div>

        {/* Image Section */}
        <div className="flex flex-col justify-center items-center gap-y-12 md:gap-y-16 lg:gap-y-20">
          {/* Image Section 1 */}
          <Image
            src="/Frame4731.svg"
            alt="Ywork.ai Banner"
            width={250}
            height={40}
            className="max-w-full h-auto"
          />

          {/* Image Section 2 */}
          <Image
            src="/Frame4732.svg"
            alt="Ywork.ai Banner"
            width={250}
            height={40}
            className="max-w-full h-auto"
          />
        </div>
      </section>

      <section className="mt-10  md:py-40 px-6 text-center">
        {/* First Line - Text with Logo */}
        <div className="flex justify-center  items-center flex-nowrap overflow-hidden">
          <h2 className="text-[7vw] md:text-4xl lg:text-5xl font-light whitespace-nowrap">
            Why work when
          </h2>
          <Image
            src="/Group4.svg"
            alt="Ywork.ai Logo"
            width={120}
            height={40}
            className="mx-2 w-[30vw] max-w-[150px] md:w-28 lg:w-36"
          />
        </div>

        <div>
          <h2 className="text-[7vw] md:text-4xl lg:text-5xl font-light mt-4">
            reduces cost for you
          </h2>
        </div>

        {/* Images Section */}
        <div className="md:mt-10 flex flex-wrap justify-center items-center gap-2 md:gap-8">
          <Image
            src="/Frame4737.svg"
            alt="Ywork.ai Banner"
            width={400}
            height={40}
            className="max-w-[70vw] md:max-w-[400px]"
          />
          <Image
            src="/Frame4738.svg"
            alt="Ywork.ai Banner"
            width={400}
            height={40}
            className="max-w-[70vw] md:max-w-[400px]"
          />
          <Image
            src="/Frame4739.svg"
            alt="Ywork.ai Banner"
            width={400}
            height={40}
            className="max-w-[70vw] md:max-w-[400px]"
          />
        </div>
      </section>

      {/* Add Responsive Margin Here */}
      <section className="py-20 md:py-32 lg:py-40 flex-grow flex flex-col items-center justify-center px-4 text-center">
        {/* Main Image */}
        <div className="flex justify-center py-10 items-center">
          <Image
            src="/Group4.svg"
            alt="Ywork.ai Logo"
            width={250}
            height={40}
            className="mx-2"
          />
        </div>

        {/* Social Icons Section */}
        <div className="flex justify-center items-center gap-2">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Group4686.svg"
              alt="Facebook Icon"
              width={40}
              height={40}
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Group4687.svg"
              alt="Instagram Icon"
              width={40}
              height={40}
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Group4690.svg"
              alt="LinkedIn Icon"
              width={40}
              height={40}
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Group4691.svg"
              alt="Twitter Icon"
              width={40}
              height={40}
            />
          </a>
        </div>

        {/* Contact Details Section */}
        <div className="flex flex-col md:flex-row w-full max-w-3xl mx-auto items-center font-light my-12 gap-6 md:gap-0">
          <div className="flex-1 flex justify-center items-center space-x-2">
            <Image src="/mail.svg" alt="Email Icon" width={24} height={24} />
            <p>contact@ywork.ai</p>
          </div>
          <div className="flex-1 flex justify-center items-center space-x-2">
            <Image src="/phone.svg" alt="Phone Icon" width={24} height={24} />
            <p>02039498328</p>
          </div>
          <div className="flex-1 flex justify-center items-center space-x-2">
            <Image src="/globe.svg" alt="Website Icon" width={24} height={24} />
            <p>www.ywork.ai</p>
          </div>
        </div>

        {/* Footer Section */}
        <p className="text-gray-400 text-sm md:text-base lg:text-lg mt-8">
          &copy; 2025 Ywork.ai
        </p>
      </section>
    </main>
  );
}
