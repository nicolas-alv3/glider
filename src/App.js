import Navbar from './components/Navbar';
import Banner from './components/Banner';
import WhatWeDo from './components/WhatWeDo';
import WhoWeAre from './components/WhoWeAre.jsx';
import HowWeDoIt from './components/HowWeDoIt.jsx';
import Footer from './components/Footer.jsx';
import './App.css';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <WhoWeAre></WhoWeAre>
      <WhatWeDo></WhatWeDo>
      <HowWeDoIt></HowWeDoIt>
      <Footer></Footer>
    </div>
  );
}

export default App;
