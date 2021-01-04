import React from 'react'
import classes from './MenuToggle.module.scss'

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
        <div className={classes.Head}>
            {
                props.menu
                    ? null

                    : 
                        <i
                            className={cls.join(' ')}
                            onClick={props.onToggle}
                        />
                    
            }
        </div>
    )
}

export default MenuToggle