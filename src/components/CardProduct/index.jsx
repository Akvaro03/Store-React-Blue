import Styles from './CardProduct.module.css'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { addProduct } from '../../features/cart/cartSlice';
import { useDispatch } from 'react-redux';

function CardProduct({ props: { name, imgProduct, Price, Description } }) {

    const Dispatch = useDispatch();

    const formatPrice = "$" + Intl.NumberFormat('en-DE').format(Price);
    const url = name
        .split(" ")
        .reduce((prev, now) => prev + now);

    const handleClickCart = () => {
        Dispatch(addProduct({ name, imgProduct, Price, Description }));
    }
    const handleClickToProduct = () => {
        window.location.replace("https://www.w3schools.com")
    }
    return (
        <div className={Styles.CardProduct}>
            <div className={Styles.ContentImg}>
                <img className={Styles.ImgCard} src={imgProduct} alt={name} onClick={handleClickToProduct} />
                <div className={Styles.ContentIcon} onClick={handleClickCart}>
                    <ShoppingBagOutlinedIcon className={Styles.IconCart} />
                </div>
            </div>
            <div className={Styles.DescriptionProduct}>
                <p className={Styles.DescriptionTittle} underline="none" href="#" >{name}</p>
                <p className={Styles.DescriptionPrice} underline="hover" href="#">{formatPrice}</p>
            </div>
        </div>
    );
}

export default CardProduct;