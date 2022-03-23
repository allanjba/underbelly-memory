import { useEffect } from "react";

const Header = ({handleNewGame, score}) => {
    useEffect(() => (document.title = `${score} points`),[score]);

    return (
        <header className="header">
            <h4>{score} Points</h4>
            <h3>Underbelly's Memory Game</h3>
            <button onClick={handleNewGame}>New Game</button>
        </header>
    );
};

export default Header