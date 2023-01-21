import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const news = useLoaderData();
    return (
        <div>
            <p>This category has {news.length}</p>
        </div>
    );
};

export default Category;