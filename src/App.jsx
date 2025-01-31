import 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h1>Bienvenue sur mon site React</h1>
        <p>Ceci est un exemple de projet React avec un Header et un Footer.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;