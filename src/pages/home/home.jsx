// import Navbar from "../../components/navbar/Navbar";

import styles from "./home.module.css";
import productPng from '../../img/productExample.png';
import { Button, createTheme, ThemeProvider } from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import MiniNavbar from "../../components/miniNavbar";
const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: 'rgb(255, 161, 176)',
      contrastText: '#fff',
    },
  },
});


const Products = [
  {
    name: "Mochila Kuromi",
    url: productPng
  },
  {
    name: "Mochila Kuromi",
    url: productPng
  },
  {
    name: "Mochila Kuromi",
    url: productPng
  },
  {
    name: "Mochila Kuromi",
    url: productPng
  },
  {
    name: "Mochila Kuromi",
    url: productPng
  },
  {
    name: "Mochila Kuromi",
    url: productPng
  },
  {
    name: "Mochila Kuromi",
    url: productPng
  },
  {
    name: "Mochila Kuromi",
    url: productPng
  },
  {
    name: "Mochila Kuromi",
    url: productPng
  },
  {
    name: "Mochila Kuromi",
    url: productPng
  },
  {
    name: "Mochila Kuromi",
    url: productPng
  },
  {
    name: "Mochila Kuromi",
    url: productPng
  },
  {
    name: "Mochila Kuromi",
    url: productPng
  },
  {
    name: "Mochila Kuromi",
    url: productPng
  },


]

const Home = () => {

  return (
    <>
      <Navbar />
      <MiniNavbar />
      <div className={styles.ContentHome}>
        <div className={styles.ProductExample}>
          <div className={styles.ContentImgExample}>
            <svg className={styles.Blob1} xmlns="http://www.w3.org/2000/svg" width="691.169" height="725.064" viewBox="120.533 134.746 691.169 725.064"><defs><clipPath id="b"><path fill="currentColor" d="M807.5 644Q788 788 644 840t-255.5-32.5q-111.5-84.5-219-196t21-202q128.5-90.5 219-213t183-2Q685 315 756 407.5T807.5 644Z" /></clipPath><filter id="a" x="-50vw" y="-50vh" width="100vw" height="100vh"><feFlood floodColor="#fff" result="neutral-gray" /><feTurbulence type="fractalNoise" baseFrequency="2.5" numOctaves="100" stitchTiles="stitch" result="noise" /><feColorMatrix in="noise" type="saturate" values="0" result="destaturatedNoise" /><feComponentTransfer in="desaturatedNoise" result="theNoise"><feFuncA type="table" tableValues="0 0 0.5 0" /></feComponentTransfer><feBlend in="SourceGraphic" in2="theNoise" mode="soft-light" result="noisy-image" /></filter></defs><g filter="url(#a)" clipPath="url(#b)"><path fill="#FAC3E3" d="M807.5 644Q788 788 644 840t-255.5-32.5q-111.5-84.5-219-196t21-202q128.5-90.5 219-213t183-2Q685 315 756 407.5T807.5 644Z" /></g></svg>
            <svg className={styles.Blob2} xmlns="http://www.w3.org/2000/svg" width="691.169" height="725.064" viewBox="120.533 134.746 691.169 725.064"><defs><clipPath id="b"><path fill="currentColor" d="M807.5 644Q788 788 644 840t-255.5-32.5q-111.5-84.5-219-196t21-202q128.5-90.5 219-213t183-2Q685 315 756 407.5T807.5 644Z" /></clipPath><filter id="a" x="-50vw" y="-50vh" width="100vw" height="100vh"><feFlood floodColor="#fff" result="neutral-gray" /><feTurbulence type="fractalNoise" baseFrequency="2.5" numOctaves="100" stitchTiles="stitch" result="noise" /><feColorMatrix in="noise" type="saturate" values="0" result="destaturatedNoise" /><feComponentTransfer in="desaturatedNoise" result="theNoise"><feFuncA type="table" tableValues="0 0 0.5 0" /></feComponentTransfer><feBlend in="SourceGraphic" in2="theNoise" mode="soft-light" result="noisy-image" /></filter></defs><g filter="url(#a)" clipPath="url(#b)"><path fill="#FAC3E3" d="M807.5 644Q788 788 644 840t-255.5-32.5q-111.5-84.5-219-196t21-202q128.5-90.5 219-213t183-2Q685 315 756 407.5T807.5 644Z" /></g></svg>
            <img className={styles.ImgExample} src={productPng} alt="" />
          </div>
          <div className={styles.ContentDescription}>
            <div className={styles.DescriptionExample}>
              <p>Consigue los productos más lindos de todo el mundo.</p>
            </div>
            <div className={styles.miniDescription}>
              Vea los mejores productos al mejor precio
            </div>
            <div className={styles.DivButton}>
              <ThemeProvider theme={theme}>
                <Button className={styles.ButtonToProducts} variant="contained" color="neutral">
                <Link to="/Products">
                  Products
                </Link>
                </Button>
              </ThemeProvider>
            </div>
          </div>
        </div>

        <div className={styles.ListProducts}>
          {Products.map((product, index) =>
              <div key={index} className={styles.ProductCard}><img src={product.url} alt="" /></div>
            )}
          {/* <div>
            <img src={producPng} alt="" srcset="" />
          </div>
          <div>
            <img src={producPng} alt="" srcset="" />
          </div><div>
            <img src={producPng} alt="" srcset="" />
          </div><div>
            <img src={producPng} alt="" srcset="" />
          </div>
          <div>
            <img src={producPng} alt="" srcset="" />
          </div>
          <div>
            <img src={producPng} alt="" srcset="" />
          </div>
          <div>
            <img src={producPng} alt="" srcset="" />
          </div>
          <div>
            <img src={producPng} alt="" srcset="" />
          </div> */}

        </div>

      </div>
    </>

  );
};

export default Home;
