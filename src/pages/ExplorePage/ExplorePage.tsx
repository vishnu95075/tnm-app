import { useMemo, useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Chip,
  Container,
  IconButton,
  InputAdornment,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  TextField,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

type Post = {
  id: number;
  title: string;
  creator: string;
  category: string;
  image: string;
  likes: number;
  height: number;
};

const posts: Post[] = [
  {
    id: 1,
    title: "Golden hour in the mountains",
    creator: "alex.morgan",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700",
    likes: 2400,
    height: 340,
  },
  {
    id: 2,
    title: "Slow mornings",
    creator: "studio.luna",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=700",
    likes: 1800,
    height: 240,
  },
  {
    id: 3,
    title: "Urban essentials",
    creator: "noah.jpg",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700",
    likes: 3200,
    height: 390,
  },
  {
    id: 4,
    title: "Ocean state of mind",
    creator: "wander.with.me",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700",
    likes: 4100,
    height: 300,
  },
  {
    id: 5,
    title: "Everyday moments",
    creator: "mia.creates",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=700",
    likes: 980,
    height: 350,
  },
  {
    id: 6,
    title: "Modern architecture",
    creator: "frame.studio",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=700",
    likes: 5600,
    height: 260,
  },
  {
    id: 7,
    title: "A little city magic",
    creator: "alex.morgan",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=700",
    likes: 1200,
    height: 320,
  },
  {
    id: 8,
    title: "Minimal details",
    creator: "studio.luna",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=700",
    likes: 2700,
    height: 280,
  },
  {
    id: 9,
    title: "Into the wild",
    creator: "wander.with.me",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=700",
    likes: 3700,
    height: 360,
  },
];

const categories = [
  "All",
  "Photography",
  "Travel",
  "Fashion",
  "Lifestyle",
];

export default function ExplorePage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [liked, setLiked] = useState<number[]>([]);

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  const filteredPosts = useMemo(() => {
    const search = query.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesCategory =
        category === "All" || post.category === category;

      const matchesSearch =
        !search ||
        `${post.title} ${post.creator} ${post.category}`
          .toLowerCase()
          .includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [query, category]);

  const toggleLike = (id: number) => {
    setLiked((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#101114",
        color: "#fff",
      }}
    >
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "rgba(16,17,20,0.88)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid #292a30",
        }}
      >
        <Toolbar sx={{ gap: 2 }}>
          <ExploreRoundedIcon
            sx={{ color: "#c084fc", fontSize: 30 }}
          />

          <Typography
            variant="h6"
            sx={{ fontWeight: 800, letterSpacing: "-1px" }}
          >
            discover<span style={{ color: "#c084fc" }}>.</span>
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Avatar
            sx={{
              width: 34,
              height: 34,
              bgcolor: "#7c3aed",
              fontSize: 14,
            }}
          >
            U
          </Avatar>
        </Toolbar>
      </AppBar>

      <Container maxWidth="xl" sx={{ py: { xs: 3, md: 6 } }}>
        <Box sx={{ maxWidth: 720, mx: "auto", mb: 5 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              letterSpacing: "-2px",
              fontSize: { xs: 32, md: 48 },
              mb: 1,
            }}
          >
            Find your next{" "}
            <Box component="span" sx={{ color: "#c084fc" }}>
              inspiration.
            </Box>
          </Typography>

          <Typography sx={{ color: "#9698a3", mb: 3 }}>
            Discover creators, places, and moments worth sharing.
          </Typography>

          <TextField
            fullWidth
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search creators, photos, places..."
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchRoundedIcon sx={{ color: "#a1a1aa" }} />
                  </InputAdornment>
                ),
                endAdornment: query ? (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Clear search"
                      onClick={() => setQuery("")}
                      sx={{ color: "#aaa" }}
                    >
                      <CloseRoundedIcon />
                    </IconButton>
                  </InputAdornment>
                ) : null,
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 4,
                bgcolor: "#1c1d22",
                color: "#fff",
                "& fieldset": { borderColor: "#303139" },
                "&:hover fieldset": { borderColor: "#8b5cf6" },
                "&.Mui-focused fieldset": {
                  borderColor: "#a855f7",
                },
              },
            }}
          />

          <Box
            sx={{
              display: "flex",
              gap: 1,
              mt: 2.5,
              overflowX: "auto",
              pb: 1,
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            {categories.map((item) => (
              <Chip
                key={item}
                label={item}
                clickable
                onClick={() => setCategory(item)}
                sx={{
                  flexShrink: 0,
                  color: category === item ? "#fff" : "#b8b8c2",
                  bgcolor:
                    category === item ? "#7c3aed" : "#202126",
                  border: "1px solid",
                  borderColor:
                    category === item ? "#a78bfa" : "#303139",
                  fontWeight: 600,
                  "&:hover": {
                    bgcolor:
                      category === item ? "#6d28d9" : "#303139",
                  },
                }}
              />
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Typography variant="h6" fontWeight={700}>
            Explore
          </Typography>

          <Typography variant="body2" sx={{ color: "#9698a3" }}>
            {filteredPosts.length} posts
          </Typography>
        </Box>

        {filteredPosts.length > 0 ? (
          <ImageList
            variant="masonry"
            cols={mobile ? 2 : 4}
            gap={mobile ? 10 : 16}
            sx={{ m: 0, overflow: "visible" }}
          >
            {filteredPosts.map((post) => {
              const isLiked = liked.includes(post.id);

              return (
                <ImageListItem
                  key={post.id}
                  sx={{
                    overflow: "hidden",
                    borderRadius: 3,
                    bgcolor: "#202126",
                    cursor: "pointer",
                    "&:hover .post-image": {
                      transform: "scale(1.05)",
                    },
                    "&:hover .post-overlay": {
                      opacity: 1,
                    },
                  }}
                >
                  <Box sx={{ position: "relative", overflow: "hidden" }}>
                    <Box
                      component="img"
                      className="post-image"
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      sx={{
                        display: "block",
                        width: "100%",
                        height: {
                          xs: post.height * 0.72,
                          sm: post.height,
                        },
                        objectFit: "cover",
                        transition: "transform 300ms ease",
                      }}
                    />

                    <Box
                      className="post-overlay"
                      sx={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        p: 1.5,
                        background:
                          "linear-gradient(180deg,rgba(0,0,0,.25),transparent 35%,rgba(0,0,0,.7))",
                        opacity: { xs: 1, md: 0 },
                        transition: "opacity 200ms ease",
                      }}
                    >
                      <Box sx={{ alignSelf: "flex-end" }}>
                        <IconButton
                          aria-label={
                            isLiked ? "Unlike post" : "Like post"
                          }
                          onClick={(event) => {
                            event.stopPropagation();
                            toggleLike(post.id);
                          }}
                          sx={{
                            bgcolor: "rgba(0,0,0,.4)",
                            color: isLiked ? "#fb7185" : "#fff",
                            "&:hover": {
                              bgcolor: "rgba(0,0,0,.65)",
                            },
                          }}
                        >
                          {isLiked ? (
                            <FavoriteRoundedIcon />
                          ) : (
                            <FavoriteBorderRoundedIcon />
                          )}
                        </IconButton>
                      </Box>

                      <Box>
                        <Typography
                          variant="subtitle2"
                          fontWeight={700}
                        >
                          {post.title}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: "#e4e4e7" }}
                        >
                          @{post.creator}
                        </Typography>
                        <Typography
                          variant="caption"
                          display="block"
                          sx={{ mt: 0.5 }}
                        >
                          ♥{" "}
                          {(
                            post.likes +
                            (isLiked ? 1 : 0)
                          ).toLocaleString()}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <ImageListItemBar
                    title={post.title}
                    subtitle={`@${post.creator}`}
                    sx={{
                      display: { xs: "flex", md: "none" },
                      position: "relative",
                      bgcolor: "#202126",
                      "& .MuiImageListItemBar-title": {
                        fontSize: 12,
                      },
                      "& .MuiImageListItemBar-subtitle": {
                        fontSize: 11,
                      },
                    }}
                  />
                </ImageListItem>
              );
            })}
          </ImageList>
        ) : (
          <Box sx={{ textAlign: "center", py: 10 }}>
            <SearchRoundedIcon
              sx={{ fontSize: 48, color: "#777", mb: 1 }}
            />
            <Typography variant="h6">No posts found</Typography>
            <Typography sx={{ color: "#9698a3", mt: 1 }}>
              Try another search or category.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}
