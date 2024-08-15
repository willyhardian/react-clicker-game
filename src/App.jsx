import { useState } from "react";
import Score from "./components/Score";

const App = () => {
    const [score, setScore] = useState(0);
    function incrementScore() {
        setScore(score + 1);
    }

    return (
        <div className="app">
            <h1>Clicker Game</h1>
            <Score score={score} />
            <div className="clicker">
                <button className="click-button" onClick={incrementScore}>
                    Click Me!
                </button>
            </div>
        </div>
    );
};

export default App;
