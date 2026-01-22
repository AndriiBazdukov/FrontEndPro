import {
    Box,
    TextField,
    Button,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Paper,
    Typography
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Todo() {
    return (
        <Paper sx={{ p: 3, maxWidth: 500 }}>
            <Typography variant="h5" gutterBottom>
                TODO List
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <TextField
                    fullWidth
                    label="Enter todo"
                    placeholder="Minimum 5 characters"
                />
                <Button variant="contained">
                    Add
                </Button>
            </Box>

            <List>
                <ListItem
                    secondaryAction={
                        <IconButton edge="end">
                            <DeleteIcon />
                        </IconButton>
                    }
                >
                    <ListItemText primary="Learn React" />
                </ListItem>

                <ListItem
                    secondaryAction={
                        <IconButton edge="end">
                            <DeleteIcon />
                        </IconButton>
                    }
                >
                    <ListItemText primary="Build portfolio project" />
                </ListItem>
            </List>
        </Paper>
    );
}