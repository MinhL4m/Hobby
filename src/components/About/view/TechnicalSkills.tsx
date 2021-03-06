import React from 'react';
import { ChartComponent } from '../../common/Chart/ChartComponent';
interface TechnicalSkillsProps {}

const chartProps = {
	labels: [ 'Java', 'JS', 'React', 'CSS', 'Kotlin' ],
	label: 'My Skill Lv',
	data: [ 80, 80, 70, 85, 60 ],
	backgroundColor: [
		'rgba(230, 0, 0,0.4)',
		'rgba(255, 255, 0,0.4)',
		'rgba(0, 0, 255,0.4)',
		'rgba(255, 51, 0,0.4)',
		'rgb(245, 133, 20,0.4)'
	],
	borderColor: [
		'rgba(230, 0, 0,1)',
		'rgba(255, 255, 0,1)',
		'rgba(0, 0, 255,1)',
		'rgba(255, 51, 0,1)',
		'rgb(245, 133, 20, 1)'
	]
};

export const TechnicalSkills: React.FC<TechnicalSkillsProps> = ({}) => {
	return (
		<div className="techskills">
			<h1 className="about--header">Technical Skills</h1>
			<ChartComponent {...chartProps} />
		</div>
	);
};
