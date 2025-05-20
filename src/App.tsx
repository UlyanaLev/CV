import './App.css';
import Header from './components/Header/Header';
import Titles from './components/Titles/Titles';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  const person = t('person');
  const title_speciality = t('title_speciality');

  return (
    <>
      <Header />
      <Titles content={person} description={title_speciality} />
      <Content />
      <Footer />
    </>
  );
}

export default App;

