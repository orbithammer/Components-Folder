import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Button from "./components/Button/Button"
import Badge from "./components/Badge/Badge"
import Banner from "./components/Banner/Banner"
import Card from "./components/Card/Card"

function App() {
  return (
    <>
      <h1>Your components go here</h1>
      <Card title="Easy Deployment">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);