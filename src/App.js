import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import Modal from 'components/Modal';
import Button from 'components/Button';
// Pages
import Index from 'pages/Index';
import TypicalDay from 'pages/TypicalDay';
import BravoPup from 'pages/BravoPup';
import Nightime from 'pages/Nightime';
import Behavior from 'pages/Behavior';
import Troubleshooting from 'pages/Troubleshooting';
import { getModalContent } from 'data/modalData';

function App() {

  const [ modalIsOpen, setIsOpen ] = React.useState(false);
  const [ modalData, setModalData ] = React.useState({});

  function openModal(modalName) {
    const data = getModalContent({ buttonAction: openModal })[modalName];

    if(!data) return null;

    const { title, content } = data;

    setModalData({ title, content });

    setIsOpen(true);
  }

  function closeModal() {
    setModalData({});
    setIsOpen(false);
  }

  function renderQuickLinks() {
    const modals = getModalContent({ buttonAction: openModal });

    return Object.entries(modals).map(([ key, value ]) => {
      return (
        <Button
          key={ key }
          onClick={ () => openModal(key) }>
          { value.title }
        </Button>
      );
    });
  }

  return (
    <AppContainer id="app-container" className="App">
      <header className="App-header">
        <h2>Kotaro Manual</h2>
        {
          modalIsOpen &&
          <Modal
            isOpen={ modalIsOpen }
            onRequestClose={ closeModal }
            contentLabel="Example Modal"
            title={ modalData.title }
            content = { modalData.content }
          />
        }
      </header>
      <section>
        <h3>Quick Links</h3>
        {renderQuickLinks()}
      </section>
      <Router>
        <MainWrapper>
          <nav>
            <ul>
              <li>
                <Link to="/">Main</Link>
              </li>
              <li>
                <Link to="typical-day">Typical Day</Link>
              </li>
              <li>
                <Link to="bravo-pup">Puppy School</Link>
              </li>
              <li>
                <Link to="nightime">Nightime</Link>
              </li>
              <li>
                <Link to="behavior">Good &amp; Bad Behavior</Link>
              </li>
              <li>
                <Link to="troubleshooting">Troubleshooting</Link>
              </li>
            </ul>
          </nav>
          <main>

            <Switch>
              <Route path="/typical-day">
                <TypicalDay openModal={ openModal } />
              </Route>
              <Route path="/bravo-pup">
                <BravoPup />
              </Route>
              <Route path="/nightime">
                <Nightime openModal={ openModal } />
              </Route>
              <Route path="/behavior">
                <Behavior openModal={ openModal } />
              </Route>
              <Route path="/troubleshooting">
                <Troubleshooting />
              </Route>
              <Route exact path="/">
                <Index />
              </Route>
              <Redirect push from="*" to="/" />
            </Switch>
          </main>
        </MainWrapper>
      </Router>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 8px;
`;

const MainWrapper = styled.div`
  display: flex;

  nav {
    width: 200px;
    min-width: 200px;
  }
`;
