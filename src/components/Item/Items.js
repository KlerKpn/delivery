import React from 'react'
import classes from './Item.module.scss'


const Item = (props) => {
    return (
        <div className={classes.Item}>
            <div key={props.index}>
                <img className={classes.url} src={props.el.url} alt='' />
                <div>Name:{props.el.name} age:{props.el.age}</div>
                <div>
                    <span>Price {props.el.price}</span>
                    <button className='btn btn-primary'>Buy</button>
                </div>
            </div>
        </div>
    )
}

export default Item