import { Container, Typography, List, ListItem } from '@mui/material';

export default function Home() {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Andrey Bazdukov
            </Typography>

            <Typography variant="h6">Frontend Developer</Typography>

            <Typography sx={{ mt: 2 }}>
                React developer with experience in Redux, MUI.
            </Typography>

            <Typography variant="h6" sx={{ mt: 3 }}>
                Skills
            </Typography>

            <List>
                <ListItem>React</ListItem>
                <ListItem>Redux Toolkit</ListItem>
                <ListItem>JavaScript / TypeScript</ListItem>
                <ListItem>MUI / Ant Design</ListItem>
            </List>
        </Container>
    );
}