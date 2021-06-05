import React from "react";

import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';
import { Gallery as GalleryLib, Item } from 'react-photoswipe-gallery';

import pictures from "../resources/pictures.json";

//const images = require.context('../../public/gallerypics', true);


class Gallery extends React.Component {
    render() {
        return (
            <GalleryLib>
                <div className="container">
                    <div className="columns is-multiline is-centered">
                        {this.generatePicItems()}
                    </div>
                </div>
            </GalleryLib>
        );
    }

    generatePicItems() {
        let out = [];

        for (let i = 0; i < pictures.length; i++) {

            const url = "http://localhost:5000/api/pictures/";

            out.push(
                <div className="column is-one-third has-text-centered">
                    <Item
                        id={i}
                        key={i}
                        original={url + pictures[i].image}
                        thumbnail={url + pictures[i].image + "/thumbnail"}
                        width={pictures[i].width}
                        height={pictures[i].height}
                    >
                        {({ ref, open }) => (
                            <img ref={ref} onClick={open} src={url + pictures[i].image + "/thumbnail"} />
                        )}
                    </Item>
                </div>
            );
        }


        console.log(out);
        return out;
    }
}

export default Gallery;
