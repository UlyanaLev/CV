import './App.css';
import Header from './components/Header/Header';
import Titles from './components/Titles/Titles';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

function App() {
  const person = 'Ulyana Levchuk';
  const title_speciality = 'Front-end developer';

  return (
    <>
      <Header></Header>
      <Titles content={person} description={title_speciality}></Titles>
      <Content></Content>
      <Footer></Footer>
    </>
  );
}

export default App;
