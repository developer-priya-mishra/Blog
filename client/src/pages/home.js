import { Typography, Box } from "@mui/material";

const Home = () => {

    return (
        <>
            <br />
            <br />
            <Typography variant="h3" textAlign={'center'}>Create a blog</Typography>
            <Box display={"flex"} flexDirection={"column"} width={300} height={350} margin="auto" borderRadius={5} padding={3} alignItems="center" >
                <p textAlign="justified">Share your story with the world. Stand out with a professionally-designed blog website that can be customized to fit your brand. Build, manage, and promote your blog with Squarespace’s built-in suite of design and marketing tools.</p>
            </Box>
        </>
    )
}

export default Home;


