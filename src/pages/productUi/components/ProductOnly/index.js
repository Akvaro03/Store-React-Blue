import { useState } from "react";
import getImgUrl from "../../../../hooks/getImgUrl";
import Style from './ImageProduct.module.css'
function ProductOnlyComponent({ productUrl }) {
    const [Img, setImg] = useState()
    const urlPromiss = new Promise((resolve, reject) => {
        resolve(getImgUrl(productUrl));
    })
    urlPromiss.then(url => setImg(url))
    return (
        <div className={Style.ContentImg}>
            <img className={Style.imgProduct} src={Img} alt="Producto" />
        </div>
    );
}

export default ProductOnlyComponent;