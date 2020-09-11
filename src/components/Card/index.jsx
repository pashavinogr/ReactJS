import React, { Component } from 'react';
import './index.css';

import {BsPencil, BsX, BsCheck} from 'react-icons/bs';

class Card extends Component {

    state = {
        isChecked: false,
        isEdit: false,
        cardData : {
            cardLogo: 'Caption',
            text: 'Some text here...',
        },
        tempCardData: {
            tempLogo: 'Caption',
            tempText: 'Some text here...'
        }
    }
    

    changeStyles = () => {
        this.setState({isChecked : !this.state.isChecked});
    }
    changeEditStatus = () => {
        this.setState({isEdit : !this.state.isEdit, isChecked: false});
    }
    handleChangeLogo = (event) => {
        console.log('piu');
        this.setState({tempCardData: {tempLogo: event.target.value, tempText: this.state.tempCardData.tempText}});
    }
    handleChangeText = (event) => {
        console.log('piu-piu');
        this.setState({tempCardData: {tempText: event.target.value, tempLogo: this.state.tempCardData.tempLogo}});
    }
    changeCardInfo = () => {
        console.log('piu-piu-piu');
        this.setState({cardData: {cardLogo: this.state.tempCardData.tempLogo, text: this.state.tempCardData.tempText}, isChecked: false});
        this.changeEditStatus();
    }
    
    render() {
        return (
            <div className="Card">
                <div className="textMarg">
                    <div className={this.state.isChecked ? "green" : null}>
                        <div className="headCard">
                            {this.state.isEdit ? 
                                (<input 
                                    type="text" 
                                    placeholder={this.state.cardData.cardLogo}
                                    value={this.state.tempCardData.tempLogo || ''}
                                    onChange={this.handleChangeLogo}
                                    className="block"
                                />) : 
                                (<p className="bold block">{this.state.cardData.cardLogo}</p>) 
                            }
                            <div className="topRight">
                                {this.state.isEdit ? 
                                    (<div className="block">
                                        <BsCheck className="blue" onClick={this.changeCardInfo} />
                                        <BsX className="red" onClick={this.changeEditStatus} />
                                    </div>) : 
                                    (<div className="block">
                                        <BsPencil className="blue" onClick={this.changeEditStatus} />
                                        <input type="checkbox" checked={this.state.isChecked} onChange={this.changeStyles} />  
                                    </div>)
                                }
                            </div>
                        </div>
                        <hr />
                        {this.state.isEdit ? 
                            (<input 
                                type="text" 
                                placeholder={this.state.cardData.text}
                                value={this.state.tempCardData.tempText || ''} 
                                onChange={this.handleChangeText} 
                                className="block"
                            />) :
                            (<p className="block">{this.state.cardData.text}</p>)
                        }
                        
                    </div>
                </div>
            </div>            
        );
    }
    
}

export default Card;