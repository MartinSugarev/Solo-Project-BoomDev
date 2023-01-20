import styles from './Avatar.module.scss';
import React from 'react';
import classNames from 'classnames';


export default function Avatar({size = 90, url , verified = false}){
    return (
       <div className={classNames(styles['avatar'])} style={{width: size + 'px', height: size + 'px'}} >
            <img className={classNames(styles['image'])}  src={url} alt="Image"/>
         {verified && <img className={classNames(styles['badge'])}  src={'/images/verified.svg'}/> }
       </div>
    );
    };
