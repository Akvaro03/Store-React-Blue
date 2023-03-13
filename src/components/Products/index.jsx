import { Button } from '@mui/material';
import Style from './Products.module.css'
import CardProduct from '../CardProduct';
import { useSelector} from 'react-redux';

function ProductsAndFilters() {
    const products = useSelector((state) => state.products)
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
                {products.keys() ? products.map((product, key) => <CardProduct key={key} props={product} />) : <p></p>}
            </div>
        </>
    );
}

export default ProductsAndFilters;