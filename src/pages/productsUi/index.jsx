import MiniNavbar from '../../components/miniNavbar';
import Navbar from '../../components/navbar/Navbar';
import ProductsAndFilters from '../../components/Products';
import styles from './ProductsUi.module.css'

function ProductsUi() {
    return (
        <>
            <Navbar />
            <MiniNavbar />
            <div className={styles.ContentProductsUi}>
                <ProductsAndFilters />
            </div>
        </>
    );
}

export default ProductsUi;