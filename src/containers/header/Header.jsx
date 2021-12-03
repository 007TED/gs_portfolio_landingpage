import React from 'react';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import './header.css';
const Header = () => (
        <div className="gsp__header section__padding" id="home">
            <div className="gsp__header-content">
                <h1 className="gradient__text"> Let&apos;s Build Something amazing with GPT-3 OpenAI </h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing.
                    Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow
                    asked of.</p>
                <div className="gsp__header-content__input">
                    <input type="email" placeholder="Your Email address"/>
                    <button type="button">Get Started</button>
                </div>
                <div className="gsp__header-content__people">
                    <img src={people} alt="people"/>
                    <p>2,700 people requested access a visit in last 24 hours</p>
                </div>
            </div>
            <div className='gsp__header-image'>
                <img src={ai} alt="ai"/>
            </div>
        </div>
    );

export default Header;