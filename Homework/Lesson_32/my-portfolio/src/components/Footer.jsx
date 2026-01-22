import { Box, Typography, Link } from '@mui/material';

export default function Footer() {
    return (
        <Box sx={{ p: 2, textAlign: 'center', bgcolor: '#eee', mt: 4 }}>
            <Typography>© 2026 Andrey Bazdukov</Typography>
            <Typography>
                <Link href="mailto:test@gmail.com">Email</Link> |
                <Link href="https://github.com" target="_blank"> GitHub</Link>
            </Typography>
        </Box>
    );
}