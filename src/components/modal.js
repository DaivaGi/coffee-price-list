import React, {Component} from "react"
import { Modal, Button, options } from 'react-materialize'
import { Card, Row, Col } from 'react-materialize';
import M from "materialize-css";
import ls from 'local-storage'
import App from "./Cards"
import img6 from "../components/img/no image1.jpg"


  var elems = document.querySelectorAll('.has-character-counter');
  M.CharacterCounter.init(elems);

class AddModal extends Component {
    state = {
        title: null,
        imgsrc: null,
        price: null,
        unchecked: true        
    }     
handleOnCheck = () => {
  this.setState({ unchecked: !this.state.unchecked })
}

render () {
  return (
    <div>
      <form onSubmit={ this.handleSubmit }>
        <input type="text" />
        <button type="submit" />
      </form>
      {this.state.showButton ? <button>See as abcd</button> : null}
    </div>
  )
}

handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value 
              
    })
}

handleSubmit = (e) => {
    e.preventDefault();
        let newCard = {
            title: this.state.title,
            price: this.state.price,
            imgsrc: this.state.unchecked ? this.state.imgsrc : img6
        };

        this.props.addCard(newCard);

        this.setState({
            title: "",
            price: "",
            imgsrc: "",
            
        });

    }
    
gotPhoto = (event) => {
    var file = event.target.files[0];
    var reader = new FileReader()
    reader.onload = function(e) {
        localStorage[file.name] = e.target.result;
    }
    reader.readAsDataURL(file);
    this.setState({imgsrc: file.name});
}
        
   
render(){
    return(
        <modal inOpen={this.props.isOpen}>
            <div id="modal1" class="modal">
                <div class="modal-content">
                    <div><h5>Add New Item</h5></div>
                    <div class="input-field ">
                        <input id="title" type="text" maxlength="15" onChange={this.handleChange} value={this.state.title}/>
                        <label htmlFor="title">Coffee tittle</label>
                    </div>
                    <div class="input-field">
                        <input id="price" type="tel" onChange={this.handleChange} value={this.state.price}/>
                        <label htmlFor="title">Price</label>
                    </div>                                
                    <form action="#">
                    { this.state.unchecked ?
                        <div class="file-field input-field">                            
                                <div class="btn btn-f brown lighten-2">
                                <label htmlFor="addImage">File</label>
                                <input type="file" id="addImage" onChange={this.gotPhoto}  />
                            </div>
                            <div>{this.state.imgsrc}</div>
                        </div>: null
                    }
                    </form>                    
                    <form action="#">
                        <p><label class="checkbox-right"><input type="checkbox" class="filled-in checkbox-brown" onChange={this.handleOnCheck} unchecked={ this.state.unchecked }/>
                        <span>No image</span></label></p>
                    </form>
                </div>
                <div class="modal-footer">
                    <a  class="modal-close waves-effect waves-light btn-small brown lighten-2" onClick={this.handleSubmit}>Add</a>
                    <a  class="modal-close waves-effect waves-light btn-small brown lighten-2">Close</a>
                </div>
            </div>         
        </modal>
      )
    }
  }

  

export default AddModal;





