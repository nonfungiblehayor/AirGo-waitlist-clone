import styles from './App.module.scss';
import Header from './components/header';
import SubHeader from './components/sub-header';
import Work from './components/work';
import Footer from './components/footer';
import Section1 from './components/section1';
import { useState } from "react";
import Menu from './components/menu';
import Form from './components/form';

function App() {
  const [menu, showMenu] = useState(false)

  const displayMenu = () => {
    showMenu(!menu)
    console.log(20)
}

const [formState, formControl] = useState(false)
const [formState2, formControl2] = useState(false)

const displayForm = () => {
    formControl(!formState)
}

const displayForm2 = () => {
  formControl2(!formState2)
}

const hideForm = () => {
    formControl(!formState)
}

  return (
    <div className={styles.App}>
      {menu ? 
       <Menu fnc2={displayMenu} menuFnc={displayForm}/>  
      :
       <>      
       <Header fnc={displayMenu} headFnc={displayForm}/> 
       <SubHeader subHeadFnc={displayForm}/>   {formState ? <Form formHiding={hideForm}/> : ''}</>           
    }
     
      <Section1 sectionFnc={displayForm2}/> 
      {formState2 ? <Form formHiding={displayForm2}/> : ''}
      <Work />
      <Footer />
    </div>
  );
}

export default App;
