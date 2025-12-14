import { useEffect, useRef, useState } from "react";

const CODE_LETTERS = "&#*+%?£@§$";

export default function AnimatedRandomText({ messages }) {
  const msgs = Array.isArray(messages) ? messages : [messages];

  const [text, setText] = useState("");

  const messageIndex = useRef(0);
  const currentLength = useRef(0);
  const fadeBuffer = useRef(null);
  const isSingleMessage = msgs.length === 1;
  const containerRef = useRef(null);
  const hasStarted = useRef(false);

  const generateRandomString = (length) => {
    let result = "";
    while (result.length < length) {
      result += CODE_LETTERS.charAt(
        Math.floor(Math.random() * CODE_LETTERS.length)
      );
    }
    return result;
  };

  const animateIn = () => {
    const message = msgs[messageIndex.current];

    if (currentLength.current < message.length) {
      currentLength.current += 2;
      if (currentLength.current > message.length) currentLength.current = message.length;

      setText(generateRandomString(currentLength.current));
      setTimeout(animateIn, 20);
    } else {
      setTimeout(animateFadeBuffer, 20);
    }
  };

  const animateFadeBuffer = () => {
    const message = msgs[messageIndex.current];

    if (!fadeBuffer.current) {
      fadeBuffer.current = message.split("").map((char) => ({
        c: Math.floor(Math.random() * 12) + 1,
        l: char
      }));
    }

    let doCycles = false;
    let output = "";

    fadeBuffer.current.forEach((fader) => {
      if (fader.c > 0) {
        doCycles = true;
        fader.c--;
        output += CODE_LETTERS.charAt(
          Math.floor(Math.random() * CODE_LETTERS.length)
        );
      } else {
        output += fader.l;
      }
    });

    setText(output);

    if (doCycles) {
      setTimeout(animateFadeBuffer, 50);
    } else if (!isSingleMessage) {
      setTimeout(cycleText, 2000);
    }
  };

  const cycleText = () => {
    messageIndex.current = (messageIndex.current + 1) % msgs.length;
    currentLength.current = 0;
    fadeBuffer.current = null;
    setText("");
    setTimeout(animateIn, 700);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted.current) {
            hasStarted.current = true;
            setTimeout(animateIn, 150); // Espera 2s antes de iniciar
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={containerRef} className="w-full text-center tracking-widest">
      {text}
    </div>
  );
}
