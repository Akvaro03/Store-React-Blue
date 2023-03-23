
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../features/cart/cartSlice';
import { CircularProgress } from '@mui/material';
import { green } from '@mui/material/colors';
import Styles from './addCart.module.css'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import DoneIcon from '@mui/icons-material/Done';

function AddCart({ props: { name, url, price, description } }) {
  const Dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const timer = useRef();

  const handleClickCart = () => {
    !isLoading && setLoading(true)
    timer.current = window.setTimeout(() => {
      setLoading(false);
      Dispatch(addProduct({ name, url, price, description, count: 1 }));
      setSuccess(true)
      timer.current = window.setTimeout(() => {
        setSuccess(false)
      }, 1000)
    }, 2000);

  }

  return (
    <div className={Styles.ContentIcon}>
      <CircularProgress
        size={42}
        sx={
          isLoading ? 
          {
            color: green[500],
            position: 'absolute',
            display: "block",
            zIndex: 1,
          }
            :
            {
              display: "none"
            }
        }
      />
      {!success ? <ShoppingBagOutlinedIcon size={74} onClick={handleClickCart} className={isLoading ? Styles.IconLoading : Styles.IconCart} /> :
        <DoneIcon className={Styles.IconSucces} />
      }

    </div>
  );
}


export default AddCart;