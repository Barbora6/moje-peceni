import { Typography, Box } from "@mui/material";

export const SlideItem = ({ image, title, description, isVisible }) => {
  return (
    <Box
      position="absolute"
      height={800}
      sx={{
        position: "absolute",
        top: "0px",
        bottom: "0px",
        left: "0px",
        right: "0px",
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? "visible" : "hidden",
        transition: "opacity 0.3s, visibility 0.3s"
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "0px",
          bottom: "0px",
          left: "0px",
          right: "0px",
          backgroundColor: "rgba(0,0,0,0.1)",
          zIndex: 1
        }}
      />
      <div className="slide-img-wrapper">
        <img src={image} alt="" loading="lazy" />
      </div>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          color: "white",
          zIndex: 2
        }}
      >
        <Typography
          variant="h2"
          fontSize="120px"
          fontWeight={400}
          letterSpacing={9}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};
