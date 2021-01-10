import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import StashItem from './../StashItem/StashItem';

const StashPage = props => {

    const [array, setArray] = useState([])

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

    useEffect(() => {
        renderHandler()
    }, [])

    return (
        <div>
            <div>Кoрзина</div>
            <div>
                {
                    [...new Set(array)].map(el => {
                        return (
                            <StashItem el={el} />
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