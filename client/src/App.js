import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Item from "./pages/Item";
import Register from "./pages/Register";
import Miscellaneous from "./pages/Miscellaneous";
import Stationery from "./pages/Stationery";
import Food from "./pages/Food";
import Swags from "./pages/Swags";
import Sports from "./pages/Sports";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import StationeryItem from "./pages/StationeryItem"
import SwagItem from "./pages/SwagItem"

const App=()=>{
    const user=useSelector((state)=>state.user.currentUser);
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/food">
                    <Food/>
                </Route>
                <Route path="/food/:id">
                    <Item/>
                </Route>
                <Route exact path="/sports">
                    <Sports/>
                </Route>
                <Route path="/sports/:id">
                    <Item/>
                </Route>
                <Route exact path="/stationery">
                    <Stationery/>
                </Route>
                <Route path="/stationery/:id">
                    <StationeryItem/>
                </Route>
                <Route exact path="/swags">
                    <Swags/>
                </Route>
                <Route path="/swags/:id">
                    <SwagItem/>
                </Route>
                <Route exact path="/miscellaneous">
                    <Miscellaneous/>
                </Route>
                <Route path="/miscellaneous/:id">
                    <Item/>
                </Route>
                <Route path="/item/:id">
                    <Item/>
                </Route>
                <Route path="/cart">
                    <Cart/>
                </Route>
                <Route path="/success">
                    <Success/>
                </Route>
                <Route path="/login">
                    {/* <Login/> */}
                    {user ? <Redirect to="/"/> : <Login/>}
                </Route>
                <Route path="/register">
                    {/* <Register/> */}
                    {user ? <Redirect to="/"/> : <Register/>}
                </Route>
            </Switch>
        </Router>
    );
};
export default App;
