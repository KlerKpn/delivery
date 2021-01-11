import React from 'react'
import classes from './Item.module.scss'
import Button from './../UI/Button/Button';
import { connect } from 'react-redux';
import { addToStash } from './../../store/actions/actionDish';


const Item = (props) => {
    return (
        <div className={classes.Item}>
            <div key={props.index} style={{ width: '100%' }}>
                <div className={classes.Item_head}>
                    <div className={classes.Item_label}>{props.el.label}</div>
                    <div className={classes.Money}>
                        <span className={classes.Items_price}>{props.el.price} руб.</span>
                        <Button
                            type='primary'
                            onClick={() => props.toStash(props.el)}
                        >
                            В корзину
                        </Button>
                    </div>
                </div>
                <img className={classes.url} src={props.el.url} alt='' />
            </div>
        </div>
    )
}
function mapDispatchToProps(dispatch) {
    return {
        toStash: el => dispatch(addToStash(el))
    }
}

export default connect(null, mapDispatchToProps)(Item)