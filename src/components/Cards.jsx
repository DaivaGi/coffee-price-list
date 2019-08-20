import React, {Component} from "react"
import Cards from "./CardUI"
import { Modal, Button, options } from 'react-materialize'
import { Card, Row, Col } from 'react-materialize';
import M from "materialize-css";

import img1 from "../components/img/espresso.jpg"
import img2 from "../components/img/americano.jpg";
import img3 from "../components/img/cappuccino.jpg";
import img4 from "../components/img/latte.jpg";
import img5 from "../components/img/mocha.jpg";
import img6 from "../components/img/no image1.jpg";
import AddModal from "./modal"

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {dismissible: false});
  });
  
class App extends Component {
    state = { isModalOpen: false,
              cards : [
                   {imgsrc:img1, title: "Espresso", price: 1.2, id: 1},
                   {imgsrc:img2, title: "Americano", price: 1.3, id: 2},
                   {imgsrc:img3, title: "Cappuccino", price: 1.25, id: 3},
                   {imgsrc:img4, title: "Latte", price: 1.5, id: 4},
                   {imgsrc:img5, title: "Mocha", price: 1.3, id: 5},
                   {imgsrc:img6, title: "New One", price: 1.2, id: 6}
                ] 
    }
                  
    handleAdd= () =>{
        this.setState({ isModalOpen: true });
    }
        
    addCard = (card) => {
        card.id = Math.random();
        let cards = [...this.state.cards, card];
        this.setState({
            cards: cards
        })
    }
    deleteCard = (id) => {
        let cards = this.state.cards.filter(card => {
            return card.id !== id
        });
        this.setState({
            cards: cards
        })
    }
    render(){  
        return(
            <div className="container">
                <div class="row">
                    <Cards deleteCard={this.deleteCard} cards={this.state.cards} />
                    <div className="card1 col s12 m6 l3">                           
                        <div className="card text-center">
                            <a 
                                class="btn-floating btn-large waves-effect brown lighten-2 modal-trigger add"
                                onClick={this.handleAdd}
                                href="#modal1"
                                title="Add">
                                    <i class="material-icons">add</i>
                                </a>
                                <AddModal addCard={this.addCard} isOpen={this.state.isModalOpen} />
                        </div>
                    </div>
                </div>
          </div>
        );   
    }
}




export default App;