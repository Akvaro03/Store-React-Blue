import { Button } from '@mui/material';
import Style from './Products.module.css'
import imgProduct from '../../img/productExample.png'
import CardProduct from '../CardProduct';

const Products = [
    {
        imgProduct: imgProduct,
        name: "Mochila Kuromi",
        Price: 18000
    },
    {
        imgProduct: imgProduct,
        name: "Mochila Kuromi",
        Price: 18000
    }, {
        imgProduct: imgProduct,
        name: "Mochila Kuromi",
        Price: 18000
    }, {
        imgProduct: imgProduct,
        name: "Mochila Kuromi",
        Price: 18000
    }, {
        imgProduct: imgProduct,
        name: "Mochila Kuromi",
        Price: 18000
    },
    {
        imgProduct: imgProduct,
        name: "Mochila Kuromi",
        Price: 18000
    }, {
        imgProduct: imgProduct,
        name: "Mochila Kuromi",
        Price: 18000
    },
]

function ProductsAndFilters() {
    return (
        <>
            <div className={Style.HeaderAndFilters}>
                <div className={Style.HeaderTittle}>
                    <p>Productos</p>
                </div>
                <div className={Style.Filters}>
                    <Button size='medium' color='secondary' variant="outlined">Filtrar</Button>
                    <Button size='medium' color='secondary' variant="outlined">Destacados</Button>
                </div>
            </div>
            <div className={Style.ContentProducts}>
                {Products.map((product, key) => <CardProduct key={key} props={product} />)}
            </div>
        </>
    );
}

export default ProductsAndFilters;