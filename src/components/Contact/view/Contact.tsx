import React from 'react'
import { IconLookup, IconDefinition, findIconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
interface ContactProps {

}

const mailLookup: IconLookup = { prefix: 'fas', iconName: 'envelope' }
const mailIcon: IconDefinition = findIconDefinition(mailLookup)

const fbLookup: IconLookup = { prefix: 'fab', iconName: 'facebook-square' }
const fbIcon: IconDefinition = findIconDefinition(fbLookup)

const lkLookup: IconLookup = { prefix: 'fab', iconName: 'linkedin' }
const lkIcon: IconDefinition = findIconDefinition(lkLookup)

const gitLookup: IconLookup = { prefix: 'fab', iconName: 'github-square' }
const gitIcon: IconDefinition = findIconDefinition(gitLookup)

export const Contact: React.FC<ContactProps> = ({ }) => {

    return (
        <div>
            <FontAwesomeIcon icon={fbIcon} />
        </div>
    );
} 