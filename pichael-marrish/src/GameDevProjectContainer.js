import './App.css';
import GameDevProject from './GameDevProject';

const project1Text = `
--------------------------
|                        |
|    @@@@@@@@@@@@@@@@    |
|     @@@@@@@@@@@@@@     |
|      @@@@@@@@@@@@      |
|       @@@@@@@@@@       |
|        @@@@@@@@        |
|         @@@@@@         |
|          @@@@          |
|           @@           |
|                        |
|------------------------|
|       PERSPECTIVE      |
-------------------------|
| A bullet hell shooter  |
| that swaps between     |
| first person and top   |
| perspectives           |
--------------------------
`;

const project2Text = `
--------------------------
|                        |
|         @@@@@@         |
|      @@@      @@@      |
|     @@          @@     |
|    @@            @@    |
|    @@            @@    |
|     @@          @@     |
|      @@@      @@@      |
|         @@@@@@         |
|                        |
|------------------------|
|       COLOR WHEEL      |
|------------------------|
| A radial falling block |
| game similar to        |
| Tetris, with Color     |
| matching mechanics     |
--------------------------
`;

const project3Text = `
--------------------------
|                        |
|                        |
|         ,--.--._       |
|     ---" _, \\___)      |
|     |    /  /____)     |
|     |    \\//(____)     |
|     ---\      (__)      |
|         \`-----"        |
|                        |
|                        |
|------------------------|
|       HOLE PUNCH       |
|------------------------|
| An very stupid typing  |
| game where you launch  |
| yourself in the air to |
| punch a very deep hole |
--------------------------
`;

function GameDevProjectContainer() {
  return (
    <div className='GameDevProjectContainer'>
        <GameDevProject projectString={project1Text} projectLink={"https://pichaelmarrish.itch.io/perspective"}/>
        <GameDevProject projectString={project2Text} projectLink={"https://pichaelmarrish.itch.io/color-wheel"}/>
        <GameDevProject projectString={project3Text} projectLink={"https://pichaelmarrish.itch.io/hole-punch"}/>
    </div>
  );
}

export default GameDevProjectContainer;
