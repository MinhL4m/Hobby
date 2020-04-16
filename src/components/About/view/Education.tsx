import React from 'react';
import { Card } from '../../common/Card/View/Card';
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
	React.useEffect(() => {
		const options = {
			threshold: 0,
			rootMargin: '-30px'
		};

		const card = document.getElementsByClassName('card');
		const observer1 = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) {
					card[0].classList.remove('inScreen1');
				} else {
					card[0].classList.add('inScreen1');
				}
			});
		}, options);
		observer1.observe(card[0]);

		const observer2 = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) {
					card[1].classList.remove('inScreen2');
				} else {
					card[1].classList.add('inScreen2');
				}
			});
		}, options);
		observer2.observe(card[1]);

		return () => {
			// cleanup
		};
	}, []);

	return (
		<div className="education">
			<h1 className="about--header">Education Journal</h1>
			<Card url="/asset/img/img-2.jpg" Backside={backSideVietnam} />
			<Card url="/asset/img/img-3.jpg" Backside={backSideCanada} />
		</div>
	);
};
