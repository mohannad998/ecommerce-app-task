import React, { useEffect, useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Woocommerce from '../woocomerce/woocomerce';
import './advancedcaroisel.css'; // Import your custom CSS file

const AdvancedCarousel = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await Woocommerce.getProducts();
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setIsLoading(false);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="slider-container">
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <Slide indicators={false}>
                    {data.map((productData) => (
                        <div className="each-slide-effect" key={productData.id}>
                            <div className="slide-image" style={{ backgroundImage: `url(${productData.images[0].src})` }}>
                                <div className="product-details">
                                    <a href={productData.permalink}><h3>{productData.name}</h3>
                                        <p className="price">
                                            {productData.sale_price ? (
                                                <span className="sale-price">${productData.sale_price}</span>
                                            ) : (
                                                <span className="regular-price">${productData.regular_price}</span>
                                            )}
                                        </p>
                                    </a>
                                    <button className="add-to-cart-btn">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slide>
            )}
        </div>
    );
};

export default AdvancedCarousel;
