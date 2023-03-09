// import Navbar from "../../components/navbar/Navbar";
import styles from "./home.module.css";
import producPng from '../../img/productExample.png'

const Home = () => {
    
    return (
        <div className={styles.ContentHome}>
          <div className={styles.ContentImgExample}>
            <img className={styles.ImgExample} src={producPng} alt="" />
          </div>
          <div className={styles.ContentDescription}>
            <div className={styles.DescriptionExample}>
              <p>Consigue los productos más lindos de todo el mundo.</p>
            </div>
            <div className={styles.miniDescription}>
              Vea los mejores productos al mejor precio
            </div>
            <button>Ver Productos</button>
          </div>
        </div>
    );
};

export default Home;
