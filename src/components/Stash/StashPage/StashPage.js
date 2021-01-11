import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import StashItem from './../StashItem/StashItem';
import classes from './StashPage.module.scss'
import Button from './../../UI/Button/Button';

const StashPage = props => {

    const [array, setArray] = useState([])
    const [price, setPrice] = useState(0)

    function renderHandler() {  
        props.data.forEach(el => {
            const arr = props.data.filter(item => item === el)
            const count = arr.length
            const item = arr[0]
            Object.defineProperty(item, 'count', {
                writable: true,
                value: count
            })
            setArray(prev => [...prev, item])
        })
    }

    function countPrice() {
        const currentPrice = props.data.reduce((acc, item) => {
            return acc += item.price
        }, 0)
        setPrice(prev => prev = currentPrice)
    }

    useEffect(() => {
        renderHandler()
        countPrice()
    }, [])

    return (
        <div className={classes.StashPage}>
            <div className={classes.StashForm}>
                <div className={classes.StashTitle}>Кoрзина</div>
                <div className={classes.Buy}>
                    <span className={classes.Price}>{price} руб.</span>
                    <div>
                        <Button
                            type='dark'
                        >
                            Оформить заказ
                            </Button>
                    </div>
                </div>
            </div>
            <div>
                {
                    [...new Set(array)].map((el, index) => {
                        const key = index
                        return (
                            <StashItem
                                key={key}
                                el={el}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        data: state.dishReducer.stash
    }
}

export default connect(mapStateToProps)(StashPage)