import styled from 'styled-components';
import { Modal as ModalAntd, Carousel as CarouselAntd } from 'antd';
import { screens } from '../../utils/BreakPoints';

export const Div = styled.div`
  background: linear-gradient(90deg, var(--bg-dark-hight), transparent);
  position: relative;
  z-index: 0;
  overflow: hidden;
  transition: 0.2s;

  :hover {
    cursor: pointer;
    background-color: var(--bg-dark-hight);
    transition-delay: 1s;
    span:nth-child(2) {
      left: 100%;
      transition: 1s;
    }
    span:nth-child(3) {
      top: 100%;
      transition: 1s;
      transition-delay: 0.25s;
    }
    span:nth-child(4) {
      right: 100%;
      transition: 1s;
      transition-delay: 0.5s;
    }
    span:nth-child(5) {
      bottom: 100%;
      transition: 1s;
      transition-delay: 0.75s;
    }
  }

  ${screens.xs} {
    padding: 14px;
  }

  ${screens.sm} {
    padding: 14px 15px;
  }

  ${screens.md} {
    padding: 20px 30px;
  }
`;

export const Span = styled.span`
  position: absolute;
  display: block;
  z-index: 2;
  &:nth-child(2) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #f5977d);
  }

  &:nth-child(3) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #f5977d);
  }

  &:nth-child(4) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #f5977d);
  }

  &:nth-child(5) {
    bottom: -100%;
    left: 0%;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #f5977d);
  }
`;

export const H3 = styled.h3`
  font-size: 24px;
  font-weight: normal;
  text-align: center;
  margin: 0;
  color: var(--color-normal-title);
  text-align: left;
`;

export const H4 = styled.h4`
  font-size: 14px;
  font-weight: normal;
  text-align: left;
  margin: 0;
  color: var(--color-normal-title);
  opacity: 0.54;
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 300;
  margin: 0;
  color: var(--color-text);
  font-style: normal;

  ${screens.lg} {
    font-size: 18px;
  }
`;

export const Link = styled.a`
  color: var(--color-link);
  font-weight: 500;
  display: inline-block;

  :hover {
    text-decoration: underline;
  }
`;

export const Modal = styled(ModalAntd)`
  .ant-modal-content {
    background-color: var(--bg-dark);
    padding: 1rem;
    ${screens.xl} {
      padding: 1rem;
    }
    .ant-modal-header {
      background-color: var(--bg-dark);
      border: 0;
    }
    .ant-modal-close-x {
      color: var(--color-icon);
    }
  }
  .ant-card-meta-title {
    color: var(--color-text);
    font-size: 1rem;
  }
`;

export const CertificateContainer = styled.div`
  background-color: var(--bg-dark-hight);
  padding: 1rem;
  ${screens.xl} {
    padding: 2rem;
  }
`;

export const CarrouselItem = styled.div``;

export const FigureImage = styled.figure`
  max-width: 500px;
  margin: 0 auto;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Carousel = styled(CarouselAntd)`
  && {
    display: none;
  }
  ${screens.xl} {
    && {
      display: block;
    }
  }
`;
