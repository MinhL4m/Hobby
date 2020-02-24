import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HeaderContainer as Header } from './common/Header/logic/HeaderContainer'
import { IndexContainer } from './Index/logic/IndexContainer'
import { ContactContainer } from './Contact/logic/ContactContainer'
import { PorfolioContainer } from './Porfolio/logic/PorfolioContainer'
import { AboutContainer } from './About/logic/AboutContainer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import './style/index.css'

library.add(faEnvelope, faFacebookSquare, faLinkedin, faGithubSquare)


const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path={['/', '/index']} exact strict component={IndexContainer} />
        <Route path={['/contact']} exact strict component={ContactContainer} />
        <Route path={['/porfolio']} exact strict component={PorfolioContainer} />
        <Route path={['/about']} exact strict component={AboutContainer} />
      </Switch>
    </div>
  );
}

export default App;
