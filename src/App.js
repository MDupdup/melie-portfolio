import './styles/App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Navbar} from "./components/navbar";
import React from "react";
import Home from "./pages/home";
import Gallery from "./pages/gallery";
import About from "./pages/about";
import Contact from "./pages/contact";
import {Footer} from "./components/footer";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <header>
                        <Navbar/>
                    </header>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/gallery" component={Gallery}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/contact" component={Contact}/>
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
