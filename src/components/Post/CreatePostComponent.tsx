import React, { useId, useRef, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Dialog,
  DialogContent,
  Divider,
  IconButton,
  LinearProgress,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import {
  AddPhotoAlternateRounded,
  CloseRounded,
  CloudUploadRounded,
  DeleteOutlineRounded,
  LocationOnOutlined,
  PeopleOutlineRounded,
  PublicRounded,
  TagRounded,
  VideoLibraryRounded,
  ArrowBackRounded,
  ArrowForwardRounded,
} from "@mui/icons-material";
import { createPost } from "../../api/postApi";

type MediaType = "image" | "video";

interface MediaFile {
  id: string;
  file: File;
  url: string;
  type: MediaType;
}

interface CreatePostProps {
  userId: any;
  open: boolean;
  onClose: () => void;
}

const CreatePostComponent: React.FC<CreatePostProps> = ({ userId: id, open, onClose }) => {

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [media, setMedia] = useState<MediaFile[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const [caption, setCaption] = useState("");
  const [location, setLocation] = useState("");
  const [tagPeople, setTagPeople] = useState("");
  const [audience, setAudience] = useState("Everyone");

  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleFiles = (files: FileList | File[]) => {
    const selectedFiles = Array.from(files);

    const validFiles = selectedFiles.filter(
      (file) =>
        file.type.startsWith("image/") ||
        file.type.startsWith("video/")
    );

    const newMedia: MediaFile[] = validFiles.map((file) => ({
      id: `${file.name}-${file.lastModified}-${Math.random()}`,
      file,
      url: URL.createObjectURL(file),
      type: file.type.startsWith("video/") ? "video" : "image",
    }));

    setMedia((prev) => [...prev, ...newMedia]);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files) {
      handleFiles(event.target.files);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragActive(false);

    if (event.dataTransfer.files) {
      handleFiles(event.dataTransfer.files);
    }
  };

  const removeMedia = (id: string) => {
    setMedia((prev) => {
      const updated = prev.filter((item) => item.id !== id);

      if (activeIndex >= updated.length) {
        setActiveIndex(Math.max(0, updated.length - 1));
      }

      return updated;
    });
  };

  const handlePublish = async () => {
    if (!media.length) return;

    setUploading(true);

    // -----------------------------------------
    // Replace this with your API call
    // -----------------------------------------

    const formData = new FormData();

    media.forEach((item) => {
      formData.append("files", item.file);
    });

    formData.append("caption", caption);
    formData.append("location", location);
    formData.append("tagPeople", tagPeople);
    formData.append("audience", audience);

    console.log("Uploading:", {
      media,
      caption,
      location,
      tagPeople,
      audience,
    });

    // Example:
    //
    // await createPost(formData);

    const requestData = createPost(id,caption,formData);
    console.log("Success Message is: ", requestData);
    setTimeout(() => {
      setUploading(false);

      setMedia([]);
      setCaption("");
      setLocation("");
      setTagPeople("");
      setAudience("Everyone");

      onClose();
    }, 1500);
  };

  const activeMedia = media[activeIndex];

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 5,
          overflow: "hidden",
          background:
            "linear-gradient(145deg, #ffffff 0%, #fafafa 100%)",
        },
      }}
    >
      {/* HEADER */}

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        px={3}
        py={2}
      >
        <Box>
          <Typography
            fontSize={20}
            fontWeight={800}
          >
            Create a post
          </Typography>

          <Typography
            fontSize={12}
            color="text.secondary"
          >
            Share your moment with the world
          </Typography>
        </Box>

        <IconButton onClick={onClose}>
          <CloseRounded />
        </IconButton>
      </Stack>

      <Divider />

      <DialogContent sx={{ p: 0 }}>
        {!media.length ? (
          /* ==================================
             UPLOAD SCREEN
          ================================== */

          <Box
            onDragEnter={(e) => {
              e.preventDefault();
              setDragActive(true);
            }}
            onDragOver={(e) => {
              e.preventDefault();
              setDragActive(true);
            }}
            onDragLeave={() => setDragActive(false)}
            onDrop={handleDrop}
            onClick={() => inputRef.current?.click()}
            sx={{
              minHeight: 430,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              m: 3,
              borderRadius: 4,
              border: "2px dashed",
              borderColor: dragActive
                ? "primary.main"
                : "divider",
              backgroundColor: dragActive
                ? "action.hover"
                : "#f8f9fb",
              transition: "all .25s ease",

              "&:hover": {
                backgroundColor: "#f1f3f6",
                borderColor: "primary.main",
              },
            }}
          >
            <Stack
              alignItems="center"
              spacing={2}
            >
              <Box
                sx={{
                  width: 90,
                  height: 90,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "linear-gradient(135deg,#7c3aed,#ec4899,#f97316)",
                  color: "white",
                  boxShadow:
                    "0 15px 35px rgba(124,58,237,.25)",
                }}
              >
                <CloudUploadRounded fontSize="large" />
              </Box>

              <Typography
                fontSize={22}
                fontWeight={800}
              >
                Drag photos or videos here
              </Typography>

              <Typography
                color="text.secondary"
                textAlign="center"
              >
                Upload multiple images or videos
                <br />
                and create your perfect post
              </Typography>

              <Button
                variant="contained"
                startIcon={<AddPhotoAlternateRounded />}
                sx={{
                  borderRadius: 3,
                  px: 4,
                  py: 1.2,
                  textTransform: "none",
                  fontWeight: 700,
                }}
              >
                Choose from computer
              </Button>

              <Typography
                fontSize={12}
                color="text.secondary"
              >
                JPG, PNG, WEBP, MP4 supported
              </Typography>
            </Stack>
          </Box>
        ) : (
          /* ==================================
             POST COMPOSER
          ================================== */

          <Stack
            direction={{ xs: "column", md: "row" }}
            minHeight={520}
          >
            {/* MEDIA PREVIEW */}

            <Box
              sx={{
                width: { xs: "100%", md: "55%" },
                minHeight: 520,
                background: "#111",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {activeMedia?.type === "image" ? (
                <Box
                  component="img"
                  src={activeMedia.url}
                  sx={{
                    maxWidth: "100%",
                    maxHeight: 500,
                    objectFit: "contain",
                  }}
                />
              ) : (
                <Box
                  component="video"
                  src={activeMedia.url}
                  controls
                  sx={{
                    maxWidth: "100%",
                    maxHeight: 500,
                  }}
                />
              )}

              {/* PREVIOUS */}

              {activeIndex > 0 && (
                <IconButton
                  onClick={() =>
                    setActiveIndex((prev) => prev - 1)
                  }
                  sx={{
                    position: "absolute",
                    left: 15,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "rgba(255,255,255,.9)",
                  }}
                >
                  <ArrowBackRounded />
                </IconButton>
              )}

              {/* NEXT */}

              {activeIndex < media.length - 1 && (
                <IconButton
                  onClick={() =>
                    setActiveIndex((prev) => prev + 1)
                  }
                  sx={{
                    position: "absolute",
                    right: 15,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "rgba(255,255,255,.9)",
                  }}
                >
                  <ArrowForwardRounded />
                </IconButton>
              )}

              {/* MEDIA COUNTER */}

              <Chip
                label={`${activeIndex + 1} / ${media.length}`}
                sx={{
                  position: "absolute",
                  top: 15,
                  right: 15,
                  color: "white",
                  background: "rgba(0,0,0,.6)",
                  fontWeight: 700,
                }}
              />

              {/* THUMBNAILS */}

              <Stack
                direction="row"
                spacing={1}
                sx={{
                  position: "absolute",
                  bottom: 15,
                  left: 15,
                  right: 15,
                  overflowX: "auto",
                }}
              >
                {media.map((item, index) => (
                  <Box
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    sx={{
                      width: 55,
                      height: 55,
                      flexShrink: 0,
                      borderRadius: 2,
                      overflow: "hidden",
                      cursor: "pointer",
                      border:
                        index === activeIndex
                          ? "3px solid white"
                          : "2px solid transparent",
                      position: "relative",
                    }}
                  >
                    {item.type === "image" ? (
                      <Box
                        component="img"
                        src={item.url}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <Box
                        component="video"
                        src={item.url}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    )}

                    {item.type === "video" && (
                      <VideoLibraryRounded
                        sx={{
                          position: "absolute",
                          top: 3,
                          right: 3,
                          color: "white",
                          fontSize: 16,
                        }}
                      />
                    )}
                  </Box>
                ))}
              </Stack>
            </Box>

            {/* DETAILS */}

            <Stack
              sx={{
                width: { xs: "100%", md: "45%" },
                p: 3,
              }}
              spacing={2.5}
            >
              {/* USER */}

              <Stack
                direction="row"
                alignItems="center"
                spacing={1.5}
              >
                <Avatar
                  sx={{
                    width: 42,
                    height: 42,
                  }}
                  src="https://i.pravatar.cc/100?img=12"
                />

                <Box>
                  <Typography fontWeight={700}>
                    your_username
                  </Typography>

                  <Typography
                    fontSize={12}
                    color="text.secondary"
                  >
                    Create something amazing
                  </Typography>
                </Box>
              </Stack>

              {/* CAPTION */}

              <TextField
                multiline
                minRows={5}
                maxRows={8}
                value={caption}
                onChange={(e) =>
                  setCaption(e.target.value)
                }
                placeholder="Write a caption..."
                fullWidth
                inputProps={{
                  maxLength: 2200,
                }}
              />

              <Typography
                fontSize={11}
                color="text.secondary"
                textAlign="right"
              >
                {caption.length}/2200
              </Typography>

              {/* LOCATION */}

              <TextField
                value={location}
                onChange={(e) =>
                  setLocation(e.target.value)
                }
                placeholder="Add location"
                fullWidth
                size="small"
                InputProps={{
                  startAdornment: (
                    <LocationOnOutlined
                      sx={{
                        mr: 1,
                        color: "text.secondary",
                      }}
                    />
                  ),
                }}
              />

              {/* TAG PEOPLE */}

              <TextField
                value={tagPeople}
                onChange={(e) =>
                  setTagPeople(e.target.value)
                }
                placeholder="Tag people"
                fullWidth
                size="small"
                InputProps={{
                  startAdornment: (
                    <TagRounded
                      sx={{
                        mr: 1,
                        color: "text.secondary",
                      }}
                    />
                  ),
                }}
              />

              {/* AUDIENCE */}

              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
              >
                <PeopleOutlineRounded color="action" />

                <Typography
                  fontSize={14}
                  fontWeight={600}
                >
                  Audience
                </Typography>

                <Box flex={1} />

                <Select
                  size="small"
                  value={audience}
                  onChange={(e) =>
                    setAudience(e.target.value)
                  }
                  sx={{
                    minWidth: 120,
                  }}
                >
                  <MenuItem value="Everyone">
                    <Stack
                      direction="row"
                      spacing={1}
                      alignItems="center"
                    >
                      <PublicRounded fontSize="small" />
                      <span>Everyone</span>
                    </Stack>
                  </MenuItem>

                  <MenuItem value="Followers">
                    Followers
                  </MenuItem>

                  <MenuItem value="Close Friends">
                    Close Friends
                  </MenuItem>
                </Select>
              </Stack>

              <Divider />

              {/* ACTIONS */}

              <Stack
                direction="row"
                spacing={1}
              >
                <Button
                  variant="outlined"
                  color="inherit"
                  fullWidth
                  onClick={() =>
                    inputRef.current?.click()
                  }
                  startIcon={<AddPhotoAlternateRounded />}
                  sx={{
                    borderRadius: 3,
                    textTransform: "none",
                  }}
                >
                  Add more
                </Button>

                <Button
                  variant="contained"
                  fullWidth
                  onClick={handlePublish}
                  disabled={uploading}
                  sx={{
                    borderRadius: 3,
                    textTransform: "none",
                    fontWeight: 700,
                    background:
                      "linear-gradient(135deg,#7c3aed,#ec4899)",
                  }}
                >
                  {uploading
                    ? "Publishing..."
                    : "Publish"}
                </Button>
              </Stack>

              {uploading && (
                <LinearProgress
                  sx={{
                    borderRadius: 10,
                  }}
                />
              )}
            </Stack>
          </Stack>
        )}
      </DialogContent>

      {/* HIDDEN INPUT */}

      <input
        ref={inputRef}
        type="file"
        hidden
        multiple
        accept="image/*,video/*"
        onChange={handleInputChange}
      />
    </Dialog>
  );
};

export default CreatePostComponent;