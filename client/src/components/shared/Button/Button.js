import React, { useEffect, useState } from 'react';
import {ReactComponent as RedHeartIcon} from './assets/red-heart.svg';
import {ReactComponent as WhiteHeartIcon} from './assets/white-heart.svg';
import {ReactComponent as TickIcon} from './assets/green-tick.svg';
import {ReactComponent as PlusIcon} from './assets/green-plus.svg';

import './Button.scss'

const Button = ({svg,text,tooltip}) => {
    const [CurrentSvg, setCurrentSvg] = useState(RedHeartIcon);

    useEffect(() => {
        setCurrentSvg(svgs[svg])
    }, []);

    const svgs = {
        redHeart: RedHeartIcon,
        whiteHeart: WhiteHeartIcon,
        tick: TickIcon,
        plus: PlusIcon
    }

    return (
        <div className='custom-button'>
            <CurrentSvg className="custom-button-icon" />
            <span>{text}</span>
            <span className="tooltip-text">{tooltip}</span>
        </div>
    );
}

export default Button;
