import logo from './logo.svg';
import './App.css';
import Message from './components/Message'



function App() {

  const str = "Изучение React предполагает наличие некоторых знаний о программировании на языке JavaScript. Глубоких знаний не потребуется, но учить React и JavaScript одновременно может быть тяжело.";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message text={str} />
      </header>
    </div>
  );
}

export default App;
