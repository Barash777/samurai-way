import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import Header from '../components/Header/Header';
import App from "../App";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Header">
                <Header/>
            </ComponentPreview>
            <ComponentPreview path="/PaletteTree">
                <PaletteTree/>
            </ComponentPreview>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;