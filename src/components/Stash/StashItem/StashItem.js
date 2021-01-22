import React from 'react'
import classes from './StashItem.module.scss'
import ToggleCount from './../../UI/ToggleCount/ToggleCount';

const StashItem = props => {
    console.log(props)
    return (
        <div className={classes.StashItem}>

            <div className={classes.Head}>
                <div className={classes.label}>
                    {props.el.label}
                </div>
                <div className={classes.image}>
                    <img src={props.el.url} alt='' />
                </div>
            </div>
            <div className={classes.counter}>
                <ToggleCount
                    onPlus={() => props.counter(true, props.el.id)}
                    count={props.el.count}
                    onMinus={() => props.counter(false, props.el.id)}
                />
            </div>
        </div >
    )
}

export default StashItem