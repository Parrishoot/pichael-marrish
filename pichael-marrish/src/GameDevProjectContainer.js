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
|------------------------|
| A bullet hell shooter  |
| that swaps between     |
| first person and top   |
| down perspectives      |
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
| Tetris, with color     |
| matching mechanics     |
--------------------------
`;

const project3Text = `
--------------------------
|                        |
|             @@@        |
|             @@@@@      |
|             @@  @@@    |
|             @@    @    |
|         @@@@@@         |
|        @@@@@@@         |
|       @@@@@@@@         |
|        @@@@@@          |
|                        |
|------------------------|
|   DISORDERLY CONDUCT   |
|------------------------|
| A puzzle solving game  |
| where you need to act  |
| quickly to keep your   |
| orchestra in time      |
--------------------------
`;

function GameDevProjectContainer() {
  return (
    <div className='GameDevProjectContainer'>
        <GameDevProject projectString={project2Text} projectLink={"https://pichaelmarrish.itch.io/color-wheel"}/>
        <GameDevProject projectString={project1Text} projectLink={"https://pichaelmarrish.itch.io/perspective"}/>
        <GameDevProject projectString={project3Text} projectLink={"https://pichaelmarrish.itch.io/disorderly-conduct"}/>
    </div>
  );
}

export default GameDevProjectContainer;
