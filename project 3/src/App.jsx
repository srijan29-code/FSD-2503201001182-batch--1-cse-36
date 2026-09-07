import React from "react"
import "./App.css"

function add(a, b) {
  return a + b
}

function Welcome() {
  return (
    <div className="info-panel">
      <h2>Welcome to my first React component</h2>
      <p>React components help you build reusable, attractive UI pieces.</p>
    </div>
  )
}

function Info() {
  return (
    <div className="info-panel">
      <h2>Component info</h2>
      <p>This is my first React component.</p>
      <p>This example shows a simple paragraph inside a styled box.</p>
    </div>
  )
}

function App() {
  return (
    <div className="app-shell">
      <div className="hero-card">
        <span className="hero-badge">React Practice</span>
        <h1>Your first React component</h1>
        <p className="hero-copy">A colorful, modern layout with cards and readable boxes.</p>
      </div>

      <div className="grid">
        <div className="card">
          <Welcome />
        </div>

        <div className="card">
          <Info />
        </div>

        <div className="card qa-card">
          <h3>Quick math</h3>
          <p>
            The sum of <span className="inline-tag">5</span> and <span className="inline-tag">10</span> is <strong>{add(5, 10)}</strong>.
          </p>
        </div>

        <div className="card qa-card">
          <h3>React Q&amp;A</h3>
          <div className="qa">
            <p className="question">Q: How to use comments in React?</p>
            <p className="answer">A: Use comments inside JSX with {'{/* ... */}'} to add notes or disable code temporarily.</p>
          </div>
          <div className="qa">
            <p className="question">Q: What is the difference between a function and a component?</p>
            <p className="answer">A: Functions perform tasks and return values, while components return reusable UI elements for React.</p>
          </div>
        </div>

        <div className="card accent-card">
          <h3>Interview question</h3>
          <p className="question">Q: What is a React component?</p>
          <p className="answer">A: A React component is a reusable piece of UI built with JSX. It defines structure and behavior for part of the interface.</p>
        </div>
      </div>
    </div>
  )
}

export default App