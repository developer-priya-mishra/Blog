
import { Box } from "@mui/material";

const SingleBlog = () => {
    return (
        <>
            <br />
            <br />
            <Box display={"flex"} flexDirection={"column"} maxWidth={500} borderRadius={5} margin="auto" padding={3} alignItems="center" boxShadow={'5px 5px 10px #ccc'}>
                <h5>Demo</h5>
                <p textAlign="justified">Content</p>
                <br />
            </Box>
        </>
    )
}

export default SingleBlog;