import React from 'react';
import { ChillingSVG } from '../../common/Header/view/ChillingSVG';
import { SearchingSVG } from '../../common/Header/view/SearchingSVG';
interface SoftSkillsProps {}

export const SoftSkills: React.FC<SoftSkillsProps> = ({}) => {
	return (
		<div className="softskills">
			<h1 className="about--header">Soft Skills</h1>
			<div className="softskills--description grid-2">
				<ChillingSVG />
				<div>
					<h2>Self Improve</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corporis eius sed numquam
						aspernatur recusandae vel facere, facilis voluptates saepe. Repellendus facere asperiores illum
						perspiciatis optio eos commodi, nesciunt facilis.
					</p>
				</div>
			</div>
			<div className="softskills--description grid-2">
				<SearchingSVG />
				<div>
					<h2>Always Curious</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corporis eius sed numquam
						aspernatur recusandae vel facere, facilis voluptates saepe. Repellendus facere asperiores illum
						perspiciatis optio eos commodi, nesciunt facilis.
					</p>
				</div>
			</div>
		</div>
	);
};
