import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { InlineButton } from 'components/Button';

function ModalComponent(props) {
  Modal.setAppElement('#root');

  const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginLeft: '-200px',
      marginTop: '-200px',
      right: '50%',
      bottom: '50%',
      border: '1px solid #ccc',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px',
      width: '400px',
      height: '400px'
    }
  };

  const [ contentHistory, setContentHistory ] = React.useState([]);
  const [ modalData, setModalData ] = React.useState(null);

  React.useEffect(() => {
    const { title, content } = props;

    if(title && content ) {
      setContentHistory([
        ...contentHistory,
        { title, content }
      ]);
      setModalData({ title, content });
    }

  }, [ props.title, props.content ]);

  React.useEffect(() => {
    return () => {
      console.log('clearning');
      setContentHistory([]);
    };
  }, []);

  function goBack() {
    const newHistory = [ ...contentHistory ];

    newHistory.splice(-1, 1);

    setContentHistory(newHistory);
    setModalData(newHistory[ newHistory.length - 1 ]);

  }

  if(!modalData) return null;

  return (
    <Modal
      isOpen={ props.isOpen }
      onRequestClose={ props.onRequestClose }
      contentLabel={ props.contentLabel }
      style={ styles }
    >
      <ModalWrapper>
        <header>
          <ModalTitle>{ modalData.title || 'No Title Header' }</ModalTitle>
          {
            contentHistory.length > 1 &&
            <InlineButton onClick={ goBack } className="go-back">
              <i className="material-icons close-icon">keyboard_arrow_left</i>
            </InlineButton>
          }
          <InlineButton onClick={ props.onRequestClose } className="close-icon">
            <i className="material-icons">close</i>
          </InlineButton>
        </header>
        <ModalBody>
          { modalData.content }
        </ModalBody>
      </ModalWrapper>
    </Modal>
  );
}

export default ModalComponent;

const ModalWrapper = styled.div`
  header {
    position: relative;
    height: 24px;
    line-height: 24px;

    .close-icon {
      position: absolute;
      top: 0px;
      right: 0px;
      color: black;
    }

    .go-back {
      position: absolute;
      top: 0px;
      right: 28px;
      color: black;
    }
  }
`;

const ModalTitle = styled.span`
  font-weight: bold;
`;

const ModalBody = styled.main`
  margin-top: 8px;
`;
