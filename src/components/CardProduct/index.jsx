import Styles from './CardProduct.module.css'
import AddCart from '../addCart';
import { useNavigate } from 'react-router-dom';
import getImgUrl from '../../hooks/getImgUrl';
import { useState } from 'react';
import imgBackground from '../../img/backgroundImg.jpg'

function CardProduct({ props : { name, url, price, description }}) {
    const [img, setImg] = useState(imgBackground)
    const navigate = useNavigate();
    // let urlImg;
    const urlPromiss = new Promise((resolve, reject) => {
        resolve(getImgUrl(url));
    })
    urlPromiss.then(url => setImg(url))

    async function ImgPhoto(src){
        let urlImg = await getImgUrl(src)
        
        console.log(urlImg)
        return(<h1>a</h1>)
    }

    const formatprice = "$" + Intl.NumberFormat('en-DE').format(price);

    const handleClickToProduct = () => {
        navigate(`/products/${url}`)
    }
    // console.log(urlImg)
    return (
        <div className={Styles.CardProduct}>
            <div className={Styles.ContentImg}>
                <img className={Styles.ImgCard} src={img} alt={name} onClick={handleClickToProduct} />
                {/* {ImgPhoto(url)} */}
                <div className={Styles.ContentIcon}>
                    <AddCart props={{ name, url, price, description }} />
                </div>
            </div>
            <div className={Styles.DescriptionProduct}>
                <p className={Styles.DescriptionTittle} underline="none" href="#" >{name}</p>
                <p className={Styles.Descriptionprice} underline="hover" href="#">{formatprice}</p>
            </div>
        </div>
    );
}

export default CardProduct;