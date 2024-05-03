'use client';

import React, { useEffect, useState } from 'react';
import { Table } from 'antd';

const Product: React.FC = () => {
  const [products, setProducts] = useState([]);

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
      key: 'brand',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Stock',
      dataIndex: 'stock',
      key: 'stock',
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
    },
    {
      title: 'Thumbnail',
      dataIndex: 'thumbnail',
      key: 'thumbnail',
      render: (text: any, record: any) => (
        <img src={text} alt={record.title} style={{ height: '50px', width: '50px' }} />
      )
    },
  ];

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data.products);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      })
  }, []);

  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <Table columns={columns} dataSource={products} rowKey="id" />
    </div>
  );
}

export default Product;