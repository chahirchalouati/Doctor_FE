import React from 'react'
import Card from './Card'

function CardList({content}) {
    return (
        <div className='card_list'>
            <div className="card_list_header">{content}</div>
            <Card></Card>
            <Card></Card>
            <Card></Card>

        </div>
    )
}

export default CardList
