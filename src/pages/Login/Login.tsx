import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material"
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {

    const outlinedPasswordId = React.useId();
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <>
            <Box sx={{
                width: '50%', bgcolor: '#000', color: 'white', display: 'flex',
                flexDirection: 'column',

                justifyContent: 'center', // Vertical center
                alignItems: 'center',     // Horizontal center

                '& > :not(style)': {
                    m: 1,
                    width: '50%',
                },
            }}>
                <Typography
                    sx={{
                        fontSize: {
                            xs: '1.5rem',
                            sm: '2rem',
                            md: '2.5rem',
                        },
                        textAlign: 'center',
                    }}

                >
                    Share in the everyday moments of your closest friends 💕❤️
                </Typography>


            </Box>
            <Box
                component="form"
                sx={{
                    width: '50%',
                    height: '100%', // or a fixed height like 400px
                    bgcolor: '#ece9e9',

                    display: 'flex',
                    flexDirection: 'column',

                    justifyContent: 'center', // Vertical center
                    alignItems: 'center',     // Horizontal center

                    '& > :not(style)': {
                        m: 1,
                        width: '50%',
                    },
                }}

                noValidate
                autoComplete="off"
            >
                <Typography
                    sx={{
                        fontSize: '2.2rem',
                        fontWeight: 'bold',
                        fontFamily: '"Poppins", sans-serif',
                        color: '#262626',
                        textAlign: 'center',
                        mb: 1,
                    }}
                >
                    Welcome 👋
                </Typography>

                <Typography
                    sx={{
                        fontSize: '1.5rem',
                        background: 'linear-gradient(45deg, #3e24e4, #8499ea)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textAlign: 'center',
                        mb: 2,
                    }}

                >
                    Log in to Social Dunia
                </Typography>
                <TextField
                    label="Mobile number, username, email"
                    variant="outlined"
                    sx={{
                        width: '350px',
                        my: 1,

                        '& .MuiOutlinedInput-input': {
                            padding: '20px 28px',
                        },

                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#888',
                                borderWidth: '2.1px',
                                borderRadius: '12px',

                            },
                            '&:hover fieldset': {
                                borderColor: '#888',
                                borderWidth: '2.5px',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#888',
                                borderWidth: '2.5px',
                            },
                        },
                    }}
                />

                <FormControl sx={{
                    '& .MuiOutlinedInput-input': {
                        paddingLeft: '20px',
                        paddingTop: '20px',
                        pb: '20px'
                    },

                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#888',
                            borderWidth: '2.1px',
                            borderRadius: '12px',

                        },
                        '&:hover fieldset': {
                            borderColor: '#888',
                            borderWidth: '2.5px',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#888',
                            borderWidth: '2.5px',
                        },
                    },
                }} variant="outlined">
                    <InputLabel htmlFor={`${outlinedPasswordId}-input`}>Password</InputLabel>
                    <OutlinedInput
                        id={`${outlinedPasswordId}-input`}
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label={
                                        showPassword ? 'hide the password' : 'display the password'
                                    }
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <VisibilityIcon />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                <Button
                    variant="contained"
                    disabled={false}
                    sx={
                        {
                            p: 1,
                            borderRadius: 10,
                            bgcolor: '#8499ea',
                            textTransform: 'none',

                        }
                    }
                >
                    Log in
                </Button>
                <Button
                    variant="contained"
                    disabled={false}
                    sx={{
                        p: 1,
                        borderRadius: 10,
                        bgcolor: '#8499ea',
                        textTransform: 'none',
                        color: '#000'
                    }}
                >
                    Forgot password?
                </Button>
                <br />
                <br />
                <Button
                    variant="contained"
                    sx={{
                        p: 1,
                        borderRadius: 10,
                        bgcolor: '#8499ea',
                        textTransform: 'none',
                        color: '#3e24e4',
                        mt: 6 // 48px gap above
                    }}
                >
                    Create new account ❤️
                </Button>

                <br />
                <br />
                <br />

                <Typography sx={{
                    textAlign: 'center',
                    p: 1
                }}>Logo 🎶</Typography>
            </Box>
        </>
    )
}

export default Login