import React from 'react';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BugerBuilder';

function App() {
  return (
    <div >
      <Layout>
           <BurgerBuilder/>
      </Layout>
      </div>
  );
}

export default App;