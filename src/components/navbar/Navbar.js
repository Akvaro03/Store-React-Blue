import { Link, useNavigate } from "react-router-dom";

import styles from "./Navbar.module.css";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Autocomplete, TextField } from "@mui/material";
import { useSelector } from "react-redux";


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


const Navbar = () => {
  const navigate = useNavigate();
  const cart = useSelector(store => store.cart)
  console.log(cart)
  return (
    <div className={styles.navbar}>
      <div className={styles.LogoStoreAndSearch}>
        <p className={styles.Logo} onClick={() => navigate("/")}>Blue Store</p>
      </div>
      <div className={styles.LinksAndCart}>
        <div className={styles.DivRight}>
          <div className={styles.Search}>
            <Autocomplete
              id="free-solo-demo"
              freeSolo
              fullWidth
              size="small"
              options={cart.map((option) => option.name)}
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
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={cart.length} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
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
