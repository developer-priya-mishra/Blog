import { AppBar, Button, Container, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Head from "./nav";

const NavBar = () => {
    const token = localStorage.getItem("token")
    const navigate = useNavigate();
    return (
        <>
            <AppBar position="sticky" sx={{ backgroundColor: "#063970" }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {
                            token && token !== null
                                ? <Head />
                                :
                                <>
                                    <Button variant="text" sx={{ marginRight: "auto", color: "white", fontWeight: "500", fontSize: "21px" }} onClick={() => navigate('/')}>Home</Button>

                                    <Button variant="contained" sx={{ marginLeft: "auto" }} onClick={() => navigate('/register')}>SignUp</Button>
                                    <Button variant="contained" sx={{ marginLeft: "10px" }} onClick={() => navigate('/login')}>Login</Button>

                                </>
                        }


                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default NavBar;