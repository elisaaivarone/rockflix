import React from 'react';
import { FooterBase, LogoImersao} from './styles';



function Footer() {
  return (
    <FooterBase>
      <p>
        Criado durante a
        <a href="https://www.alura.com.br/"><LogoImersao /></a>  
      </p>
    </FooterBase>
  );
}

export default Footer;
