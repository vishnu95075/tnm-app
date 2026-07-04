import { Stack } from "@mui/material"
import Footer from "../FooterLayout/Footer"
import NavLayout from "../NavLayout/NavLayout"
import { Outlet } from "react-router-dom"


const MainLayout = () => {
    return (
        <>
            <Stack sx={{ width: '100%', height: '100vh' }}>
                <Stack direction="row" sx={{ flex: 9 }}>
                    <Stack
                        direction="row"
                        spacing={1}
                        sx={{
                            height: "100vh",
                            overflow: "hidden",
                        }}
                    >
                        <Stack

                        >
                            <NavLayout />
                        </Stack>
                        <Outlet />
                        <Stack
                            sx={{
                                width: "30%",
                            }}
                        >
                            Right
                        </Stack>
                    </Stack>
                </Stack>
                <Stack>
                    <Footer />
                </Stack>
            </Stack>
        </>
    )

}

export default MainLayout