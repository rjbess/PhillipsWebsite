import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Layout} from "antd";
import Home from './Components/Home';
import Services from './Components/Services';
import Gallery from './Components/Gallery';
import ContactUs from './Components/ContactUs';
import NoMatch from './Components/NoMatch';
import LayoutPage from './Components/LayoutPage';
import NavigationBar from './Components/NavigationBar';
import Jumbotron from './Components/Jumbotron';
import PageFooter from "./Components/PageFooter";
import './App.css'

const{Header, Content, Footer}=Layout;



class App extends React.Component{
  render() {
    return (
        <React.Fragment>
            <div className="PageLayout">
                <Header>
                    <NavigationBar/>
                </Header>
                <Content>
                <Jumbotron/>
                <LayoutPage>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/services" component={Services}/>
                            <Route exact path="/gallery" component={Gallery}/>
                            <Route exact path="/contactus" component={ContactUs}/>
                            <Route component={NoMatch}/>
                        </Switch>
                    </Router>
                </LayoutPage>
                </Content>
                <Footer>
                    <PageFooter/>
                </Footer>
            </div>
        </React.Fragment>
    );
  }
}

export default App;
