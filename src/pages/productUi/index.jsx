import Navbar from '../../components/navbar/Navbar';
import MiniNavbar from '../../components/miniNavbar';
import Style from './productUi.module.css'
import { useParams } from 'react-router-dom';

function ProductOnly() {
    let datos = useParams();
    console.log(datos)
    
    return (
        <>
            <Navbar />
            <MiniNavbar />
            <div className={Style.ProductContent}>
                
            </div>
        </>
    );
}

export default ProductOnly;