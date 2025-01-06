import "./Slide.css";
import SlideItem from "./SlideItem";
import { useEffect, useState } from "react";
import { useAppContext } from "../../../context/AppContext";

export const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { dataCategories } = useAppContext();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === dataCategories.length - 1 ? 0 : prev + 1
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, [dataCategories.length]);

  return (
    <>
      {dataCategories.map((item, index) => {
        return (
          <SlideItem
            key={item.id}
            {...item}
            isVisible={index === currentSlide}
          />
        );
      })}
    </>
  );
};
