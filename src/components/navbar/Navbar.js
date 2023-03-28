import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import styles from "./Navbar.module.css";
import Modal from "../modalCart";
import CartModal from "../Cart";
import fetchData from "../../hooks/fetchData";
import { Link } from "react-router-dom";
import { Autocomplete, Button, Menu, MenuItem, TextField } from "@mui/material";
import { addProduct } from "../../features/products/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


const Navbar = () => {
  const cart = useSelector(store => store.cart)
  const products = useSelector(store => store.products)
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const stateCategories = Boolean(anchorEl);
  const handleClickCategories = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const Dispatch = useDispatch();


  useEffect(() => {
    const saveData = () => {
      const dataFromFirebase = new Promise((resolve, reject) => {
        resolve(fetchData())
      })
      dataFromFirebase.then(resolve => resolve.forEach(element => {
        Dispatch(addProduct(element))
      }))
    }
    if (products.length === 0) {
      saveData()
    }
  }, [products, Dispatch])


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
            <Button
              id="basic-button"
              aria-controls={stateCategories ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={stateCategories ? 'true' : undefined}
              onClick={handleClickCategories}
            >
              Categorias
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={stateCategories}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Anal</MenuItem>
              <MenuItem onClick={handleClose}>Plug</MenuItem>
              <MenuItem onClick={handleClose}>Dildos</MenuItem>
              <MenuItem onClick={handleClose}>Esposas</MenuItem>
            </Menu>
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
        <Modal type={"Cart"}>
          <CartModal handleClick={handleClick} />
        </Modal>
      )}

    </div>
  );
};

export default Navbar;
