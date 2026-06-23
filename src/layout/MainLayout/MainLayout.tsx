import { Stack } from "@mui/material"
import Login from "../../pages/Login/Login"
import Footer from "../FooterLayout/Footer"

const MainLayout = () => {
    return (
        <>
            <Stack  sx={{ width: '100%', height: '100vh' }}>
                <Stack direction="row" sx={{ flex: 9 }}>
                    <Login />
                </Stack>
                <Stack>
                    <Footer />
                </Stack>
            </Stack>

        </>
    )

}

export default MainLayout