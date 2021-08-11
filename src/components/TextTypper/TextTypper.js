import { useCallback, useEffect, useState } from "react";

const TextTypper = ({ text }) => {
  const [typedText, setTypedText] = useState("");

  const typer = useCallback(() => {
    const typing = (currentIndex) => {
      console.log("I run");
      const typedText = text.substring(0, currentIndex);
      setTypedText(typedText);
    };
    for (let i = 0; i <= text.length; i++) setTimeout(() => typing(i), i * 150);
  }, [text]);

  useEffect(typer, [typer]);

  return typedText;
};

export default TextTypper;
