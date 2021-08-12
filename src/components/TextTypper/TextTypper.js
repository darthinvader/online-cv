import { useCallback, useEffect, useState } from "react";

const TextTypper = ({ text, fixedTimer, timerMultiplier = 150 }) => {
  const [typedText, setTypedText] = useState("");

  const typer = useCallback(() => {
    const typing = (currentIndex) => {
      console.log("I run");
      const typedText = text.substring(0, currentIndex);
      setTypedText(typedText);
    };
    for (let i = 0; i <= text.length; i++) {
      if (fixedTimer) {
        setTimeout(() => typing(i), fixedTimer);
      } else {
        setTimeout(() => typing(i), i * timerMultiplier);
      }
    }
  }, [text, fixedTimer, timerMultiplier]);

  useEffect(typer, [typer]);

  return typedText;
};

export default TextTypper;
