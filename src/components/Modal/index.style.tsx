import styled from 'styled-components';
import { COLOR, FONT } from '@/constants';

const Container = styled.div`
  position: absolute;
  top: 216px;
  /* left:50%; */
  /* margin-left: -8px; */
  padding: 64px;
  background: ${COLOR.WHITE};
  border-radius: 40px;
  box-shadow: 0px 4px 10px rgba(51, 51, 51, 0.1), 0px 0px 4px rgba(51, 51, 51, 0.05);
  left: calc(50% - 480px);
  width: 100%;
  max-width: 960px;
`;

const Label = styled.label`
  display: block;
  font-weight: ${FONT.WEIGHT.MEDIUM};
`;

const Description = styled.p`
  margin-top: 4px;
  font-size: ${FONT.SIZE.SMALL};
  color: ${COLOR.GREY[300]};
`;

const Empty = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${FONT.SIZE.MEDIUM};
`;

export { Container, Label, Description, Empty };
