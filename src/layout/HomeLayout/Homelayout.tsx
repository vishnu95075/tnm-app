import { Stack } from "@mui/material";
import NavLayout from "../NavLayout/NavLayout";
import ReelsList from "../ReelsLayout/ReelsList";
// import ProfileLayout from "./ProfileLayout";
// import PostList from "./PostList";

const HomeLayout = () => {
    return (
        <Stack
            direction="row"
            spacing={1}
            sx={{
                height: "100vh",      // ✅ Full screen height
                overflow: "hidden",   // ✅ Prevent full page scroll
            }}
        >
            <Stack
                sx={{
                    width: "30%",
                }}
            >
                <NavLayout />
            </Stack>

            <Stack
                spacing={2}
                sx={{
                    width: "30%",
                    height: "100%",
                    overflowY: "auto",

                    "&::-webkit-scrollbar": {
                        display: "none",
                    },

                    scrollbarWidth: "none",

                    msOverflowStyle: "none",
                }}
            >
                <ReelsList />
            </Stack>
            <Stack
                sx={{
                    width: "30%",
                }}
            >
                Right
            </Stack>
        </Stack>
    );
}


export default HomeLayout;