import { FollowTheSigns, PlusOne, Settings, Share, VideoCall } from "@mui/icons-material";
import { Avatar, Stack } from "@mui/material";

const NavLayout = () => {
    return (
        <>
            <Stack spacing={2}>
                <Avatar />
                <Share />
                <PlusOne />
                <FollowTheSigns/>
                <VideoCall/>
                <Settings/>
                
            </Stack>



        </>
    );
}

export default NavLayout
