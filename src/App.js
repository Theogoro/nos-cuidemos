import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Mindfulness from './components/Mindfulness';
import NeedWait from './components/NeedWait';
import WeCan from './components/WeCan';
import WhatToDo from './components/WhatToDo';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <NeedWait />
      <WhatToDo />
      <Mindfulness />
      <WeCan />
      <Footer />
    </div>
  );
}

export default App;
