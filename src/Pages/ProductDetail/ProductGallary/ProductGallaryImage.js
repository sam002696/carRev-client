import React from 'react';
import { Carousel } from 'react-carousel-minimal';

const ProductGallaryImage = ({ gallaryImage }) => {

    const { gimg1, gimg2, gimg3, gimg4, gimg5, gimg6 } = gallaryImage;


    const data = [
        {
            image: `${gimg1}`
        },
        {
            image: `${gimg2}`
        },
        {
            image: `${gimg3}`
        },
        {
            image: `${gimg4}`
        },
        {
            image: `${gimg5}`
        },
        {
            image: `${gimg6}`
        }
    ];



    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }

    return (
        <div>
            <div style={{ textAlign: "center" }}>

                <div style={{
                    padding: "0 20px"
                }}>
                    <Carousel
                        data={data}
                        time={1500}
                        width="850px"
                        height="500px"
                        captionStyle={captionStyle}
                        radius="10px"
                        slideNumber={false}
                        slideNumberStyle={slideNumberStyle}
                        captionPosition="bottom"
                        automatic={true}
                        dots={true}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        slideBackgroundColor="darkgrey"
                        slideImageFit="cover"
                        thumbnails={true}
                        thumbnailWidth="100px"
                        style={{
                            textAlign: "center",
                            maxWidth: "850px",
                            maxHeight: "500px",
                            margin: "40px 0px",
                        }}
                    />
                </div>
            </div>

        </div>
    );
};

export default ProductGallaryImage;