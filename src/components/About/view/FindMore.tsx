import React from 'react';
import { Link } from 'react-router-dom';
interface FindMoreProps {}

export const FindMore: React.FC<FindMoreProps> = ({}) => {
	return (
		<div className="find">
			<h1 className="about--header">Want to know more about me?</h1>
			<div>
				<Link to="/contact" className="find--btn">
					Contact Me
				</Link>
			</div>
		</div>
	);
};
