import React, { useEffect, useState } from "react";
import ToggleSwitch from "../../components/ToggleSwitch";
import ButtonGroup from "../../components/ButtonGroup";
import logo from "../../logo.svg";
import Navigator from "../../components/Navigator";
import "./styles.css";

const buttons = [
  { id: 3, label: "3x3" },
  { id: 4, label: "4x4" },
  { id: 5, label: "5x5" },
  { id: 6, label: "6x6" },
  { id: 7, label: "7x7" },
  { id: 8, label: "8x8" },
  { id: 9, label: "9x9" },
  { id: 10, label: "10x10" },
];

const Home = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [active, setActive] = useState(3);
  const [disabled, setDisabled] = useState(false);
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");

  useEffect(() => {
    setDisabled(isToggled);
    if (!isToggled) setPlayerTwo("");
    if (isToggled) setPlayerTwo("Robô");
  }, [isToggled]);

  return (
    <div className="home">
      <img src={logo} alt="logo" />
      <div className="game-type-row">
        <h2>Tipo de jogo</h2>
        <div>
          <p style={{ fontWeight: !isToggled ? "bold" : "normal" }}>
            vs Jogador
          </p>
          <ToggleSwitch isToggled={isToggled} setIsToggled={setIsToggled} />
          <p style={{ fontWeight: isToggled ? "bold" : "normal" }}>vs Bot</p>
        </div>
      </div>
      <h2>Nome dos jogadores</h2>
      <input
        placeholder="Jogador 1"
        value={playerOne}
        onChange={(e) =>
          setPlayerOne(e.target.value)
            .replace(/[^\w\s]/g, "")
            .replace(/\s/g, "")
        }
        maxLength={30}
      />
      <input
        placeholder="Jogador 2"
        value={playerTwo}
        onChange={(e) =>
          setPlayerTwo(e.target.value)
            .replace(/[^\w\s]/g, "")
            .replace(/\s/g, "")
        }
        disabled={disabled}
        maxLength={30}
      />
      <h2>Tamanho do tabuleiro</h2>
      <ButtonGroup buttons={buttons} setActive={setActive} />
      <Navigator
        to={`/play?size=${active}&vsBot=${isToggled}&playerOne=${playerOne}&playerTwo=${playerTwo}`}
        label="Começar o jogo"
      />
      <Navigator to="/historic" label="Ver histórico de jogadas" />
    </div>
  );
};

export default Home;
