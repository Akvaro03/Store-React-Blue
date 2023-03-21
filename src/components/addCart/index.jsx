    
import { addProduct } from '../../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import Styles from './addCart.module.css'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';


function AddCart({props : { name, url, price, description }}) {
    const Dispatch = useDispatch();
    const handleClickCart = () => {
        Dispatch(addProduct({ name, url, price, description }));
    }

    return (
        <ShoppingBagOutlinedIcon onClick={handleClickCart} className={Styles.IconCart} />
    );
}

export default AddCart;