
import { addProduct } from '../../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import Styles from './addCart.module.css'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Box, CircularProgress, Fab } from '@mui/material';
import { green } from '@mui/material/colors';
import SaveIcon from '@mui/icons-material/Save';
import { useEffect, useRef, useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';


function AddCart({ props: { name, url, price, description } }) {
    const Dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const timer = useRef();
  
    const buttonSx = {
      ...(success && {
        bgcolor: green[500],
        '&:hover': {
          bgcolor: green[700],
        },
      }),
    };
  
    useEffect(() => {
      return () => {
        clearTimeout(timer.current);
      };
    }, []);
  
    const handleButtonClick = () => {
      if (!loading) {
        setSuccess(false);
        setLoading(true);
        timer.current = window.setTimeout(() => {
          setSuccess(true);
          setLoading(false);
        }, 2000);
      }
    };
  
  
    const handleClickCart = () => {
        Dispatch(addProduct({ name, url, price, description, count: 1 }));
    }

    return (
        // <Box sx={{ m: 1, position: 'relative' }}>
        //     <Fab
        //         aria-label="save"
        //         color="primary"
        //         sx={buttonSx}
        //         onClick={handleButtonClick}
        //     >
        //         {success ? <CheckIcon /> : <SaveIcon />}
        //     </Fab>
        //     {loading && (
        //         <CircularProgress
        //             size={68}
        //             sx={{
        //                 color: green[500],
        //                 position: 'absolute',
        //                 top: -6,
        //                 left: -6,
        //                 zIndex: 1,
        //             }}
        //         />
        //     )}
        // </Box>

        <ShoppingBagOutlinedIcon onClick={handleClickCart} className={Styles.IconCart} />
    );
}

export default AddCart;