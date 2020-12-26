import React, { Component } from 'react'
import Item from '../Item/Items'
import pizzaList from './../../assets/pizzaList/pizzaList'

class ListItems extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        this.setState({
            data: pizzaList
        })
    }

    render() {
        return (
            <div style={{ display: 'flex' }}>
                {
                    this.state.data.map((el, index) => {
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
}

export default ListItems