import React, { useEffect, useState } from "react";
import { CheckHeading, ReplaceHeadingStarts } from "../helper";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReactMarkdown from "react-markdown";

const Answers = ({ ans, totalResult, index, type }) => {
  const [isHeading, setIsHeading] = useState(false);
  const [answer, setAnswer] = useState(ans);

  useEffect(() => {
    if (CheckHeading(ans)) {
      setIsHeading(true);
      setAnswer(ReplaceHeadingStarts(ans));
    }
  }, []);

  const renderer = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          {...props}
          language={match[1]}
          style={dark}
          PreTag="div"
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code {...props} className={className}>
          {children}
        </code>
      );
    },

    h1({ children }) {
      return <h1 className="text-xl font-bold text-white pt-3">{children}</h1>;
    },
    h2({ children }) {
      return (
        <h2 className="text-lg font-semibold text-white pt-2">{children}</h2>
      );
    },
    p({ children }) {
      return <p className="text-white leading-relaxed py-1">{children}</p>;
    },
  };

  return (
    <>
      {(index === 0 && totalResult > 1) || isHeading ? (
        <h2 className="pt-2 text-lg font-semibold text-white">{answer}</h2>
      ) : (
        <div className={type === "q" ? "pl-1" : "pl-5"}>
          <ReactMarkdown components={renderer}>{ans}</ReactMarkdown>
        </div>
      )}
    </>
  );
};

export default Answers;
