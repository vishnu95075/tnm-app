import { Stack } from "@mui/material"
import Login from "../../pages/Login/Login"
import Footer from "../FooterLayout/Footer"
import HomeLayout from "../HomeLayout/Homelayout"
import Navbar from "../../components/Navbar/Navbar"
import { Outlet } from "react-router-dom"

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

            <Navbar />
            <main>
                <Outlet />
            </main>


        </>
    )

}

export default MainLayout