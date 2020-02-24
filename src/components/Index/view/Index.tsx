import React from 'react'

interface IndexProps {

}

export const Index: React.FC<IndexProps> = ({ }) => {
    return (
        <div className='index'>
            <div className='index--background'>
                <div>
                    <h1>Minh Lam</h1>
                    <h2 className='index--text'></h2>
                </div>
            </div>
        </div>
    );
}