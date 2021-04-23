import React from 'react';

import { Overlay, Content, Button } from './styles';

interface ModalProps {
  onCancel(): void;
}
const Modal = ({ onCancel }: ModalProps) => {
  console.log(onCancel);
  return (
    <Overlay>
      <Content>
        <Button onClick={onCancel}>X</Button>
      </Content>
    </Overlay>
  );
};

export default Modal;
