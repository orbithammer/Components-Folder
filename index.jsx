import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Button from "./components/Button/Button"
import Badge from "./components/Badge/Badge"
import Banner from "./components/Banner/Banner"
import Card from "./components/Card/Card"
import Testimonial from "./components/Testimonial/Testimonial"

function App() {
  return (
    <>
      <Menu>
        <Menu.Button>Click here</Menu.Button>
        <Menu.Dropdown>
          <Menu.Item>Badges</Menu.Item>
          <Menu.Item>Banners</Menu.Item>
          <Menu.Item>Cards</Menu.Item>
          <Menu.Item>Testimonials</Menu.Item>
          <Menu.Item>Home</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// <Banner title="Congratulations!" status="success">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>
//       <Card title="Easy Deployment">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card>

// <Testimonial name="May Andersons" jobTitle="Workcation, CTO" img="images/portrait.webp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. </Testimonial>

// <h1>Your components go here</h1>
//       <Badge shape="pill" color="grey">Badge</Badge>
//       <Banner title="Congratulations!" status="success">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>
//       <Card title="Easy Deployment">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card>
//       <Testimonial name="May Andersons" jobTitle="Workcation, CTO" img="images/portrait.webp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. </Testimonial>