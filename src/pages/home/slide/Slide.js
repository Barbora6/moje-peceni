import "./Slide.css";
import { SlideItem } from "./SlideItem";
import { useEffect, useState } from "react";
import { useAppContext } from "../../../context/AppContext";
import { Box } from "@mui/material";
import { Search } from "../../recipe/Search";

export const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { dataCategories } = useAppContext();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === dataCategories.length - 1 ? 0 : prev + 1
      );
    }, 8000);

    return () => clearInterval(intervalId);
  }, [dataCategories.length]);

  return (
    <Box position="relative" height="calc(100vh - 64px)">
      {dataCategories.map((item, index) => {
        return (
          <SlideItem
            key={item.id}
            {...item}
            isVisible={index === currentSlide}
          />
        );
      })}
      <Search />
    </Box>
  );
};
