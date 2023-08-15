import React, { useState } from "react";
import PropTypes from 'prop-types';
import Product from '../../containers/Product';

const ProductList = ({ products }) => {

    const [filteredList, setFilteredList] = new useState(products);

    const filterBySearch = (event) => {
        // Access input value
        const query = event.target.value;
        // Create copy of item list
        var updatedList = [...products];
        // Include all elements which includes the search query
        updatedList = updatedList.filter((item) => {
          return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        // Trigger render with updated values
        setFilteredList(updatedList);
      };

    return (
        <div>
            <div className="search-header">
        <div className="search-text">Search: <input id="search-box" onChange={filterBySearch} /></div>
        
      </div>
      <br/>
            <ul className="product-list">
              {filteredList.map(product => (
                  <li key={product.id} className="product-list__item">
                    <Product {...product} />
                  </li>
              ))}
            </ul>
        </div>
    );
}

ProductList.propTypes = {
    products: PropTypes.array,
}

export default ProductList;
