import React from 'react';

import Header from './components/page/header'
import Body from './components/page/body'
import Footer from './components/page/footer'


function App() {
  return (
    <div>
      <Header />
      <div style={{width:"900px", margin:"auto"}}>
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default App;
