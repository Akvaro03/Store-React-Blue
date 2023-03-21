import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Autocomplete, Button, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";
import Modal from "../modalCart";
import CloseIcon from '@mui/icons-material/Close';
import { orange } from "@mui/material/colors";
import CardProductCart from "../CardProductCart";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(orange[500]),
  backgroundColor: orange[500],
  '&:hover': {
    backgroundColor: orange[700],
  },
}));


const Navbar = () => {
  const cart = useSelector(store => store.cart)
  const products = useSelector(store => store.products)
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.LogoStoreAndSearch}>
        <Link to="/" className={styles.Logo}>Blue Store</Link>
      </div>
      <div className={styles.LinksAndCart}>
        <div className={styles.DivRight}>
          <div className={styles.Search}>
            <Autocomplete
              id="free-solo-demo"
              freeSolo
              fullWidth
              size="small"
              options={products.map((option) => option.name)}
              renderInput={(params, key) => <TextField key={key} fullWidth {...params} label="Buscador" />}
            />
          </div>
          <div className={styles.Links}>
            <Link to="/products">
              Products
            </Link>
          </div>
          <div className={styles.Categories}>
            <p>Categories</p>
          </div>
          <div className={styles.Cart}>
            <IconButton aria-label="cart" onClick={handleClick}>
              <StyledBadge badgeContent={cart.length} color="secondary" >
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </div>
          <div className={styles.Account}>
            <AccountCircleIcon color="secondary" fontSize="large" />
          </div>
        </div>
      </div>
      {open && (
        <Modal>
          <div className={styles.CardCart}>
            <div className={styles.ContentCardCart}>
              <div className={styles.TittleCartAndCross}>
                <div className={styles.TittleCart}>
                  Carrito de compras
                </div>
                <div className={styles.Cross} onClick={handleClick}>
                  <CloseIcon />
                </div>
              </div>
              <div className={styles.ProducsCart}>
                {
                  cart && cart.map((product, key) => {
                    return <CardProductCart props={product} key={key}/>
                  })
                }
              </div>
              <div className={styles.Prices}>
                <p className={styles.PricesTittle}>Total:</p>
                <p className={styles.PricesNumber}>18.000</p>
              </div>
              <div className={styles.ConfirmCart}>
                <ColorButton variant="contained" fullWidth>Iniciar Compra</ColorButton>
              </div>
            </div>
          </div>
        </Modal>
      )}

    </div>
  );
};

export default Navbar;
