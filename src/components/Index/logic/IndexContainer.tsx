import React from 'react'
import WAVES from 'vanta/dist/vanta.waves.min'
import {Index} from '../view/Index'

interface IndexContainerProps {

}

export class IndexContainer extends React.Component<IndexContainerProps, {}>{

    constructor({ }) {
        super({})
    }


    componentDidMount() {
        let vantaEffect = WAVES({
            el: '.index--background',
            color: 0x000000,
            waveHeight: 20,
            shininess: 20,
            waveSpeed: 1.3,
            zoom: 0.75
        });
    }

    render() {
        return (
            <Index/>
        );
    }

}