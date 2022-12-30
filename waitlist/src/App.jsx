import styles from './App.module.scss';
import Header from './components/header';
import SubHeader from './components/sub-header';
import Work from './components/work';
import Footer from './components/footer';
import Section1 from './components/section1';

function App() {
  return (
    <div className={styles.App}>
      <Header /> 
      <SubHeader />   
      <Section1 /> 
      <Work />
      <Footer />
    </div>
  );
}

export default App;
