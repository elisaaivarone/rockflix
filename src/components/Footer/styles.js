import styled from 'styled-components';
import logo from '../../assets/img/logo-footer.svg'


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

 export const LogoImersao = styled.img.attrs(
  { src: logo, alt: 'Logo da Imersao React da Alura' })`
    height: 35px;
    vertical-align: middle;
    margin-left: 8px;

`;



