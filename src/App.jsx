import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
} from "react-router-dom";
import Success from "./pages/Success";
import {useSelector} from "react-redux";
import Profile from "./pages/profile/Profile";
import About from "./pages/TopScreens/About";
import Ship from "./pages/TopScreens/Ship";
import Payment from "./pages/TopScreens/Payment";
import Obmen from "./pages/TopScreens/Obmen";

const App = () => {
    const user = useSelector(state=> state.user.currentUser);
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
            <Route path="/ship">
                <Ship/>
            </Route>
            <Route path="/payment">
                <Payment/>
            </Route>
            <Route path="/obmen-vozvrat">
                <Obmen/>
            </Route>
          <Route path="/admin">
               <Redirect to="https://localhost:3001/login" />
          </Route>
            <Route path="/products/:category">
                <ProductList/>
            </Route>
          <Route path="/product/:id">
              <Product />
          </Route>
            <Route path="/cart">
                <Cart />
            </Route>
            <Route path="/success">
                <Success />
            </Route>
            <Route path="/login">
                {user ? <Redirect to="/" />: <Login/> }
                <Login />
            </Route>
            <Route path="/register">
                {user ? <Redirect to="/" />: <Register/> }
                <Register />
            </Route>
            <Route path="/profile">
                {user ? < Profile/>:
                    <Redirect to="/"/>}
            </Route>
        </Switch>
      </Router>
  );
};

export default App;