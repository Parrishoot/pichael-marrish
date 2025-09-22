import logo from './NoOutline.svg';
import './App.css';

const SectionHeader = ({headerString}) => {
  return (
    <div className='SectionHeader'>{"# " + headerString}</div>
  );
}

export default SectionHeader;
