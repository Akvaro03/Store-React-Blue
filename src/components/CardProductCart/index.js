import { useState } from 'react';
import getImgUrl from '../../hooks/getImgUrl';
import Style from './CardProductCart.module.css'
function CardProductCart({props : {name, url, price, description}}) {
    const [img, setImg] = useState()
    const urlPromiss = new Promise((resolve, reject) => {
        resolve(getImgUrl(url));
    })
    urlPromiss.then(resolve => setImg(resolve))

    return (
        <div className={Style.ContentProductCart}>
            <div className={Style.ImageProduct}>
                <img alt='img Cart product' src={img} />
            </div>
            <div className={Style.DescriptionProduct}>
                <div>{name}</div>
            </div>
            <div className={Style.DeleteProduct}>
            </div>
        </div>
    );
}

export default CardProductCart;