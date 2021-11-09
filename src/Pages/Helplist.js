import React from 'react';
import Binoculars from '../Images/Binoculars.png';
import Building from '../Images/Building.png';
import Files from '../Images/Files.png';
import Key from '../Images/Key.png';
import Money from '../Images/Money - Alt.png';
import Podcast from '../Images/Podcast.png';

export const Helplist = [
    {
        icons: <img src={Binoculars} />,
        header: 'Getting Started',
        text: 'Everything you need to know to get started and use RealExplorer.',
        cName: 'help-list',
        color: '#FFDEC7'
    },
    {
        icons: <img src={Key} />,
        header: 'Using RealExplorer',
        text: 'From channels to search, learn how RealExplorer works from top to bottom.',
        cName: 'help-list',
        color: '#E3DCFE'
    },
    {
        icons: <img src={Podcast} />,
        header: 'Advertise',
        text: 'How to make your house look prominent than others.',
        cName: 'help-list',
        color: '#F9D9EA'
    },
    {
        icons: <img src={Files} />,
        header: 'Seller Terms',
        text: 'Learn how to join seller on RealExplorer Housing products.',
        cName: 'help-list',
        color: '#FFDEC7'

    },
    {
        icons: <img src={Money} />,
        header: 'Become a buyer',
        text: 'Tips from us to be a smart buyer and safe transaction.',
        cName: 'help-list',
        color: '#E3DCFE'
    },
    {
        icons: <img src={Building} />,
        header: 'Be an Agent',
        text: 'You want to be an agent? You can learn some tips here.',
        cName: 'help-list',
        color: '#F9D9EA'

    },
]

