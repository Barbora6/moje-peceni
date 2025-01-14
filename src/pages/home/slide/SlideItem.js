import { Typography, Box } from "@mui/material";

const SlideItem = ({ image, title, paragraph, isVisible }) => {
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
        <img src={`/pictures_slides/${image}`} alt="" loading="lazy" />
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
        {/* <Typography>{paragraph}</Typography> */}
      </Box>
    </Box>
  );
};

export default SlideItem;
