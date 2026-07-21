import {
  Avatar,
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Divider,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";

import {
  BookmarkBorder,
  FavoriteBorder,
  GridOn,
  //   ChatBubbleOutline,
  Logout,
  Edit,
  CommentBankOutlined,
} from "@mui/icons-material";

import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import { getUserProfileByUserName } from '../../api/userApi';
import { useCurrentUser } from "../../hooks/useCurrentUser";

const reels = [
  "https://picsum.photos/300?1",
  "https://picsum.photos/300?2",
  "https://picsum.photos/300?3",
  "https://picsum.photos/300?4",
  "https://picsum.photos/300?5",
  "https://picsum.photos/300?6",
  "https://picsum.photos/300?7",
  "https://picsum.photos/300?8",
  "https://picsum.photos/300?9",
];

const saved = [
  "https://picsum.photos/300?10",
  "https://picsum.photos/300?11",
  "https://picsum.photos/300?12",
];

const liked = [
  "https://picsum.photos/300?13",
  "https://picsum.photos/300?14",
  "https://picsum.photos/300?15",
];

const comments = [
  "Great Reel 🔥",
  "Amazing Content ❤️",
  "Keep Going 🚀",
  "Loved it 😍",
];
interface UserProfileProps {
  userName: string;
}

export default function Profile({ userName = "Vishnu" }: UserProfileProps) {
  const navigate = useNavigate();

  const [tab, setTab] = useState(0);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/login" replace />;

  const { data:profile,isLoading,isError } = useCurrentUser(token);
  if (isLoading) return <div>Loading profile...</div>;
  if (isError) {
        localStorage.removeItem("token");
        return <div>Error loading profile</div>;
    }

  console.log("Data ", profile?.profilePicUrl)
  const renderGrid = (images: string[]) => (
    <Grid container spacing={2} mt={1}>
      {images.map((img, index) => (
        <Grid size={{ xs: 4 }} key={index}>
          <Card elevation={0}>
            <CardMedia
              component="img"
              image={img}
              sx={{
                height: 220,
                objectFit: "cover",
                borderRadius: 2,
                cursor: "pointer",
                transition: ".3s",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );



  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 5 }}>
      {/* Cover */}

      <Box
        sx={{
          height: 220,
          borderRadius: 3,
          background:
            "linear-gradient(90deg,#833ab4,#fd1d1d,#fcb045)",
        }}
      />

      {/* Profile */}

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={5}
        mt={-8}
        alignItems={{ xs: "center", md: "flex-end" }}
      >
        <Avatar
          src={profile?.profilePicUrl}
          sx={{
            width: 170,
            height: 170,
            border: "5px solid white",
          }}
        />

        <Box flex={1}>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            flexWrap="wrap"
          >
            <Typography variant="h4" fontWeight={700}>
              {profile?.fullName}
            </Typography>

            <Typography color="text.secondary">
              @{profile?.userName}
            </Typography>
          </Stack>

          <Typography mt={1} color="text.secondary">
            Full Stack Developer • Java • Spring Boot • React •
            Creating awesome social apps 🚀
          </Typography>

          <Stack direction="row" spacing={5} mt={3}>
            <Box>
              <Typography fontWeight="bold">128</Typography>
              <Typography color="text.secondary">
                Posts
              </Typography>
            </Box>

            <Box>
              <Typography fontWeight="bold">15.8K</Typography>
              <Typography color="text.secondary">
                Followers
              </Typography>
            </Box>

            <Box>
              <Typography fontWeight="bold">512</Typography>
              <Typography color="text.secondary">
                Following
              </Typography>
            </Box>
          </Stack>

          <Stack direction="row" spacing={2} mt={3}>
            <Button
              variant="contained"
              startIcon={<Edit />}
            >
              Edit Profile
            </Button>

            <Button
              variant="outlined"
              color="error"
              startIcon={<Logout />}
              onClick={logout}
            >
              Logout
            </Button>
          </Stack>
        </Box>
      </Stack>

      <Divider sx={{ my: 4 }} />

      {/* Tabs */}

      <Tabs
        value={tab}
        centered
        onChange={(e, v) => setTab(v)}
      >
        <Tab icon={<GridOn />} label="Reels" />

        <Tab icon={<BookmarkBorder />} label="Saved" />

        <Tab icon={<FavoriteBorder />} label="Liked" />

        <Tab icon={<CommentBankOutlined />} label="Comments" />
      </Tabs>

      {tab === 0 && renderGrid(reels)}

      {tab === 1 && renderGrid(saved)}

      {tab === 2 && renderGrid(liked)}

      {tab === 3 && (
        <Stack spacing={2} mt={3}>
          {comments.map((comment, index) => (
            <Card
              key={index}
              sx={{
                p: 2,
              }}
            >
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
              >
                <Avatar src="https://i.pravatar.cc/100" />

                <Box>
                  <Typography fontWeight={600}>
                    @post_by_user
                  </Typography>

                  <Typography color="text.secondary">
                    {comment}
                  </Typography>
                </Box>
              </Stack>
            </Card>
          ))}
        </Stack>
      )}
    </Container>
  );
}