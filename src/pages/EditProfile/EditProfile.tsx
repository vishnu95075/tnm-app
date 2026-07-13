import React, { useRef, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";

import CameraAltIcon from "@mui/icons-material/CameraAlt";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";

interface EditProfileData {
  fullName: string;
  username: string;
  bio: string;
  email: string;
  phone: string;
  website: string;
  gender: string;
  dob: string;
  location: string;
  avatar: string;
  cover: string;
}

export default function EditProfile() {
  const avatarInputRef = useRef<HTMLInputElement>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<EditProfileData>({
    fullName: "Vishnu Kumar",
    username: "vishnu",
    bio: "Full Stack Developer | React | Spring Boot",
    email: "vishnu@gmail.com",
    phone: "+91 9876543210",
    website: "https://portfolio.com",
    gender: "Male",
    dob: "2000-01-01",
    location: "Bangalore, India",
    avatar:
      "https://i.pravatar.cc/300",
    cover:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const previewImage = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "avatar" | "cover"
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const url = URL.createObjectURL(file);

    if (type === "avatar") {
      setForm({
        ...form,
        avatar: url,
      });
    } else {
      setForm({
        ...form,
        cover: url,
      });
    }
  };

  const handleSave = async () => {
    if (!form.fullName.trim()) {
      alert("Name is required");
      return;
    }

    if (!form.username.trim()) {
      alert("Username is required");
      return;
    }

    try {
      setLoading(true);

      // API Call
      // await updateProfile(form)

      await new Promise((resolve) => setTimeout(resolve, 2000));

      alert("Profile Updated Successfully");
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        bgcolor: "#f5f5f5",
        minHeight: "100vh",
        py: 5,
      }}
    >
      <Card
        sx={{
          maxWidth: 950,
          mx: "auto",
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        {/* Cover */}

        <Box
          sx={{
            height: 260,
            position: "relative",
            backgroundImage: `url(${form.cover})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              right: 20,
              bottom: 20,
              bgcolor: "white",
            }}
            onClick={() => coverInputRef.current?.click()}
          >
            <CameraAltIcon />
          </IconButton>

          <input
            hidden
            type="file"
            accept="image/*"
            ref={coverInputRef}
            onChange={(e) => previewImage(e, "cover")}
          />

          <Avatar
            src={form.avatar}
            sx={{
              width: 150,
              height: 150,
              position: "absolute",
              bottom: -70,
              left: 45,
              border: "5px solid white",
            }}
          />

          <IconButton
            sx={{
              position: "absolute",
              left: 150,
              bottom: -50,
              bgcolor: "primary.main",
              color: "white",
            }}
            onClick={() => avatarInputRef.current?.click()}
          >
            <CameraAltIcon />
          </IconButton>

          <input
            hidden
            type="file"
            accept="image/*"
            ref={avatarInputRef}
            onChange={(e) => previewImage(e, "avatar")}
          />
        </Box>

        <CardContent sx={{ mt: 9 }}>
          <Typography
            variant="h5"
            fontWeight={700}
            gutterBottom
          >
            Edit Profile
          </Typography>

          <Divider sx={{ mb: 4 }} />

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Full Name"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Username"
                name="username"
                value={form.username}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Bio"
                name="bio"
                value={form.bio}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Website"
                name="website"
                value={form.website}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                select
                label="Gender"
                name="gender"
                value={form.gender}
                onChange={handleChange}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </TextField>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                type="date"
                label="Date of Birth"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Location"
                name="location"
                value={form.location}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Stack
            direction="row"
            spacing={2}
            justifyContent="flex-end"
            mt={5}
          >
            <Button
              variant="outlined"
              color="inherit"
              startIcon={<CancelIcon />}
            >
              Cancel
            </Button>

            <Button
              variant="contained"
              startIcon={
                loading ? (
                  <CircularProgress
                    size={20}
                    color="inherit"
                  />
                ) : (
                  <SaveIcon />
                )
              }
              disabled={loading}
              onClick={handleSave}
            >
              {loading ? "Saving..." : "Save Changes"}
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}