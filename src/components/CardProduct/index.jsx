import Styles from './CardProduct.module.css'
import AddCart from '../addCart';
import { useNavigate } from 'react-router-dom';

function CardProduct({ props: { name, imgProduct, Price, Description } }) {
    const navigate = useNavigate();
    const formatPrice = "$" + Intl.NumberFormat('en-DE').format(Price);
    const url = name
        .split(" ")
        .reduce((prev, now) => prev + now);

    const handleClickToProduct = () => {
        navigate(`/products/${url}`)
    }
    return (
        <div className={Styles.CardProduct}>
            <div className={Styles.ContentImg}>
                <img className={Styles.ImgCard} src={imgProduct} alt={name} onClick={handleClickToProduct} />
                <div className={Styles.ContentIcon}>
                    <AddCart  props={{ name, imgProduct, Price, Description }}/>
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