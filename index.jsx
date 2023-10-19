import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Button from "./components/Button/Button"
import Badge from "./components/Badge/Badge"

function App() {
  return (
    <>
      <h1>Your components go here</h1>
      <Badge className="square" color="pink">Badge</Badge>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
