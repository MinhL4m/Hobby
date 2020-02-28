import React from 'react';
import { Card } from '../../common/Header/view/Card';
interface EducationProps {}

const backSideVietnam: React.FunctionComponent<{}> = ({}) => {
	return (
		<div className="card--vietnam">
			<h1>Vietnam</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum voluptas quos dignissimos quibusdam?
				Quas dolorem commodi eaque id maiores temporibus, debitis asperiores nostrum, sapiente sint voluptas?
				Similique, exercitationem voluptates repellendus repellat praesentium minus nihil ab qui consectetur,
				neque, dolore labore.
			</p>
		</div>
	);
};

const backSideCanada: React.FunctionComponent<{}> = ({}) => {
	return (
		<div className="card--canada">
			<h1>Canada</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum voluptas quos dignissimos quibusdam?
				Quas dolorem commodi eaque id maiores temporibus, debitis asperiores nostrum, sapiente sint voluptas?
				Similique, exercitationem voluptates repellendus repellat praesentium minus nihil ab qui consectetur,
				neque, dolore labore.
			</p>
		</div>
	);
};

export const Education: React.FC<EducationProps> = ({}) => {
	return (
		<div className="education">
			<h1 className="about--header">Education Journal</h1>
			<Card url="/asset/img/img-2.jpg" Backside={backSideVietnam} />
			<Card url="/asset/img/img-3.jpg" Backside={backSideCanada} />
		</div>
	);
};
