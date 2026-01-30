import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
  Box,
  Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { fetchProducts } from './productsSlice';
import { logout } from '../auth/authSlice';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ProductPreview() {
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Box sx={{ backgroundColor: '#49a36f', minHeight: '100vh', py: 5 }}>
      <Container maxWidth="lg">
        
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
          <Typography variant="h4" sx={{ color: '#fff', fontWeight: 700 }}>
            ROZETKA
          </Typography>

          <Box>
            <Button
              variant="contained"
              sx={{ mr: 2, backgroundColor: '#fff', color: '#49a36f' }}
              onClick={() => navigate('/')}
            >
              Back
            </Button>

            <Button
              variant="contained"
              sx={{ backgroundColor: '#fff', color: '#49a36f' }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Box>
        </Box>

        {/* GRID */}
        <Grid container spacing={5}>
          {products.map(p => (
            <Grid item xs={12} sm={6} md={4} key={p.id}>
              <Card
                sx={{
                  borderRadius: 2,
                  textAlign: 'center',
                  p: 2,
                  backgroundColor: '#eee',
                  height: '100%',
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: 6
                  }
                }}
              >
                <CardMedia
                  component="img"
                  image={p.photo}
                  alt={p.title}
                  sx={{
                    height: 160,
                    objectFit: 'contain',
                    mb: 2
                  }}
                />

                <CardContent>
                  <Typography fontWeight={500} mb={1}>
                    {p.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: '#ff5a00',
                      fontWeight: 700,
                      fontSize: 20
                    }}
                  >
                    {p.price}₴
                  </Typography>

                  <Typography variant="body2" mb={2}>
                    Кількість: {p.quantity ?? 5}
                  </Typography>

                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    gap={1}
                    sx={{ color: '#2e7d32', fontWeight: 500 }}
                  >
                    <ShoppingCartIcon />
                    Готовий до відправки
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
