import { BrowserRouter as Router, Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const StyledBadge = styled(Badge) (({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


const Navbar = () => {


  return (
    <div className={styles.navbar}>
      <Router>
        <div className={styles.LogoStoreAndSearch}>
          <p className={styles.Logo}>Name Store</p>
        </div>
        <div className={styles.LinksAndCart}>
          <div className={styles.DivRight}>
            <div className={styles.Links}>
              <Link style={{ margin: "0 10px" }} to="/Products">
                Products
              </Link>
            </div>
            <div className={styles.Categories}>
              <p>Categories</p>
            </div>
            <div className={styles.Cart}>
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={4} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </div>
            <div className={styles.Account}>
              <AccountCircleIcon color="secondary" fontSize="large"/>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default Navbar;
