import { Box, Container, Stack} from "@mui/material";

export default function Home() {
  return (
    <>
    <Stack sx={{ background: "#64b5f6"}}>Header</Stack>
    <Container>
      <Stack flexDirection="column" justifyContent="space-between" alignItems="center" sx={{ my: 2 }}>
        <Box>Popular Properties</Box>
        <Box>Top Agents</Box>
        <Box>Top Properties</Box>
        <Box>Events</Box>
      </Stack>
    </Container>
     <Stack sx={{ background: "#81c784" }}>Footer</Stack>
    </>
  );}
