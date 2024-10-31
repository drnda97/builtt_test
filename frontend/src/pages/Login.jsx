import React from "react";
import Button from "../components/UIComponents/Button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-10 px-4">
      <h1 className="text-2xl">Prijavi se na svoj nalog</h1>
      <div className="flex flex-col items-center justify-center gap-16 w-full">
        <div className="mb-3.5 flex items-center justify-center flex-col gap-4 sm:w-96 w-full">
          <div className="relative z-0 w-full">
            <input
              type="text"
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:border-black focus:outline-none focus:ring-0 peer"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              E-mail adresa
            </label>
          </div>
          <div className="relative z-0 w-full">
            <input
              type="password"
              id="password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:border-black focus:outline-none focus:ring-0 peer"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Upišite šifru
            </label>
          </div>
        </div>
        <Link to="/">
          <Button
            disabled={false}
            className="sm:w-96 w-full"
            text="Prijavi se na nalog"
          />
        </Link>
      </div>
    </div>
  );
};
export default Login;
