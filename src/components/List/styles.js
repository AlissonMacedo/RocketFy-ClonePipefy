import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;
  opacity: ${props => props.done ? 0.6 : 1};
  
  /*
  flex: 0 0 320px; - Representa os 3 Flex
  -----------------------------------
  flex-grow: 0 - Não faz nada
  flex-grow: 1 - vai esticar para caber
  flex-grow: 2 - vai esticar 2x mais
  -----------------------------------
  flex-shirk: 0 - Bão faz nada
  flex-shirk: 1 - Reduz para caber
  flex-shirk: 2 - Reduz 2x mais
  -----------------------------------
  flex-basis: 320px - Tamanho base do elemento
  */

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  /* & = a styled.div + div
  só é aplicado caso tenha uma
    div antes da div
    * & - representa div porque o
    componente mestre é uma div.
  */
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }
    button {
      width: 42px;
      height: 42px;
      border-radius: 18px;
      background: #3b5bfd;
      border: 0;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 30px;
  }
`;
