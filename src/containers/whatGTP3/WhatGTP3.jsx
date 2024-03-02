import React from 'react'
import {Feature} from '../../components';
import  './whatGTP3.css';
const WhatGTP3 = () => {
  return (
      <div className="gpt3__whatgpt3 section__margin" id="whatgpt3">
        <div className="gpt3__whatgpt3-feature">
          <Feature title="What is GPT-3" text="GPT-3, short for Generative Pre-trained Transformer 3, represents a significant milestone in artificial intelligence and natural language processing"/>
        </div>
        <div className="gpt3__whatgpt3-heading">
          <h1 className="gradient__text">
            The Possibility are beyond your imagination
          </h1>
            <p>Explore Your Library</p>
        </div>
        <div className="gpt3__whatgpt3-container">
            <Feature title="Chatbots" text=" Chatbots powered by GPT-3 can provide round-the-clock access to information and assistance. This accessibility is particularly valuable in educational settings" />
            <Feature title="Knowledgebase" text=" Chatbots can augment traditional teaching methods by providing supplementary materials, facilitating discussions, and offering personalized guidance. " />
            <Feature title="Education" text="By leveraging the capabilities of GPT-3, educators can create more personalized, engaging, and effective learning experiences that empower students to achieve their full potential." />
        </div>
      </div>
  )
}

export default WhatGTP3