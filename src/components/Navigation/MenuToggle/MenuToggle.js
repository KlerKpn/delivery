import React from 'react'
import classes from './MenuToggle.module.scss'
import Button from './../../UI/Button/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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
                <Link
                    to='/stash'
                >
                    <Button
                        type='dark'
                    >
                        Корзина [{props.stash.length}]
                    </Button>
                </Link>

            </div>
        </>
    )
}

function mapStateToProps(state) {
    return {
        stash: state.dishReducer.stash
    }
}
export default connect(mapStateToProps)(MenuToggle)