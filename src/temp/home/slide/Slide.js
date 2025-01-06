import "./Slide.css";
import SlideItem from "./SlideItem";
import { useEffect, useState } from "react";
import { useAppContext } from "../../../context/AppContext";

export const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { dataCategories } = useAppContext();

  // let current = 1;

  // const slideshow = () => {
  //     if(current > Slider.length){
  //         current = 1
  //     } else if (current === 0) {
  //         current = Slider.length
  //     }

  // dataSlider.forEach(slide => {
  //     if(slide[1].split('-')[1]*1 === current)
  // });

  // current++;
  // };

  // slideshow()

  // setInterval(() => {
  //     slideshow()
  // },1000);

  // const handleClick = () => {
  //   setCurrentSlide(currentSlide + 1);
  // };

  useEffect(() => {
    const intervalId = setInterval(() => {
      //assign interval to a variable to clear it.
      /* na konci pole jdi na první položku znova */

      setCurrentSlide((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(intervalId); //This is important
  }, []);

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