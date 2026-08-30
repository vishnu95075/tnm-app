import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import {
  Logout,
  Edit,
} from "@mui/icons-material";

import { Navigate, useNavigate } from "react-router-dom";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import MyPosts from "./MyPosts";

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



export default function Profile() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/login" replace />;

  const { data: profile, isLoading, isError } = useCurrentUser(token);
  if (isLoading) return <div>Loading profile...</div>;
  if (isError) {
    localStorage.removeItem("token");
    return <div>Error loading profile</div>;
  }



  return (
    <Stack
      spacing={2}
      sx={{
        height: "100vh", // or 700, "calc(100vh - 64px)", etc.
        overflowY: "auto",
        p: 2,
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}

    >
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
                @{profile?.username}
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
                onClick={() => navigate('/edit-profile')}
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

        <MyPosts userId={profile?.authId} />

      </Container>
    </Stack>
  );
}