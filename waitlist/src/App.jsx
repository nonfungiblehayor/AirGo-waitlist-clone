import styles from './App.module.scss';
import Header from './components/header';
import SubHeader from './components/sub-header';
import Work from './components/work';

function App() {
  return (
    <div className={styles.App}>
      <Header /> 
      <SubHeader />    
      <Work />
    </div>
  );
}

export default App;
