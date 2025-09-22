import './App.css';
const GameDevProject = ({projectString, projectLink}) => {
  return (
    <div className='GameDevProject'><a className='GameDevProjectText' href={projectLink}>{projectString}</a></div>
  );
}

export default GameDevProject;
