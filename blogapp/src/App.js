import React from "react"
import { Header } from "./components/header/Header"
import { Home } from "./pages/home/Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { DetailsPages } from "./pages/details/DetailsPages"


const App = () => {

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <div className="App" >
          <Route exact path='/' component={Home} />
          <Route exact path='/details/:id' component={DetailsPages} />
          </div>
       
        </Switch>
      </Router>
    </>
  )
}
export default App
