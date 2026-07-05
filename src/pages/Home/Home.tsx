import { Stack } from "@mui/material";
import Stories from "../Stories/Stories";

const Home = () => {

    return (
        <>
            <Stack>
                <Stack>
                    <Stories />
                </Stack>
                <Stack>
                    Post
                </Stack>
            </Stack>
        </>
    );
};

export default Home;