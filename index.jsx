import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Button from "./components/Button/Button"
import Badge from "./components/Badge/Badge"
import Banner from "./components/Banner/Banner"
import Card from "./components/Card/Card"
import Testimonial from "./components/Testimonial/Testimonial"
import {nanoid} from "nanoid"

// BADGES
const badgeColors = ["gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink"]
const badgesSquare = badgeColors.map(color=> {
    return (
        <Badge
            shape="square"
            color={color}
            key={nanoid()}
        >{color}</Badge>  
    )          
})
const badgesPill = badgeColors.map(color=> {
    return (
        <Badge 
            shape="pill"
            color={color}
            key={nanoid()}
        >{color}</Badge>
    )
})
// BANNERS
function titleBanner(status) {
  if(status==="warning") return "Congratulations!"
  if(status==="success") return "Attention"
  if(status==="error") return "There is a problem with your application"
  if(status==="neutral") return "Update available"
}
const bannerStatus = ["success", "warning", "error", "neutral"]
const bannersMulti = bannerStatus.map(status=> {
  return (
    <Banner
      status={status}
      title={titleBanner(status)}
      key={nanoid()}
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner>
  )
})
const bannersSingle = bannerStatus.map(status=> {
  return (
    <Banner
      status={status}
      title={titleBanner(status)}
      key={nanoid()}
    ></Banner>
  )
})

function App() {
  const [componentState, setComponentState] = React.useState("Home")
  
  return (
    <div>
      <Menu setComponentState={setComponentState}>
        <Menu.Button>Click here</Menu.Button>
        <Menu.Dropdown>
          <Menu.Item>Badges</Menu.Item>
          <Menu.Item>Banners</Menu.Item>
          <Menu.Item>Cards</Menu.Item>
          <Menu.Item>Testimonials</Menu.Item>
          <Menu.Item>Home</Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <div className="renders">
                {componentState === "Badges" && 
                  <>
                    <h1>Badges</h1>
                    <div className="badges-wrapper">
                        <span className="badges-line-wrapper"><h3>Square</h3>{badgesSquare}</span>
                        <span className="badges-line-wrapper"><h3>Pill</h3>{badgesPill}</span>
                    </div>
                  </>}
                {componentState === "Banners" && 
                  <>
                    <h1>Banners</h1>
                    <div className="banners-grid">
                      <h3 className="banner-title-1">Multi Line</h3>
                      <h3 className="banner-title-2">Single Line</h3>
                      <h3 className="banner-title-3">Success</h3>
                      <div className="banner-multi">{bannersMulti[0]}</div>
                      <div className="banner-single">{bannersSingle[0]}</div>
                      <h3 className="banner-title-4">Warning</h3>
                      <div className="banner-multi">{bannersMulti[1]}</div>
                      <div className="banner-single">{bannersSingle[1]}</div>
                      <h3 className="banner-title-5">Error</h3>
                      <div className="banner-multi">{bannersMulti[2]}</div>
                      <div className="banner-single">{bannersSingle[2]}</div>
                      <h3 className="banner-title-6">Neutral</h3>
                      <div className="banner-multi">{bannersMulti[3]}</div>
                      <div className="banner-single">{bannersSingle[3]}</div>
                    </div>
                  </>}
                {componentState === "Cards" && 
                  <>
                    <h1>Cards</h1>
                    <div className="cards-wrapper">
                      <Card img="icons/cloud.svg" color="blue" title="Easy Deployment" >Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card>
                      <Card img="icons/tree.svg" color="green" title="Eco Friendly" >Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card>
                      <Card img="icons/house.svg" color="red" title="Time Sensitive Notifications" >Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card>
                      <Card img="icons/lemon.svg" color="yellow" title="High Quality" >Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card>
                    </div>
                  </>}
                {componentState === "Testimonials" && 
                  <>
                    <h1>Testimonials</h1>
                    <p className="info">Narrow/widen the browser window to switch between desktop/mobile displays.</p>
                    <Testimonial name="May Andersons" jobTitle="Workcation, CTO" img="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. </Testimonial>
                    <Testimonial name="May Andersons" jobTitle="Workcation, CTO" img="images/portrait.webp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. </Testimonial>
                  </>}
                {componentState === "Home" && 
                  <>
                    <h1>Home</h1>
                    <p className="info">Select the component from the menu above.</p>
                  </>}
            </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
