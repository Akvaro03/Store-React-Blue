import { Button } from '@mui/material';
import Style from './Products.module.css'
import CardProduct from '../CardProduct';
import { useDispatch, useSelector } from 'react-redux';
import fetchData from '../../hooks/fetchData';
import { useEffect } from 'react';
import { addProduct } from '../../features/products/productsSlice';

function ProductsAndFilters() {
    const Dispatch = useDispatch();
    const products2 = useSelector((state) => state.products)
    useEffect(() => {
        const saveData = () => {
            const dataFromFirebase = new Promise((resolve, reject) => {
                resolve(fetchData())
            })
            dataFromFirebase.then(resolve => resolve.forEach(element => {
                Dispatch(addProduct(element))
            }))
        }
        if (products2.length === 0) {
            saveData()
        }
    }, [products2,Dispatch])


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
                {products2.map((product, key) => <CardProduct key={key} props={product} />)}
            </div>
        </>
    );
}

export default ProductsAndFilters;