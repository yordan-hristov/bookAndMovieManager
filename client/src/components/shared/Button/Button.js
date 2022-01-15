import React, { useEffect, useState } from 'react';
import {ReactComponent as RedHeartIcon} from './assets/red-heart.svg';
import {ReactComponent as WhiteHeartIcon} from './assets/white-heart.svg';
import {ReactComponent as TickIcon} from './assets/green-tick.svg';
import {ReactComponent as CrossIcon} from './assets/red-cross.svg';
import {ReactComponent as PlusIcon} from './assets/green-plus.svg';
import {ReactComponent as MinusIcon} from './assets/red-minus.svg';

import './Button.scss'

const Button = ({svg,text,tooltip,clickHandler}) => {
    const svgs = {
        redHeart: RedHeartIcon,
        whiteHeart: WhiteHeartIcon,
        tick: TickIcon,
        cross: CrossIcon,
        plus: PlusIcon,
        minus: MinusIcon
    }

    const Svg = svgs[svg];    

    return (
        <div className='custom-button' onClick={clickHandler}>
            <Svg className="custom-button-icon" />
            <span>{text}</span>
            <span className="tooltip-text">{tooltip}</span>
        </div>
    );
}

export default Button;
