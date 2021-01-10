import React, { useState } from 'react'
import classes from './StashItem.module.scss'


const StashItem = props => {

    const [count, setCount] = useState()

    function counter(type) {

    }
    console.log(props.el)
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
                <button onClick={() => counter('plus')}>+</button>
                <div> {props.el.count}
                </div>
                <button onClick={() => counter('minus')}>-</button>
            </div>
        </div>
    )
}

export default StashItem