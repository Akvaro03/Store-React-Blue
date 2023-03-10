import { Link } from '@mui/material';
import Styles from './CardProduct.module.css'

function CardProduct({props: {name, imgProduct, Price}}) {
    const formatPrice = "$" + Intl.NumberFormat('en-DE').format(Price);
    const url = name
                .split(" ")
                .reduce((prev, now) => prev + now);
    return ( 
        <Link href={"Products/" + url} underline="none" className={Styles.CardProduct}>
            <div className={Styles.ContentImg}>
                <img className={Styles.ImgCard} src={imgProduct} alt={name} />
            </div>
            <div className={Styles.DescriptionProduct}>
                <p className={Styles.DescriptionTittle} underline="none" href="#" >{name}</p>
                <p className={Styles.DescriptionPrice} underline="hover" href="#">{formatPrice}</p>
            </div>
        </Link>
     );
}

export default CardProduct;