import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../features/todo/productsSlice';

const Products = () => {

    const dispatch = useDispatch();
    const {items, status, error} = useSelector((state) => state.products);

    useEffect(() => {
        if(status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [dispatch, status]);

  return (
    <>
        <h2>Products</h2>
        {status === 'loading' && <p>Loading...</p>}
        {status === 'failed' && <p>"Error": {error}</p>}
        {status === 'succeeded' && (
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <strong>Price: ${item.price}</strong>
                        <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px' }} />
                    </li>
                ))}
            </ul>
        )}
    </>
  )
}

export default Products