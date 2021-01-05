import React from 'react'
import classes from './Item.module.scss'
import Button from './../UI/Button/Button';


const Item = (props) => {
    return (
        <div className={classes.Item}>
            <div key={props.index} style={{ width: '100%' }}>
                <h6>{props.el.label}</h6>
                <div className={classes.Money}>
                    <span>Price {props.el.price}</span>
                    <Button
                        type='primary'
                    >
                        Add to card
                    </Button>
                </div>
                <img className={classes.url} src={props.el.url} alt='' />
            </div>
        </div>
    )
}

export default Item