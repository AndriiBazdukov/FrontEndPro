import {
    Box,
    Button,
    List,
    ListItem,
    ListItemText,
    Paper,
    Typography
} from '@mui/material';

export default function Swapi() {
    return (
        <Paper sx={{ p: 3, maxWidth: 500 }}>
            <Typography variant="h5" gutterBottom>
                Star Wars Characters
            </Typography>

            <Button variant="contained" sx={{ mb: 2 }}>
                Load characters
            </Button>

            <List>
                <ListItem>
                    <ListItemText
                        primary="Luke Skywalker"
                        secondary="Gender: male | Birth year: 19BBY"
                    />
                </ListItem>

                <ListItem>
                    <ListItemText
                        primary="Darth Vader"
                        secondary="Gender: male | Birth year: 41.9BBY"
                    />
                </ListItem>

                <ListItem>
                    <ListItemText
                        primary="Leia Organa"
                        secondary="Gender: female | Birth year: 19BBY"
                    />
                </ListItem>
            </List>
        </Paper>
    );
}
