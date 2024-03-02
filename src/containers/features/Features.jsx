import React from 'react'
import './feature.css';
import {Feature} from "../../components/";

const featuresData =
    [
        {
            title: 'Instant Feedback and Support',
            text: ' Chatbots can offer instant feedback on assignments, quizzes, and exercises, helping students identify areas for improvement and reinforcing learning objectives in real-time.',
        },
        {
            title: 'Supplemental Learning Resources',
            text: 'GPT-3-powered chatbots can serve as virtual tutors or study partners, providing additional explanations, examples, and resources to complement traditional classroom instruction',
        },
        {
            title: 'Scalability and Cost-Effectiveness',
            text: 'Chatbots powered by GPT-3 offer scalability and cost-effectiveness, allowing educational institutions to provide personalized support and assistance to a large number of students without significantly increasing their resource allocation',
        },
        {
            title: 'Empowering Human Creativity',
            text: 'Ultimately, the true impact of GPT-3 lies in its ability to augment human creativity and productivity',
        },
    ];
const Features = () => {
    return (
        <div className="gpt3__features section__padding" id="features">
            <div className="gpt3__features-heading">
                <h1 className="gradient__text">
                    The Future is Now and You Just need to Realize it. Step into Future today & Make it happen.
                </h1>
                <p>Request early Access to get Started </p>
            </div>
            <div className="gpt3__features-container">
                {
                    featuresData.map((item, index) => (
                        <Feature title={item.title} text={item.text} key={item.title + index}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Features