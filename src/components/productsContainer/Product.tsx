import React, {FC} from 'react';

export interface IProductProps {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}

export type IProductTypeProps = IProductProps

const Product: FC<IProductTypeProps> = ({
                                            title,
                                            description,
                                            price,
                                            discountPercentage,
                                            rating,
                                            stock,
                                            brand,
                                            category,
                                            thumbnail,
                                            images
                                        }) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <ul>
                <li>Price: {price}</li>
                <li>Discount percentage: {discountPercentage}</li>
                <li>Rating: {rating}</li>
                <li>Stock: {stock}</li>
                rating
            </ul>
            <h4>Brand: {brand}</h4>
            <h5>{category}</h5>
            <h5>{thumbnail}</h5>

            <ul>
                {images?.map((image, index) => <img src={image} alt={title} key={index}/>)}
            </ul>

        </div>
    );
};

export default Product;