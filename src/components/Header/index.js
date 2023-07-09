import React, { useState, useEffect } from "react";
import {
  Container,
  OptionsRow,
  Logo,
  Option,
  LogoWrapper,
  LogoName,
  Menu,
  MobileHeader,
} from "./styles";
import { RiArrowDropDownLine } from "../../styles/Icons";
import logo from "../../assets/images/just-logo.png";
import logo_name from "../../assets/images/logo-name.png";
import Dropdown from "../Dropdown";
import {
  AiOutlineInfoCircle,
  GiTicket,
  IoMapSharp,
  AiFillPhone,
} from "../../styles/Icons";
import { Turn as Hamburger } from "hamburger-react";

function Header() {
  const options = [
    {
      label: "Apps",
      items: [
        { name: "Android e IOS", url: "apps/mobile" },
        { name: "UI e UX degign", url: "apps/uiux" }
      ]
    },
    {
      label: "Software",
      items: [
        { name: "Plataformas Web", url: "software/web" },
        { name: "Gestão e Vendas", url: "software/management" },
        { name: "Controle de Estoque", url: "software/inventory" },
        { name: "Gestão de Frotas", url: "software/fleet" }
      ]
    },
    {
      label: "Web",
      items: [
        { name: "Sites e Portais", url: "web/sites" },
        { name: "Ecommerces", url: "web/ecommerce" },
        { name: "Marketplaces", url: "web/marketplace" }
      ]
    },
    {
      label: "Outsourcing",
      items: [
        { name: "Terceirizações e Squads", url: "outsourcing/squads" },
        { name: "Suporte a Finitecks", url: "outsourcing/finitecks" }
      ]
    }
  ]
  
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [open, setOpen] = useState(false);

  // função para mostrar o dropdown quando o mouse passar sobre o Option
  function handleMouseEnter(index) {
    setActiveDropdown(index);
  }

  // função para esconder o dropdown quando o mouse sair do Option
  function handleMouseLeave() {
    setActiveDropdown(null);
  }

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <>
      {open && (
        <MobileHeader>
          <ul>
            <li>Home</li>
            <li>Conheça</li>
            <li>Apps</li>
            <li>Software</li>
            <li>Web</li>
            <li>Outsourcing</li>
            <a className="contact" href="tel:+5534996484068">
              <AiFillPhone /> Contato
            </a>
          </ul>
        </MobileHeader>
      )}
      <Container isOpen={open}>
        <LogoWrapper>
          <Logo src={logo} />
          <LogoName className="logo-name" src={logo_name} />
        </LogoWrapper>
        <OptionsRow>
          <Option>
            <span>Home</span>
          </Option>
          <Option>
            <span onClick={() => window.location.href='/about'}>Conheça</span>
          </Option>
          {options.map((option, index) => (
            <Option
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <span>{option.label}</span> <RiArrowDropDownLine />
              <Dropdown show={activeDropdown === index} items={option.items} />
            </Option>
          ))}
          <Option>
            <span onClick={() => window.location.href='/contact'}>Contato</span>
          </Option>
          <Menu>
            <Hamburger toggled={open} toggle={setOpen} />
          </Menu>
        </OptionsRow>
      </Container>
    </>
  );
}

export default Header;
