import React from 'react'
import './possibility.css';
import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
    return (
        <div className="gpt3__possibility section__padding" id="possibility">
            <div className="gpt3__possibility-image">
                <img src={possibilityImage} alt="possibility"/>
            </div>
            <div className="gpt3__possibility-content">
                <h4>Request Early Access to Get Started</h4>
                <h1 className="gradient__text">The possibilities are <br/> beyond your imagination</h1>
                <p>At its core, GPT-3 utilizes a deep neural network architecture known as the Transformer. This
                    architecture enables the model to process and generate text by attending to different parts of input
                    sequences, capturing contextual relationships, and producing coherent outputs. GPT-3 is trained on a
                    vast corpus of text data, allowing it to learn patterns and structures inherent in human
                    language.</p>
                <h4>Request Early Access to Get Started</h4>
            </div>
        </div>
    )
}

export default Possibility