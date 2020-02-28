import React from 'react';
import { Introduction } from './Introduction';
import { Education } from './Education';
import { TechnicalSkills } from './TechnicalSkills';
import { SoftSkills } from './SoftSkills';
import { FindMore } from './FindMore';

interface AboutProps {}

export const About: React.FC<AboutProps> = ({}) => {
	return (
		<section className="about">
			<div className="container">
				<Introduction />
				<hr />
				<Education />
				<hr />
				<TechnicalSkills />
				<hr />
				<SoftSkills />
				<hr />
				<FindMore />
			</div>
		</section>
	);
};
