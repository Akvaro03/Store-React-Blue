import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Autocomplete, Slide, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { forwardRef, useState } from "react";
import DialogCart from "../dialogCart";
// import GetProductDb from "../../hooks/GetProductDb";
// import LoadProductsDbToStore from "../../hooks/LoadProductsDbToStore"; 


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});


const Navbar = () => {
  const cart = useSelector(store => store.cart)
  const products = useSelector(store => store.products)
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            <IconButton aria-label="cart" onClick={handleClickOpen}>
              <StyledBadge badgeContent={cart.length} color="secondary" >
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
              <DialogCart props={{Transition, handleClose, open}}/>
          </div>
          <div className={styles.Account}>
            <AccountCircleIcon color="secondary" fontSize="large" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
