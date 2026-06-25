import { Favorite, Reply, Send, Share, Telegram } from "@mui/icons-material";
import { Avatar, Card, CardActions, CardHeader, CardMedia, IconButton, Stack, Typography } from "@mui/material";



const ReelsLayout = () => {
    return (
        <>
            <Stack>

                <Card>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: '#d10808' }} aria-label="recipe">
                                R
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                            </IconButton>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image="https://lh4.googleusercontent.com/proxy/wQ-u4uujA-giXl4wnwbLrio83MqxUEM-bY47W7gtJiVBTia1Ywpy4DX_2lpchZFO_rrljxGioLaThUF_N5V9PwuIrAZ6yDT272Hp4Q=w3840-h2160-p-k-no-nd-mv"
                        alt="Paella dish">

                    </CardMedia>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <Favorite />
                        </IconButton>
                        <Typography sx={{
                            fontWeight: '545'
                        }}>45</Typography>
                        <IconButton aria-label="share">
                            <Share />
                        </IconButton>
                        <Typography sx={{
                            fontWeight: '545'
                        }}>145</Typography>
                        <IconButton>
                            <Send />
                        </IconButton>
                        <Typography sx={{
                            fontWeight: '545'
                        }}>145</Typography>
                        <IconButton>
                            <Reply />
                        </IconButton>
                    </CardActions>
                </Card>
            </Stack>

        </>

    );
}

export default ReelsLayout;