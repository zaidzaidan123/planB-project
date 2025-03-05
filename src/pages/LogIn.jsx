import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Footer from "../component/footer";
import TitleWithLines from "../component/TitleWithLines";
import Haj from "../assets/haj.png";
import iata from "../assets/iata.png";
import joro from "../assets/joro.png";
import joro1 from "../assets/joro1.png";
import jsta from "../assets/jsta.png";
import one from "../assets/one.png";
import petra from "../assets/petra.png";
import wadiRumHero from "../assets/wadiRumHero.png";
import logo from "../assets/logo.svg";
import { FaEnvelope } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";

const LogIn = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
    },
  });

  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex flex-col w-full min-h-screen">
        <div
          className="relative md:h-screen bg-cover bg-center flex flex-col xl:flex-row items-center justify-start px-12 text-white"
          style={{ backgroundImage: `url(${wadiRumHero})` }}
        >
          <div className="relative w-1/2 flex flex-col justify-between">
            <a href="/">
              <img
                src={logo}
                alt="PlanBC Travel"
                className="w-[400px] h-[200px] mb-4"
              />
            </a>
            <h1 className="text-2xl font-bold text-black">
              Travel is the only purchase that enriches you in ways beyond
              material wealth
            </h1>
          </div>
          <div className="relative z-10 bg-white text-black p-8 rounded-lg shadow-lg w-full xl:w-1/3 mt-3">
            <h2 className="text-2xl font-bold text-center">
              Don't just imagine the Trip, Experience it!
            </h2>
            <p className="text-center text-gray-600 mb-4">
              We'll help you plan dream escapes.
            </p>
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-3 mb-5"
            >
              <div className="relative">
                <FaEnvelope className="absolute right-4 top-4 text-gray-400" />
                <input
                  type="text"
                  name="email"
                  placeholder="Sandeep.samay@gmail.com"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.email}
                  </p>
                ) : null}
              </div>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  {...formik.getFieldProps("password")}
                />
                <IoMdEyeOff className="absolute right-4 top-4 text-gray-400 cursor-pointer" />
                {formik.touched.password && formik.errors.password ? (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.password}
                  </p>
                ) : null}
              </div>
              <div className="flex items-center justify-between w-full text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <div
                    className={`w-10 h-5 flex items-center bg-gray-300 rounded-full p-1 duration-300 ${
                      rememberMe ? "bg-teal-500" : ""
                    }`}
                    onClick={() => setRememberMe(!rememberMe)}
                  >
                    <div
                      className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${
                        rememberMe ? "translate-x-5" : ""
                      }`}
                    ></div>
                  </div>
                  Remember me
                </label>
                <a href="#" className="text-gray-500">
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full mt-6 bg-teal-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-all"
              >
                Login
              </button>
            </form>
            <p className="mt-4 text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <a href="#" className="text-teal-600 font-semibold">
                Sign up!
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="py-12 text-center px-28 my-16 md:my-64">
        <TitleWithLines title={"OUR PARTNERS"} />
        <div className="flex flex-col xl:flex-row flex-wrap justify-between gap-6 mt-4">
          <img src={Haj} alt="Partner 1" className="h-24 object-contain" />
          <img src={jsta} alt="Partner 2" className="h-24 object-contain" />
          <img src={iata} alt="Partner 3" className="h-24 object-contain" />
          <img src={joro} alt="Partner 4" className="h-24 object-contain" />
          <img src={joro1} alt="Partner 2" className="h-24 object-contain" />
          <img src={petra} alt="Partner 3" className="h-24 object-contain" />
          <img src={one} alt="Partner 4" className="h-24 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
