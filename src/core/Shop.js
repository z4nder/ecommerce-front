import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import Card from "./Card";
import { getCategories } from './apiCore'
import Checkbox from './Checkbox'

const Shop = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);

  // Load
  const init = () => {
    getCategories().then(data => {
      if (data.error) {
        setError({ ...data, error: data.error });
      } else {
        setCategories(data);
      }
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Layout
      title="Home Page"
      description="Search and find books of your choice"
      className="container-fluid"
    >
      <div className="row">
        <div className="col-4">
          <h4>Filter by categories</h4>
          <ul>
          <Checkbox categories={categories}/>
          </ul>          
        </div>

       
      </div>
    </Layout>
  );
};

export default Shop;
