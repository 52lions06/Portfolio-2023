"use client";
import { useEffect, useRef } from "react";
import styles from "./page.module.css";

export default function Home() {
  const blockRef = useRef<HTMLHeadingElement | null>(null);
  const textRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const block = blockRef.current;
    const text = textRef.current;

    let blockWidth = 0;
    let blockHeight = 0;
    let textWidth = 0;
    let textHeight = 0;

    let x = 0;
    let y = 0;
    let xDirection = 1; // 1 for right, -1 for left
    let yDirection = 1; // 1 for down, -1 for up
    let isRotated = false;

    const animateText = () => {
      if (block && text) {
        blockWidth = block.offsetWidth;
        blockHeight = block.offsetHeight;
        textWidth = text.offsetWidth;
        textHeight = text.offsetHeight;
      }

      // Move the text in the x and y direction
      x += xDirection;
      y += yDirection;

      // Rotate and change direction when hitting the borders
      if (x > blockWidth - textWidth || x < 0) {
        xDirection *= -1;
        if (text) {
          // Rotate 90 degrees if not already rotated, otherwise rotate to 0 degrees
          text.style.transform = isRotated ? "rotate(0deg)" : "rotate(0deg)";
          isRotated = !isRotated;
        }
      }
      if (y > blockHeight - textHeight || y < 0) {
        yDirection *= -1;
        if (text) {
          // Rotate 180 degrees if not already rotated, otherwise rotate to 0 degrees
          text.style.transform = isRotated ? "rotate(0deg)" : "rotate(0deg)";
          isRotated = !isRotated;
        }
      }

      // Update the position of the text
      if (text) {
        text.style.left = `${x}px`;
        text.style.top = `${y}px`;
      }

      requestAnimationFrame(animateText);
    };

    animateText();
  }, []);

  const words =
    "Just your normal cool dad who likes to hang with his kid, take care of the wife, play video games, read books, debate, drink beer and whiskey, and....stuff.. welcome 😎";
  const wordArray = words.split(" ");

  return (
    <>
      <main>
        <section>
          <h1 className={styles.block} ref={blockRef}>
            {" "}
            <span className={styles.title} ref={textRef}>
              Welcome to Will's World
            </span>
          </h1>
        </section>
        <section className={styles.mainContent}>
          <h2>
            {wordArray.map((word, index) => (
              <span
                key={index}
                className={styles.word}
                // You will want to slightly adjust the delay for spaces
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {word}&nbsp;
              </span>
            ))}
          </h2>
        </section>
        <section></section>
      </main>
    </>
  );
}
