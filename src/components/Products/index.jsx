import Style from './Products.module.css'
import CardProduct from '../CardProduct';
import { useSelector } from 'react-redux';
import { FormControl, MenuItem, Select } from '@mui/material';
import { useState } from 'react';

function ProductsAndFilters() {
    const products2 = useSelector((state) => state.products)
    const [Order, setOrder] = useState(0);
    const [Count, setCount] = useState(0);
    const handleChangeOrder = (event) => {
        setOrder(event.target.value);
    };
    const handleChangeCount = (event) => {
        setCount(event.target.value);
    };

    return (
        <>
            <div className={Style.HeaderAndFilters}>
                <div className={Style.HeaderTittle}>
                    <p>Productos</p>
                </div>
            </div>
            <div className={Style.FiltersContent}>
                <div className={Style.Filters}>
                    <div className={Style.Filter}>
                        <p className={Style.TypeOrder}>Ordenar por:</p>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={Order}
                                onChange={handleChangeOrder}
                                label="Age"
                            >
                                <MenuItem disabled value="0">
                                    <em>Seleccionar</em>
                                </MenuItem>
                                <MenuItem value={10}>Menor Precio</MenuItem>
                                <MenuItem value={20}>Mayor Precio</MenuItem>
                                <MenuItem value={30}>Nombre Asc</MenuItem>
                                <MenuItem value={40}>Nombre Desc</MenuItem>
                            </Select>
                        </FormControl>

                    </div>
                    <div className={Style.Filter}>
                        <p className={Style.TypeOrder}>Mostrar:</p>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={Count}
                                onChange={handleChangeCount}
                                label="Age"
                            >
                                <MenuItem disabled value="0">
                                    <em>Seleccionar</em>
                                </MenuItem>
                                <MenuItem value={10}>12</MenuItem>
                                <MenuItem value={20}>24</MenuItem>
                                <MenuItem value={30}>48</MenuItem>
                                <MenuItem value={40}>96</MenuItem>
                            </Select>
                        </FormControl>

                    </div>
                </div>
            </div>
            <div className={Style.ContentProducts}>
                {products2.map((product, key) => <CardProduct key={key} props={product} />)}
            </div>
        </>
    );
}

export default ProductsAndFilters;