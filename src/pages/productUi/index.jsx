import Navbar from '../../components/navbar/Navbar';
import MiniNavbar from '../../components/miniNavbar';
import Style from './productUi.module.css'
import { useParams } from 'react-router-dom';
import ProductOnlyComponent from './components/ProductOnly';
import DescriptionProduct from './components/DescriptionProduct';
import { useSelector } from 'react-redux';

function ProductUi() {
    let nameProduct = useParams();
    nameProduct = nameProduct.id.replace(/[A-Z]+/g, ' $&').trim(); 
    const products = useSelector(store => store.products.find(product => product.name === nameProduct));

    return (
        <>
            <Navbar />
            <MiniNavbar />
            <div className={Style.ProductContent}>
                {products && <ProductOnlyComponent productUrl={products.url}/>}
                {products && <DescriptionProduct product={products}/>}
            </div>
        </>
    );
}

export default ProductUi;