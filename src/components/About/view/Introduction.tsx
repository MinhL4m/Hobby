import React from 'react';

interface IntroductionProps {}

export const Introduction: React.FC<IntroductionProps> = ({}) => {
	return (
		<div className="introduction">
			<h1 className="about--header">Briefly about myself</h1>
			<div className="grid-2">
				<img src={'/asset/img/img-1.jpg'} data-src="" />

				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, cumque labore repellat quibusdam
					saepe sunt nam illo libero reprehenderit corporis nostrum debitis necessitatibus veniam, dolorem
					culpa. Facilis et quidem, id soluta sint temporibus a quas vel voluptas, ut dolore laborum, rem
					architecto. Est, pariatur fugiat! Earum neque rerum sed eum!
				</p>
			</div>
		</div>
	);
};
