import { Form, Field } from 'react-final-form';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  Typography,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const TextFieldAdapter = ({ input, meta, ...rest }) => (
  <TextField
    {...input}
    {...rest}
    fullWidth
    variant="filled"
    InputProps={{
      disableUnderline: true,
      sx: {
        backgroundColor: '#e9e9e9',
        borderRadius: 1,
        fontWeight: 600,
        color: '#16a34a'
      }
    }}
    sx={{
      mb: 2,
      '& input': {
        color: '#16a34a',
        fontWeight: 600
      },
      '& textarea': {
        color: '#16a34a',
        fontWeight: 600
      }
    }}
    error={meta.touched && meta.error}
    helperText={meta.touched && meta.error}
  />
);

export default function ProductModal({
  open,
  onClose,
  onSubmit,
  product,
  isEdit
}) {
  console.log('ProductModal render, open:', open);
  const validate = values => {
    const errors = {};
    if (!values.title) errors.title = 'Required';
    if (!values.price) errors.price = 'Required';
    if (!values.photo) errors.photo = 'Required';
    if (!values.category) errors.category = 'Required';
    if (!values.quantity) errors.quantity = 'Required';
    return errors;
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          backgroundColor: '#bdbdbd',
          borderRadius: 3,
          p: 1
        }
      }}
    >
      {/* HEADER */}
      <DialogTitle sx={{ fontWeight: 700, color: '#fff' }}>
        {isEdit ? 'Edit product' : 'Add product'}

        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', right: 10, top: 10 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <Form
        onSubmit={onSubmit}
        initialValues={isEdit ? product : {}}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <DialogContent>

              <Typography color="#fff">Category</Typography>
              <Field name="category" component={TextFieldAdapter} />

              <Typography color="#fff">Name</Typography>
              <Field name="title" component={TextFieldAdapter} />

              <Typography color="#fff">Quantity</Typography>
              <Field
                name="quantity"
                component={TextFieldAdapter}
                type="number"
              />

              <Typography color="#fff">Price</Typography>
              <Field
                name="price"
                component={TextFieldAdapter}
                type="number"
              />

              <Typography color="#fff">Photo</Typography>
              <Field name="photo" component={TextFieldAdapter} />

              <Typography color="#fff">Description</Typography>
              <Field
                name="description"
                component={TextFieldAdapter}
                multiline
                rows={4}
              />

            </DialogContent>

            {/* BUTTONS */}
            <DialogActions sx={{ px: 3, pb: 3 }}>
              <Box display="flex" gap={2} width="100%">
                
                <Button
                  fullWidth
                  onClick={onClose}
                  sx={{
                    backgroundColor: '#6d6a6a',
                    color: '#fff',
                    fontWeight: 700,
                    '&:hover': {
                      backgroundColor: '#5a5757'
                    }
                  }}
                >
                  Cancel
                </Button>

                <Button
                  fullWidth
                  type="submit"
                  sx={{
                    backgroundColor: '#49a36f',
                    color: '#fff',
                    fontWeight: 700,
                    '&:hover': {
                      backgroundColor: '#3b8a5d'
                    }
                  }}
                >
                  Submit
                </Button>

              </Box>
            </DialogActions>
          </form>
        )}
      />
    </Dialog>
  );
}
