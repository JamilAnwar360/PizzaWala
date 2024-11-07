import { LockKeyhole, Mail } from "lucide-react";
import React, { ChangeEvent, useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { LoginInputState } from "../schema/userSchema";

const Login = () => {
  const [input, setInput] = useState<LoginInputState>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const validateForm = () => {
    const errors: { email?: string; password?: string } = {};
    if (!input.email.includes("@")) {
      errors.email = "Invalid email format";
    }
    if (input.password.length < 6) {
      errors.password = "Password should be at least 6 characters";
    }
    return errors;
  };

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const LoginSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log(input);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center dark:bg-gray-900">
      <div className="grid gap-8">
        <div id="back-div" className="bg-orange rounded-[26px] m-4">
          <div className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2">
            <h1 className="pt-8 pb-6 font-bold dark:text-gray-400 text-5xl text-center cursor-default">
              PizzaWala
            </h1>
            <form onSubmit={LoginSubmitHandler} className="space-y-4">
              <div className="relative">
                <Mail className="absolute inset-y-3 left-3 text-gray-400" />
                <input
                  id="email"
                  aria-label="Email"
                  className="border p-3 pl-10 dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                  type="email"
                  value={input.email}
                  onChange={changeEventHandler}
                  placeholder="Email"
                  name="email"
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div className="relative">
                <LockKeyhole className="absolute inset-y-3 left-3 text-gray-400" />
                <input
                  id="password"
                  aria-label="Password"
                  className="border p-3 pl-10 dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                  type="password"
                  value={input.password}
                  onChange={changeEventHandler}
                  placeholder="Password"
                  name="password"
                  required
                  autoComplete="off"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>
              <a
                className="group text-blue-400 transition-all duration-100 ease-in-out"
                href="#"
              >
                <Link
                  to="/forget-password"
                  className="ml-1 text-blue-400 group"
                >
                  <span className="bg-left-bottom bg-gradient-to-r text-sm from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Forget your password?
                  </span>
                </Link>
              </a>
              <button
                className="bg-orange hover:bg-hoverOrange shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 transition duration-300 ease-in-out"
                type="submit"
              >
                LOG IN
              </button>
            </form>
            <div className="flex flex-col mt-4 items-center text-sm">
              <h3 className="dark:text-gray-300">
                Don't have an account?
                <Link to="/signup" className="ml-1 text-blue-400 group">
                  <span className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Sign Up
                  </span>
                </Link>
              </h3>
            </div>
            <div
              id="third-party-auth"
              className="flex items-center justify-center mt-5"
            >
              <button className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg">
                <img
                  className="max-w-[25px]"
                  src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                  alt="Google"
                />
              </button>
              <button className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg">
                <img
                  className="max-w-[25px]"
                  src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/"
                  alt="Facebook"
                />
              </button>
            </div>
            <div className="text-gray-500 mt-4 text-center text-sm">
              <p className="cursor-default">
                By signing in, you agree to our
                <a className="ml-1 text-blue-400 group" href="#">
                  <span className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Terms
                  </span>
                </a>
                and
                <a className="ml-1 text-blue-400 group" href="#">
                  <span className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Privacy Policy
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
