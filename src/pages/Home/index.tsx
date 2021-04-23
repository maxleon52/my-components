import React, { useEffect, useState } from 'react';
import Modal from '../../components/Modal';

import { Container, Neumorphism } from './styles';

const Home = () => {
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    console.log('isModal: ', isModal);
  }, [isModal]);

  return (
    <>
      <Container>
        <Neumorphism
          className="neumorphism"
          onClick={() => setIsModal(!isModal)}
        >
          neumorphism
        </Neumorphism>
      </Container>
      {isModal && <Modal onCancel={() => setIsModal(false)} />}
    </>
  );
};

export default Home;
