import { useState } from 'react';
import getImgUrl from '../../hooks/getImgUrl';
import Style from './CardProductCart.module.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function CardProductCart({ props: { name, url, price, description, count } }) {
    const [img, setImg] = useState()
    const urlPromiss = new Promise((resolve, reject) => {
        resolve(getImgUrl(url));
    })
    urlPromiss.then(resolve => setImg(resolve))
    const formatprice = "$" + Intl.NumberFormat('en-DE').format(price);

    return (
        <div className={Style.ContentProductCart}>
            <div className={Style.ImageProduct}>
                <img alt='img Cart product' src={img} />
            </div>
            <div className={Style.DescriptionProduct}>
                    <div className={Style.NameProduct}>{name}</div>
                    <div className={Style.PriceProductAndCount}>
                        <div className={Style.Price}>{formatprice}</div>
                        <div className={Style.Count}>{count}</div>
                    </div>
            </div>
            <div className={Style.DeleteProduct}>
                <DeleteForeverIcon />
            </div>
        </div>
    );
}

export default CardProductCart;