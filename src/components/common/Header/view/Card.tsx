import React from 'react';
import '../style/Card.css';

interface CardProps {
	url: string;
	Backside: React.FunctionComponent;
}

export const Card: React.FC<CardProps> = ({ url, Backside }) => {
	return (
		<div className="card">
			<img src={url} />
			<div className="descriptions">
				<Backside/>
			</div>
		</div>
	);
};
