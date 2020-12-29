import React, { Component } from 'react'
import Header from '../header/header'
import Category from '../category/category'
import Carou from '../carou/carou'
import 'bootstrap/dist/css/bootstrap.min.css';
import Car from '../car/car'
import Footer from '../footer/footer'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Row,Container} from "react-bootstrap"
import Ausbildung from '../ausbildung/ausbildung';
import AuPair from '../au-pair/au-pair';





class App extends Component {






    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path='/'>
                            <Container>

                           
                     
                               <Carou />  
                      <Car />
                    
                          </Container>
                           
                           
                          <Footer />
                        </Route>
                        <Route exact path="/home">
                            <div className='container'>
                                <div className='row'>
                                  
                                    <Carou />
                                    <Car />
                                   
                                </div>
                            </div>
                        </Route>

                        <Route exact path="/ausbildung">
                            <Ausbildung/>
                        </Route>
                        <Route exact path="/au-pair">
                            <AuPair/>
                        </Route>
                        <Route exact path="/FSJ">
                            <Ausbildung/>
                        </Route>
                        <Footer />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;