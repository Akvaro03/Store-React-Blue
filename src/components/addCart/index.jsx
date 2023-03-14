    
import { addProduct } from '../../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import Styles from './addCart.module.css'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';


function AddCart({props : { name, imgProduct, Price, Description }}) {
    const Dispatch = useDispatch();
    const handleClickCart = () => {
        Dispatch(addProduct({ name, imgProduct, Price, Description }));
    }

    return (
        <ShoppingBagOutlinedIcon onClick={handleClickCart} className={Styles.IconCart} />
    );
}

export default AddCart;