import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: ${props => (props.open ? 'grid' : 'none')};
  z-index: 2;
`;

const Image = styled.img`
  width: 100%;
`;

const OverlayInner = styled.div``;
const CloseButton = styled.button`
  background: none;
  color: white;
  border: 0;
`;
const ImageGallery = styled.section``;

const Gallery = () => (
  <div>
    <Overlay>
      <OverlayInner>
        <CloseButton>x Close</CloseButton>
        <Image />
      </OverlayInner>
    </Overlay>
    <ImageGallery />
  </div>
);

export default Gallery;
