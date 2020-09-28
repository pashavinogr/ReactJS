import React, { Component } from 'react';
import './index.css';

import {BsPencil, BsX, BsCheck} from 'react-icons/bs';

class Card extends Component {

    state = {
        isChecked: false,
        isEdit: false,
        cardData : {
            logo: 'Caption',
            text: 'Some text here...',
        },
        tempCardData: {
            logo: 'Caption',
            text: 'Some text here...'
        }
    }
    
    changeStyles = () => {
        this.setState({isChecked : !this.state.isChecked});
    }
    changeEditStatus = () => {
        this.setState({isEdit : !this.state.isEdit, isChecked: false});
    }
    handleChangeInfo = (event, name) => {
        this.setState({ 
            tempCardData: { 
                ...this.state.tempCardData,
                [name]: event.target.value
            }
        });
    }
    changeCardInfo = () => {
        this.setState({cardData: {...this.state.tempCardData}, isChecked: false});
        this.changeEditStatus();
    }
    
    render() {
        return (
            <div className="Card">
                <div className="textMarg">
                    <div className={this.state.isChecked ? "green" : null}>
                        <div className="solidBorder">
                            {this.state.isEdit ? 
                                (
                                    <div>
                                        <input 
                                            type="text" 
                                            placeholder={this.state.cardData.logo}
                                            value={this.state.tempCardData.logo || ''}
                                            onChange={(event) => this.handleChangeInfo(event, 'logo')}
                                        />
                                        <div className="topRight">
                                            <div className="block">
                                                <BsCheck className="blue" onClick={this.changeCardInfo} />
                                                <BsX className="red" onClick={this.changeEditStatus} />
                                            </div>
                                        </div>
                                        <hr />
                                        <input 
                                            type="text" 
                                            placeholder={this.state.cardData.text}
                                            value={this.state.tempCardData.text || ''} 
                                            onChange={(event) => this.handleChangeInfo(event, 'text')}
                                        />
                                    </div>
                                ) :
                                (
                                    <div>
                                        <p className="bold">{this.state.cardData.logo}</p>
                                        <div className="topRight">
                                            <div className="block">
                                                <BsPencil className="blue" onClick={this.changeEditStatus} />
                                                <input type="checkbox" checked={this.state.isChecked} onChange={this.changeStyles} />  
                                            </div>
                                        </div>
                                        <hr />
                                        <p>{this.state.cardData.text}</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
