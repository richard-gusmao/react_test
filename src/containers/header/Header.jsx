import React from 'react';
import './header.css';

import people from '../../assets/people.png'
import AI from '../../assets/ai.png'

const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">
                    Let´s Build Something amazing with GPT-3 OpenAI
                </h1>
                <p>
                    Welcome to our website dedicated to exploring the capabilities and potential of GPT-3, the
                    cutting-edge language model developed by OpenAI.
                </p>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Your Email Address"/>
                    <button type="button">Get Started</button>
                </div>

                <div className="gpt3__header-content__people">
                    <img src={people} alt="People"/>
                    <p>1.600 people request access a visit in last 24 hours</p>
                </div>
            </div>
            <div className="gpt3__header-image">
                <img src={AI} alt="AI"/>
            </div>
        </div>
    )
}

export default Header