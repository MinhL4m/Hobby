import React from 'react';
import { IconLookup, IconDefinition, findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
interface ContactProps {}

library.add(fab, fas);

const mailLookup: IconLookup = { prefix: 'fas', iconName: 'envelope' };
const mailIcon: IconDefinition = findIconDefinition(mailLookup);

const fbLookup: IconLookup = { prefix: 'fab', iconName: 'facebook-square' };
const fbIcon: IconDefinition = findIconDefinition(fbLookup);

const lkLookup: IconLookup = { prefix: 'fab', iconName: 'linkedin' };
const lkIcon: IconDefinition = findIconDefinition(lkLookup);

const gitLookup: IconLookup = { prefix: 'fab', iconName: 'github-square' };
const gitIcon: IconDefinition = findIconDefinition(gitLookup);

export const Contact: React.FC<ContactProps> = ({}) => {
	return (
		<div className="contact">
            <h1>Contact Me Via</h1>
			<div className="contact--container">
				<a className='contact--icon' href='#'><FontAwesomeIcon icon={mailIcon} size="3x" /></a>
				<a className='contact--icon' href='#'><FontAwesomeIcon icon={fbIcon} size="3x" /></a>
				<a className='contact--icon' href='#'><FontAwesomeIcon icon={lkIcon} size="3x" /></a>
				<a className='contact--icon' href='#'><FontAwesomeIcon icon={gitIcon} size="3x" /></a>
			</div>
		</div>
	);
};
