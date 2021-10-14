import React, { useState } from 'react'

const arraydata = [
    {
        id: 1,
        name: 'Jhon Doe'
    },
    {
        id: 2,
        name: 'Schilbert Austin'
    },
    {
        id: 3,
        name: 'Mark Austin'
    },
    {
        id: 4,
        name: 'Roger Furo'
    },
]

const UseStateArray = () => {
    const [data, setData] = useState(arraydata)
    const removeId = (id) => {
        let newdata = data.filter((value) => value.id !== id)
        setData(newdata)
    }

    return (
        <div className="container">
            {data.map((value) => {
                const { id, name } = value
                return (
                    <div key={id} className="item">
                        <h4>{name}</h4>
                        <button onClick={() => removeId(id)}>Remove</button>
                    </div>
                )
            })}
            <div>
                <button className="btn" onClick={() => setData([])}>Clear Items</button>
            </div>
        </div>
    )
}

export default UseStateArray