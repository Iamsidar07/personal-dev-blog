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
    <div className="relative">
      <SyntaxHighlighter
        language={language === "sh" ? "bash" : language ?? "text"}
        showLineNumbers
        wrapLines
        wrapLongLines
        customStyle={{ borderRadius: 10 }}
        style={coldarkDark}
      >
        {code}
      </SyntaxHighlighter>
      <div
        className={`absolute top-4 right-4 cursor-pointer w-8 h-8 flex items-center justify-center rounded ${
          isCopied ? "bg-green-900" : "bg-slate-800 "
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
          <BsCheck2 size={15} className="w-4 h-4 text-green-400" />
        ) : (
          <IoCopyOutline size={15} className="w-4 h-4 text-white" />
        )}
      </div>
    </div>
  );
};

export default Code;
