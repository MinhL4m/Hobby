import React, { useEffect } from 'react';

interface IndexProps {}

function decrypt() {
	const letters = document.getElementsByTagName('span');
	setTimeout(() => (letters[0].innerHTML = 'M'), 800);
	setTimeout(() => (letters[1].innerHTML = 'i'), 1300);

	setTimeout(() => (letters[2].innerHTML = 'n'), 950);

	setTimeout(() => (letters[3].innerHTML = 'h'), 700);

	setTimeout(() => (letters[5].innerHTML = 'L'), 1500);

	setTimeout(() => (letters[6].innerHTML = 'a'), 1700);

	setTimeout(() => (letters[7].innerHTML = 'm'), 1800);
}

function random() {
	const letters = document.getElementsByTagName('span');

	for (let index = 0; index < 7; index++) {
		if (index !== 4) {
			letters[index].innerHTML = randomChar();
		}
	}
}

function randomChar() {
	var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#@!$%&abcdefghijklmnoprstuvwxyz#@!$%&';
	return characters.charAt(Math.floor(Math.random() * characters.length));
}

export const Index: React.FC<IndexProps> = ({}) => {
	useEffect(() => {
		random();
		decrypt();
	}, []);

	return (
		<div className="index">
			<div className="index--background">
				<div>
					<div>
						<span>I</span>
						<span>&nbsp;</span>
						<span>a</span>
						<span>m</span>
						<span>&nbsp;</span>
						<span>d</span>
						<span>e</span>
						<span>v</span>
					</div>
					<h2 className="index--text" />
				</div>
			</div>
		</div>
	);
};
