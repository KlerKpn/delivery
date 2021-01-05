import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Item from '../Item/Items'
import Search from '../Search/Search'
import classes from './ListItems.module.scss'

const ListItems = props => {

    const [data, setData] = useState()

    function search(value) {
        const filterData = props.data.filter(el => {
            if (el.label.toLowerCase().includes(value.toLowerCase())) {
                return el
            } 
        })
        setData(prev => prev = filterData)
    }

    useEffect(() => {
        console.log(props.data)
        setData(prev => prev = props.data)
    }, [])

    return (
        <>
            <Search
                onChange={search}
            />
            <h2>Все блюда</h2>
            <div className={classes.ListItems}>
                {
                    data
                        ? data.map((el, index) => {
                            return (
                                <Item
                                    key={index}
                                    el={el}
                                />
                            )
                        })
                        : null
                }
            </div>
        </>
    )
}

function mapStateToProps(state) {
    return {
        data: state.dishReducer.data
    }
}

export default connect(mapStateToProps)(ListItems)