import styles from './App.module.scss';
import Header from './components/header';
import SubHeader from './components/sub-header';
import Work from './components/work';
import Footer from './components/footer';
import Section1 from './components/section1';
import { useState } from "react";
import Menu from './components/menu';

function App() {
  const [menu, showMenu] = useState(false)

  const displayMenu = () => {
    showMenu(!menu)
    console.log(20)
}

  return (
    <div className={styles.App}>
      {menu ? 
       <Menu fnc2={displayMenu}/>  
      :
       <>      
       <Header fnc={displayMenu}/> 
       <SubHeader />  </>           
    }
     
      <Section1 /> 
      <Work />
      <Footer />
    </div>
  );
}

export default App;
