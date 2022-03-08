import React from "react";
import "./App.css";
<<<<<<< HEAD
import { Button, Col, Container, Row } from "react-bootstrap";
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

>>>>>>> upstream/task-state
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Chad Haiges UD CISC275 hello world with React Hooks and
                TypeScript.
            </header>
<<<<<<< HEAD
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <span style={{ color: "green" }}>Top 3 Dogs I Would pet:</span>
            <ol>
                <li>My Dog</li>
                <li>The Dog from Air Bud</li>
                <li>Walter</li>
            </ol>
            <h1>This is a dog</h1>
            <img
                src="https://img.huffingtonpost.com/asset/5c9cc6342300004301ea0bce.png?cache=EQBeRZR6ta&ops=368_207"
                alt="My Dawg Jeremy"
            />

            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "450px",
                                height: "50px"
                            }}
                        >
                            I like Dogs that are large in size. They are bigger
                            than small dogs.
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "450px",
                                height: "50px"
                            }}
                        >
                            Small dogs are cool too, they are slightly smaller
                            than large dogs, hence the name Small Dogs.
                        </div>
                    </Col>
                </Row>
            </Container>
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
