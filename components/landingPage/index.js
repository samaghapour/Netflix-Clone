import LandingNavbar from './LandingNavbar';
import LandingSection1 from './LandingSection1';
import { StoryCard1, StoryCard2, StoryCard3, StoryCard4 } from './story-cards';
import QuestionBox from './landingQuestoinsSectoin/QuestionBox';
import Footer from '../Footer';

function LandingPage() {
  return (
    <>
      <div id='landing1Container'>
        <LandingNavbar />
        <LandingSection1 />
      </div>

      <div id='storyCardBox'>
        <StoryCard1 />
        <StoryCard2 />
        <StoryCard3 />
        <StoryCard4 />
        <QuestionBox />
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
