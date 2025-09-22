import './App.css';
import Header from './Header';
import SectionHeader from './SectionHeader';
import SectionText from './SectionText';
import GameDevProjectContainer from './GameDevProjectContainer';

const sectionOneText="Welcome! I'm a software engineer who's always trying to find new projects to scratch my technical and creative itch. Whether you came here directly or stumbled your way here trying to escape the Matrix, feel free to click the links and check some of those projects out! ";

const sectionTwoText="In my free time, I like to work on small game projects, usually in the Unity engine. I've competed in multiple game jams, and am currently working on a larger scale project I'm hoping to show off soon.";

const sectionThreeText="Below are a couple of my favorite game-dev projects that I've completed, click one to give it a try:";

const sectionFourText =  <>You can check out the rest of my games on my <a href="google.com">itch.io</a> page! </>;

const sectionFiveText = <>To check out any other projects I may be working on (including this website), feel free to take a peek at my <a href='https://github.com/Parrishoot'>Github</a>.</>

function Container() {
  return (
    <div className="Container">
      <Header/>
      <SectionHeader headerString={"Bio"}/>
      <SectionText sectionText={sectionOneText}/>
      <SectionHeader headerString={"Game Development"}/>
      <SectionText sectionText={sectionTwoText}/>
      <SectionText sectionText={sectionThreeText}/>
      <GameDevProjectContainer/>
      <SectionText sectionText={sectionFourText}/>
      <SectionHeader headerString={"Other Projects"}/>
      <SectionText sectionText={sectionFiveText}/>
    </div>
  );
}

export default Container;
