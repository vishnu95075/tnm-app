import { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  MobileStepper,
  Paper,
  useTheme,
} from "@mui/material";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface ImageCarouselProps {
  images: string[];
  height?: number | string;
  autoPlay?: boolean;
  interval?: number;
}

export default function ImageCarousel({
  images,
  height = 400,
  autoPlay = true,
  interval = 3000,
}: ImageCarouselProps) {
  const theme = useTheme();

  const [activeStep, setActiveStep] = useState(0);

  const maxSteps = images.length;

  // Auto play
  useEffect(() => {
    if (!autoPlay || maxSteps <= 1) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % maxSteps);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, maxSteps]);

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prev) => (prev - 1 + maxSteps) % maxSteps);
  };

  if (!images.length) {
    return null;
  }

  return (
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        overflow: "hidden",
        borderRadius: 2,
      }}
    >
      {/* Image */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height,
          backgroundColor: "#eee",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={images[activeStep]}
          alt={`Slide ${activeStep + 1}`}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* Previous Button */}
        {maxSteps > 1 && (
          <IconButton
            onClick={handleBack}
            sx={{
              position: "absolute",
              left: 12,
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(255,255,255,0.8)",

              "&:hover": {
                backgroundColor: "white",
              },
            }}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRightIcon />
            ) : (
              <KeyboardArrowLeftIcon />
            )}
          </IconButton>
        )}

        {/* Next Button */}
        {maxSteps > 1 && (
          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: 12,
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(255,255,255,0.8)",

              "&:hover": {
                backgroundColor: "white",
              },
            }}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeftIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </IconButton>
        )}
      </Box>

      {/* Dots */}
      {maxSteps > 1 && (
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={null}
          backButton={null}
          sx={{
            justifyContent: "center",
            backgroundColor: "white",
          }}
        />
      )}
    </Paper>
  );
}