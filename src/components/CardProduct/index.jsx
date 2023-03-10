import { Link } from '@mui/material';
import Styles from './CardProduct.module.css'

function CardProduct({props: {name, imgProduct, Price}}) {
    console.log(Price)
    const formatPrice = "$" + Intl.NumberFormat('en-DE').format(Price);
    
    return ( 
        <div className={Styles.CardProduct}>
            <div className={Styles.ContentImg}>
                <img className={Styles.ImgCard} src={imgProduct} alt="" />
            </div>
            <div className={Styles.DescriptionProduct}>
                <Link className={Styles.DescriptionTittle} href="#" underline="none">{name}</Link>
                <Link className={Styles.DescriptionPrice} underline="hover" href="#">{formatPrice}</Link>
            </div>
        </div>
     );
}

export default CardProduct;