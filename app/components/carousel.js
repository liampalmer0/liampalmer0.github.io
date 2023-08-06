"use client";
import { useRef, useEffect, useState } from "react";

export default function Carousel(props) {
  const [leftHandler, setLeftHandler] = useState(null);
  const [rightHandler, setRightHandler] = useState(null);
  const carousel = useRef(null);
  const index = useRef(1);
  const locked = useRef(false);
  const slideWidth = 100;
  const assetsDir = "/assets/img/projects/";

  useEffect(() => {
    if (props.images.length > 1) {
      const slideCount = props.images.length;
      const checkForLoop = () => {
        carousel.current.classList.remove("sliding");
        if (index.current <= 0) {
          carousel.current.style.left = `${-slideWidth * slideCount}%`;
          index.current = slideCount;
        } else if (index.current > slideCount) {
          carousel.current.style.left = `${-slideWidth}%`;
          index.current = 1;
        }
        locked.current = false;
      };
      const moveSlide = (dir) => {
        carousel.current.classList.add("sliding");
        if (!locked.current) {
          index.current += dir * 1;
          carousel.current.style.left = `${-index.current * slideWidth}%`;
          locked.current = true;
        }
      };

      setLeftHandler(() => () => moveSlide(-1));
      setRightHandler(() => () => moveSlide(1));

      carousel.current.addEventListener("transitionend", checkForLoop);

      return carousel.current.removeEventListener("transitioned", checkForLoop);
    }
  }, [props.images]);

  const createSlideImg = (src, alt, key) => (
    <img alt={alt} className="slide" src={assetsDir + src} key={key} />
  );
  const createCarousel = () => (
    <>
      <div className="rail" ref={carousel}>
        {createSlideImg(
          props.images[props.images.length - 1][0],
          props.images[props.images.length - 1][1],
          -1
        )}
        {props.images.map((img, i) => createSlideImg(img[0], img[1], i))}
        {createSlideImg(props.images[0][0], props.images[0][1], props.images.length)}
      </div>
      <div className="controls">
        <button className="btn-left" onClick={leftHandler}>
          &larr;
        </button>
        <button className="btn-right" onClick={rightHandler}>
          &rarr;
        </button>
      </div>
    </>
  );

  return props.images.length > 1 ? (
    createCarousel()
  ) : (
    <div className="rail single">{createSlideImg(props.images[0][0], props.images[0][1])}</div>
  );
}
