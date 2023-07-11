import './App.css';
import Card from './UI/Card';
import Navbar from './UI/Navbar';
import Section from './UI/Section';
import SectionFooter from './UI/SectionFooter';
import DeveloperSection from './UI/pages/DeveloperSection';
import Guide from './UI/pages/Guide';
import Integrations from './UI/pages/Integrations';
import Reviews from './UI/pages/Reviews';
import Step from './UI/pages/Step';

function App() {
 
  
  return (
    <div className='mx-auto'>
      <div className="bg-[#321d85f4]  mx-auto">
     <Navbar/>
     <Section />
     <SectionFooter/>
      </div>
      <DeveloperSection/>
      <Guide/>
     <Step/>
     <Integrations/>
     <Reviews/>
    </div>
  );
}

export default App;
