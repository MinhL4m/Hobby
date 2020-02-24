import React from 'react'
import WAVES from 'vanta/dist/vanta.waves.min'
import { Index } from '../view/Index'

interface IndexContainerProps {

}

export class IndexContainer extends React.Component<IndexContainerProps, {}>{

    constructor({ }) {
        super({})
    }


    componentDidMount() {
        let vantaEffect = WAVES({
            el: '.index--background',
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x898989,
            shininess: 7.00,
            waveHeight: 7.00,
            waveSpeed: 0.5,
            zoom: 1.5
        });
    }

    render() {
        return (
            <Index />
        );
    }

}