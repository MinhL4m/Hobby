import React from 'react';
import { Contact } from '../view/Contact';

interface ContactContainerProps {}

const mouseMove = (e: MouseEvent) => {
	// const aList: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName('contact--icon') as HTMLCollectionOf<HTMLElement>;
    
	let x = e.clientX * 100 / window.innerWidth / 5 -10;
	let y = e.clientY * 100 / window.innerHeight / 5 -10;

	// for (let index = 0; index < aList.length; index++) {
    //     const a: HTMLElement | null = aList.item(index)
    //     if(a!== null){
    //         console.log(x,y)
    //         a.style.boxShadow = `${x}px,${y}px 8px 0 rgba(0, 0, 0, 0.2)`;
    //     }
    // }
    const contact:HTMLElement|null = document.querySelector('.contact--container')
    if( contact !== null){
        console.log(contact)
        contact.style.boxShadow = `${x*-1}px ${y*-1}px 8px 0 rgba(0, 0, 0, 0.2)`
    }
};

export class ContactContainer extends React.Component<ContactContainerProps, {}> {
	componentDidMount() { 
        const contact : HTMLElement | null = document.querySelector('.contact')
        contact?.addEventListener('mousemove',mouseMove)
    }

	componentWillUnmount() {
        const contact : HTMLElement | null = document.querySelector('.contact')
        contact?.removeEventListener('mousemove',mouseMove)
    }

	render() {
		return <Contact />;
	}
}
