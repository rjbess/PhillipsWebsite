import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import Services from './Components/Services';
import Gallery from './Components/Gallery';
import ContactUs from './Components/ContactUs';
import NoMatch from './Components/NoMatch';
import Layout from './Components/Layout';
import NavigationBar from './Components/NavigationBar'
import Jumbotron from './Components/Jumbotron'

class App extends React.Component{
  render() {
    return (
        <React.Fragment>
            <NavigationBar/>
            <Jumbotron/>
            <Layout>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/services" component={Services}/>
                        <Route exact path="/gallery" component={Gallery}/>
                        <Route exact path="/contactus" component={ContactUs}/>
                        <Route component={NoMatch}/>
                    </Switch>
                </Router>
            </Layout>
        </React.Fragment>
    );
  }
}

export default App;
