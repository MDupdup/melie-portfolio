import React from "react";

import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';
import { Gallery as GalleryLib, Item } from 'react-photoswipe-gallery';

import pictures from "../resources/pictures.json"

const images = require.context('../resources/gallerypics', true);


class Gallery extends React.Component {
    render() {
        return (
            <GalleryLib>

            </GalleryLib>
        );
    }

    generateItems() {
        let out = [];

        for (let i = 0; i < pictures.length; i++) {

            out.push(
                <Item
                    id={i}
                    key={i}
                    original={images("./P1010866.JPG")}
                    thumbnail="https://placekitten.com/80/60?image=1"
                    width={pictures[i].width}
                    height={pictures[i].height}
                >
                    {({ ref, open }) => (
                        <img ref={ref} onClick={open} src="https://placekitten.com/80/60?image=1" />
                    )}
                </Item>
            );
        }


        console.log(out);
        return out;
    }
}

export default Gallery;
