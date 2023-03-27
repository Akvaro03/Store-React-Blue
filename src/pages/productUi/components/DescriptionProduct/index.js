import { Button, FormControl, Input, InputLabel } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../../features/cart/cartSlice';
import Style from './DescriptionProduct.module.css'
import Modal from '../../../../components/modalCart'
import Alert from '@mui/material/Alert';

function DescriptionProduct({ product }) {
    const [count, setCount] = useState(1)
    const [error, setError] = useState(false)

    const Dispatch = useDispatch();
    const handleClick = () => {
        if (count > 0) {
            Dispatch(addProduct({ ...product, count }));
        } else {
            setError(true)
        }
    }
    const handleChangeCount = ({ target: { value } }) => {
        setCount(value)
    }

    const formatprice = "$" + Intl.NumberFormat('en-DE').format(product.price);

    return (
        <div className={Style.ContentDescription}>
            <div className={Style.NameProduct}>
                {product.name}
            </div>
            <hr />
            <div className={Style.PriceProduct}>
                <p className={Style.TittlePrice}>Precio en lista:</p>
                <p className={Style.ContentPrice}>{formatprice}</p>
            </div>
            <hr />
            <div className={Style.AddCart}>
                <FormControl sx={{ m: 1 }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-amount">Cantidad</InputLabel>
                    <Input
                        defaultValue={count}
                        onChange={handleChangeCount}
                        id="standard-adornment-amount"
                    />
                </FormControl>
                <Button onClick={handleClick} fullWidth variant="contained">Añadir al Carrito</Button>
            </div>
            {error && (
                <Modal type={"Alert"}>
                    <Alert severity="warning" onClose={() => {setError(false)}}>Error en la cantidad de unidades</Alert>
                </Modal>
            )}
        </div>
    );
}

export default DescriptionProduct;