import React from 'react'

const FirstSelect = (props) => {
    const data = props.data;
    
    return (
        <>
            <option value={data.money}>{data.name}</option>
        </>
    )
}

export default FirstSelect
