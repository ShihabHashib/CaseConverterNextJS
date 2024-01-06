"use client";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const FrontPage = () => {
  const [caseinput, setCaseinput] = useState("");
  const [activeCase, setActiveCase] = useState("");

  // Copy Function
  const [isCoped, setIsCopied] = useState(false);
  const [isButtonText, setButtonText] = useState("Copy");

  const handlerCopy = () => {
    setButtonText("Copied!");
    setTimeout(() => {
      setButtonText("Copy");
    }, 5000);
    setActiveCase("copied");
  };

  const handlerUpperCase = () => {
    setCaseinput(caseinput.toUpperCase());
    setActiveCase("uppercase");
  };

  const handlerLowerCase = () => {
    setCaseinput(caseinput.toLowerCase());
    setActiveCase("lowercase");
  };

  const handlerCamel = () => {
    setCaseinput(
      caseinput
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
          return index === 0 ? word.toLowerCase() : word.toUpperCase();
        })
        .replace(/\s+/g, "")
    );
    setActiveCase("camelcase");
  };

  const handlerCapitalized = () => {
    setCaseinput(
      caseinput
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    );
    setActiveCase("capitalize");
  };

  return (
    <div className=" min-h-screen flex justify-center items-center">
      <div className="max-w-3xl mx-auto mt-10 p-4 rounded-md">
        <h1 className="text-3xl font-bold mb-3 text-center">CaseConverter</h1>
        <h2 className="text-center pb-4">
          Need to make text uppercase or lowsercase quickly? You are at the
          right place.
        </h2>
        <textarea
          className="w-full h-40 p-4 rounded-md  mb-4 outline-none bg-[#18214C] border-0 resize-none"
          placeholder="Enter your text here..."
          value={caseinput}
          onChange={(e) => setCaseinput(e.target.value)}
        ></textarea>
        <div className="grid gap-3 grid-tem-autofit mb-20">
          <button
            className={`${
              activeCase === "lowercase"
                ? "bg-pink-600 text-white"
                : "bg-case-blue"
            }  rounded-sm  py-1.5 hover:bg-pink-600 duration-300`}
            onClick={handlerLowerCase}
          >
            LowerCase
          </button>
          <button
            className={`${
              activeCase === "uppercase"
                ? "bg-pink-600 text-white"
                : "bg-case-blue"
            }  rounded-sm  py-1.5 hover:bg-pink-600 duration-300`}
            onClick={handlerUpperCase}
          >
            UpperCase
          </button>
          <button
            className={`${
              activeCase === "capitalize"
                ? "bg-pink-600 text-white"
                : "bg-case-blue"
            }  rounded-sm  py-1.5 hover:bg-pink-600 duration-300`}
            onClick={handlerCapitalized}
          >
            Capitalize
          </button>
          <button
            className={`${
              activeCase === "camelcase"
                ? "bg-pink-600 text-white"
                : "bg-case-blue"
            }  rounded-sm  py-1.5 hover:bg-pink-600 duration-300`}
            onClick={handlerCamel}
          >
            Camel Case
          </button>
          <CopyToClipboard text={caseinput} onCopy={() => setIsCopied(true)}>
            <button
              className={`${
                activeCase === "copied"
                  ? "bg-pink-600 text-white"
                  : "bg-case-blue"
              }  rounded-sm  py-1.5 hover:bg-pink-600 duration-300`}
              onClick={handlerCopy}
            >
              {isButtonText}
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
