import { Stack } from "@mui/material"
import Footer from "../FooterLayout/Footer"
import HomeLayout from "../HomeLayout/Homelayout"


const MainLayout = () => {
    return (
        <>
            <Stack sx={{ width: '100%', height: '100vh' }}>
                <Stack direction="row" sx={{ flex: 9 }}>
                    {
                         <HomeLayout />

                    }
                </Stack>
                <Stack>
                    <Footer />
                </Stack>
            </Stack>
        </>
    )

}

export default MainLayout