import React from 'react'
import { connect } from 'react-redux';
import Item from '../Item/Items'
import classes from './ListItems.module.scss'

const ListItems = props => {
    return (
        <div className={classes.ListItems}>
            {
                props.data.map((el, index) => {
                    return (
                        <Item
                            key={index}
                            el={el}
                        />
                    )
                })
            }
        </div>
    )

}

function mapStateToProps(state) {
    return {
        data: state.dishReducer.data
    }
}

export default connect(mapStateToProps)(ListItems)