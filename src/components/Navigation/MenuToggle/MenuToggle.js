import React from 'react'
import classes from './MenuToggle.module.scss'
import Button from './../../UI/Button/Button';

const MenuToggle = props => {
    const cls = [
        classes.MenuToggle,
        'fa',
    ]

    if (props.menu) {
        cls.push('fa-times')
        // cls.push(classes.open)
    } else {
        cls.push('fa-bars')
    }

    return (
        <>
            <div className={classes.Head}>
                <i
                    className={cls.join(' ')}
                    onClick={props.onToggle}
                />
                <Button
                    type='primary'
                >
                    корзина
                    </Button> 
            </div>
        </>
    )
}

export default MenuToggle