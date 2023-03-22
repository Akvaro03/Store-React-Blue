import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { orange } from '@mui/material/colors';
import { useSelector } from 'react-redux';
import styles from './Cart.module.css'
import CloseIcon from '@mui/icons-material/Close';
import CardProductCart from '../CardProductCart';
import { useEffect, useState } from 'react';


const ColorButton = styled(Button)(({ theme }) =>
({
    color: 'whitesmoke',
    backgroundColor: orange[500],
    '&:hover': {
        backgroundColor: orange[700],
    },
}));

function CartModal({ handleClick }) {
    const [totalPrice, setTotalPrice] = useState(0)
    const cart = useSelector(store => store.cart)
    const formatprice = "$" + Intl.NumberFormat('en-DE').format(totalPrice);

    useEffect(() => {
        cart[0] && cart.forEach(element => {
            setTotalPrice((prev) => prev + element.price)
        });
    }, [cart])

    return (
        <div className={styles.CardCart}>
            <div className={styles.ContentCardCart}>
                <div className={styles.TittleCartAndCross}>
                    <div className={styles.TittleCart}>
                        Carrito de compras
                    </div>
                    <div className={styles.Cross} onClick={() => handleClick()}>
                        <CloseIcon />
                    </div>
                </div>
                <div className={styles.ProducsCart}>
                    {
                        cart && cart.map((product, key) => {
                            return <CardProductCart props={product} key={key} />
                        })
                    }
                </div>
                <div className={styles.Prices}>
                    <p className={styles.PricesTittle}>Total:</p>
                    <p className={styles.PricesNumber}>{formatprice}</p>
                </div>
                <div className={styles.ConfirmCart}>
                    <ColorButton variant="contained" fullWidth>Iniciar Compra</ColorButton>
                </div>
            </div>
        </div>

    );
}

export default CartModal;