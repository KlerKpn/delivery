import React from 'react'
import classes from './Restaurants.module.scss'
import { connect } from 'react-redux';
import RestrItem from "./RestrItem";


const Restaurants = props => {
    console.log(props.data)
    return (
        <div className={classes.Restaurant}>
             {
                props.data.map((el, index) => {
                    return (
                        <RestrItem
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
        data: state.restrReducer.data
    }
}

export default connect(mapStateToProps)(Restaurants)