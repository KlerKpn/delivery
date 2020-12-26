import React from 'react'
import classes from './Item.module.scss'


const Item = (props) => {
    return (
        <div className={classes.Item}>
            <div key={props.index}>
                <h6>{props.el.name}</h6>
                <div>
                    <span>Price {props.el.price}</span>
                    <button className='btn btn-primary'>Buy</button>
                </div>
                <img className={classes.url} src={props.el.url} alt='' />

            </div>
        </div>
    )
}

export default Item