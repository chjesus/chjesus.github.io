import styled from 'styled-components';

// type Attribute = {
//   border: boolean;

// };

export const Container = styled.div`
  max-width: 1366px;
  padding: 0 100px;
  margin: 0 auto;
  height: inherit;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const TitleH1 = styled.h1`
  font-size: 56px;
  text-align: center;
  margin: 0;
  color: var(--color-normal-title);
`;

export const TitleH2 = styled.h2`
  font-size: 36px;
  text-align: center;
  margin: 0;
  color: var(--color-normal-title);
`;

export const TitleH3 = styled.h3`
  font-size: 24px;
  text-align: center;
  margin: 0;
  color: var(--color-normal-title);
`;

export const TitleH4 = styled.h4`
  font-size: 18px;
  text-align: center;
  margin: 0;
  color: var(--color-normal-title);
`;

export const TitleH5 = styled.h5`
  font-size: 14px;
  text-align: center;
  margin: 0;
  color: var(--color-normal-title);
`;

export const TitleH6 = styled.h6`
  font-size: 13px;
  text-align: center;
  margin: 0;
  color: var(--color-normal-title);
`;

export const Text = styled.p`
  font-size: 18px;
  color: var(--color-normal-title);
`;

export const Span = styled.span`
  color: var(--color-hight-title);
`;

export const DivContainer = styled.div`
  background-color: var(--bg-dark-hight);
  width: 100%;
  padding: 100px 0;
`;

// export const DivBorder = styled.div<Attribute>`
//   padding-left: 55px;
//   margin-left: 100px;
//   border-left: ${(props) => (props.border ? 'solid' : 'initial')};
//   border-width: 5px;
//   border-color: var(--color-border);
// `;
