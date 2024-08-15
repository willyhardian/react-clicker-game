import React from "react";

export default function Score({ score }) {
    function checkScore() {
        if (score > 10 && score < 15) {
            return "score-medium";
        } else if (score >= 15) {
            return "score-high";
        } else {
            return "";
        }
    }
    return (
        <>
            <div className={`score ${checkScore()}`}>
                <h2>Score: {score}</h2>
                {score > 10 && score < 15 && <p>Keep going!</p>}
                {score >= 15 && <p>Amazing! You're on fire!</p>}
            </div>
        </>
    );
}
