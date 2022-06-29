import React from 'react';
import './App.css';
import { Header } from './component/Header';
import { Footer } from './component/Footer';
import { HomeScreen } from './screens/HomeScreen';

const App = () => {
  console.log('app');
  return (
    <div>
      <Header />
      <main>
        <HomeScreen />
      </main>
      <Footer />
    </div>
  );
};

export default App;
