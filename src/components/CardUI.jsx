import React from "react"
import "./card-style.css"


const Cards = ({cards, deleteCard}) => {  
  const cardsList = cards && cards.map(card => {
    return (       
      <div className="card1 col s12 m6 l3">
        <div className="card text-center" key={card.id}>
          <div className="overflow">
            <img src={localStorage[card.imgsrc] ? localStorage[card.imgsrc] : card.imgsrc} alt={card.title} className="card-img-top"/>
          </div> 
          <div className="card-body text-dark">
            <h4 className="card-title">{card.title}</h4>
            <p className="card-text">{card.price}€</p>      
          </div>
          <div><a onClick={() => {deleteCard(card.id)}} class="waves-effect waves-light btn btn-remove brown lighten-2">Remove</a>
          </div>         
        </div>
      </div>
      )  
    }) 
    return(
    <>
    {cardsList}
    </>
  )
}


export default Cards;

