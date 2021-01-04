import React from 'react'

const BrandPage = props =>{
    console.log(props.match.params)
    return (
        <div>
            {props.match.params.id}
        </div>
    )
}

export default BrandPage