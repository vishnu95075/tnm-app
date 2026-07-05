import {
  Dialog,
  Box,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import type { Story } from "../../data/story.data";

interface Props {
  open: boolean;
  story?: Story;
  onClose: () => void;
}

export default function StoryViewer({
  open,
  story,
  onClose,
}: Props) {
  if (!story) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
    >
      <Box position="relative">
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 10,
            top: 10,
            color: "white",
            zIndex: 10,
          }}
        >
          <CloseIcon />
        </IconButton>

        {story.type === "image" ? (
          <img
            src={story.image}
            alt={story.username}
            style={{
              width: "100%",
              height: "80vh",
              objectFit: "cover",
            }}
          />
        ) : (
          <video
            src={story.image}
            controls={false}
            autoPlay
            playsInline
            style={{
              width: "100%",
              height: "80vh",
              objectFit: "cover",
            }}
          />
        )}
      </Box>
    </Dialog>
  );
}