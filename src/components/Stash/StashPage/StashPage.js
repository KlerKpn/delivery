import React from 'react'
import { connect } from 'react-redux';
import Items from '../../Item/Items';

const StashPage = props => {
    return (
        <div>
            <div>КОрзина</div>
            <div>
                {
                    props.data.map(el => {
                        return (
                            <Items el={el} />
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