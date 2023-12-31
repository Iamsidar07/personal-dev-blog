"use client";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { BsCheck2 } from "react-icons/bs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
const Code = ({ value }: any) => {
  const [isCopied, setIsCopied] = useState(false);
  if (!value || !value.code) {
    return null;
  }
  const { language, code } = value;
  return (
    <div className="relative group ">
      <SyntaxHighlighter
        language={language === "sh" ? "bash" : language ?? "text"}
        wrapLines
        customStyle={{ borderRadius: 5, backgroundColor: "#01192D" }}
        style={coldarkDark}
        showLineNumbers
      >
        {code}
      </SyntaxHighlighter>
      <div
        className={`absolute top-3 right-3 flex cursor-pointer p-1 items-center justify-center rounded ${
          isCopied ? "bg-green-900" : "bg-gray-700 hover:bg-gray-600"
        }`}
        onClick={() => {
          navigator.clipboard.writeText(code);
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 1000);
        }}
      >
        {isCopied ? (
          <BsCheck2 size={15} className="w-6 h-6 text-green-400" />
        ) : (
          <IoCopyOutline size={15} className="w-6 h-6 text-white" />
        )}
      </div>
    </div>
  );
};

export default Code;
