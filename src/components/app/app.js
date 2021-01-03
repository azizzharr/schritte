import React, { Component } from 'react'
import Header from '../header/header'
import Carou from '../carou/carou'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../footer/footer'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Ausbildung from '../ausbildung/ausbildung';
import AuPair from '../au-pair/au-pair';
import Paralax from '../paralax/paralax';
import Erster from '../erster/erster';
import Karte from '../karte/karte';
import Emph from "../emph/emph"
import { Container, Row } from 'react-bootstrap';
import Studenten from "../studenten/studenten"
import Geld from "../geld/geld"
import Vakansy from '../vakansy/vakansy';
import Abfahrt from '../abfahrt/abfahrt';
import Praktikum from "../praktikum/praktikum"
import Fordern from '../fordern/fordern';
import Kontakte from "../kontakte/kontakte"
import Fsb from "../fsb/fsb"


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path='/'>
                            <Container>
                                <br />
                                <Erster />
                                <Studenten />
                                <Abfahrt />
                                <Row>
                                    <Karte />
                                    <Emph />
                                </Row>

                            </Container>
                        </Route>
                        <Route exact path="/home">
                            <div className='container'>
                                <div className='row'>

                                    <Carou />
                                    <Paralax />


                                </div>
                                <Geld />
                                <Vakansy />

                            </div>
                        </Route>
                        <Route exact path="/ausbildung">
                            <Ausbildung />
                            <Abfahrt />
                        </Route>
                        <Route exact path="/au-pair">
                            <AuPair />
                            <Container>
                                <Abfahrt />

                            </Container>
                        </Route>
                        <Route exact path="/FSJ">
                            <Fsb />
                        </Route>
                        <Route exact path="/praktikum">
                            <Container>

                                <Praktikum />
                                <Fordern />
                            </Container>

                        </Route>
                        <Route exact path="/kontakte">

                            <Container>
                                <Kontakte />

                                <Row>
                                    <Karte />
                                    <Emph />
                                </Row>
                            </Container>
                        </Route>
                    </Switch>

                    <br />
                    <Footer />
                </div>
            </Router>
        )
    }
}
<script>
    AOS.init();
</script>

export default App;