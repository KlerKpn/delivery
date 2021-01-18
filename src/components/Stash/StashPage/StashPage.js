import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import StashItem from './../StashItem/StashItem';
import classes from './StashPage.module.scss'
import Button from './../../UI/Button/Button';

const StashPage = props => {

    const [array, setArray] = useState([])
    const [price, setPrice] = useState(0)
    const [buy, setBuy] = useState(false)

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

    let buyLink = `https://yoomoney.ru/quickpay/shop-widget?writer=seller&targets=%D0%9E%D0%B1%D1%89%D0%B0%D1%8F%20%D1%81%D1%83%D0%BC%D0%BC%D0%B0%20%D0%BF%D0%BE%D0%BA%D1%83%D0%BF%D0%BE%D0%BA&targets-hint=&default-sum=${price}&button-text=11&payment-type-choice=on&address=on&hint=&successURL=https%3A%2F%2Fdelivery-service-c232f.web.app%2F&quickpay=shop&account=4100116381229704`

    return (
        <div className={classes.StashPage}>
            <div className={classes.StashForm}>
                <div className={classes.StashTitle}>Кoрзина</div>
                {
                    buy
                        ? <iframe
                            title=' '
                            src={buyLink}
                            width="100%"
                            height="222"
                            frameborder="0"
                            allowtransparency="true"
                            scrolling="no">
                        </iframe>

                        : <div className={classes.Buy}>
                            <span className={classes.Price}>{price} руб.</span>
                            <div>
                                <Button
                                    type='dark'
                                    onClick={() => setBuy(!buy)}
                                >
                                    Оформить заказ
                                </Button>
                            </div>
                        </div>
                }

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
        </div >
    )
}

function mapStateToProps(state) {
    return {
        data: state.dishReducer.stash
    }
}

export default connect(mapStateToProps)(StashPage)