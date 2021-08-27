import { Route, Switch } from "react-router-dom"
import Calculator from "../Calculator/Calculator"
import Solution from "../Calculator/Solution"
import ColorFactory from "../ColorFactory/ColorFactory"
import ColorPage from "../ColorFactory/ColorPage"
import DogDetails from "../DogFinder/DogDetails"
import DogList from "../DogFinder/DogList"
import Home from "../Home"


const Routes = () => {

    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/dogs">
                <DogList />
            </Route>
            <Route exact path="/dogs/:name">
                < DogDetails />
            </Route>
            <Route exact path="/colors">
                <ColorFactory />
            </Route>
            <Route exact path="/colors/:color">
                <ColorPage />
            </Route>
            <Route exact path="/calc">
                <Calculator/>
            </Route>
            <Route exact path="/calc/:opp/:num1/:num2">
                <Solution/>
            </Route>
        </Switch>
    )

}

export default Routes