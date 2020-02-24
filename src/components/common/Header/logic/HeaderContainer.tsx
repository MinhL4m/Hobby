import React from 'react'
import { Header } from '../view/Header';

interface HeaderContainerProps {

}

export class HeaderContainer extends React.Component<HeaderContainerProps, { toggle: boolean }> {

    constructor(props: HeaderContainerProps) {
        super(props);

        this.state = {
            toggle: false,
        }
    }

    uncheck() {
        const top = document.querySelector('#top')
        const middle = document.querySelector('#middle')
        const bottom = document.querySelector('#bottom')
        const nav = document.querySelector('.header--nav')

        top?.classList.add('topuncheck')
        top?.classList.remove('topcheck')

        middle?.classList.add('middleuncheck')
        middle?.classList.remove('middlecheck')

        bottom?.classList.add('bottomuncheck')
        bottom?.classList.remove('bottomcheck')

        nav?.classList.add('header--navUncheck')
        nav?.classList.remove('header--navCheck')

        this.setState({ toggle: false })
    }

    check() {
        const top = document.querySelector('#top')
        const middle = document.querySelector('#middle')
        const bottom = document.querySelector('#bottom')
        const nav = document.querySelector('.header--nav')

        top?.classList.add('topcheck')
        top?.classList.remove('topuncheck')

        middle?.classList.add('middlecheck')
        middle?.classList.remove('middleuncheck')

        bottom?.classList.add('bottomcheck')
        bottom?.classList.remove('bottomuncheck')

        nav?.classList.add('header--navCheck')
        nav?.classList.remove('header--navUncheck')

        this.setState({ toggle: true })
    }

    componentDidMount() {
        const btn = document.querySelector('.header--btn')
        const ul = document.querySelector('.nav--link')

        btn?.addEventListener('click', () => {
            this.state.toggle ? this.uncheck() : this.check();
        })

        ul?.addEventListener('click', (e) => {
            const li = e.target as Element;
            if (li.tagName === 'A') {
                setTimeout(()=>{
                    this.state.toggle ? this.uncheck() : this.check();
                },200)
            }

        })

    }

    render() {
        return (
            <div>
                <Header />
            </div>);
    }
}