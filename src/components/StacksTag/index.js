import React from "react";
import styled from "styled-components";
import { FaReact, FaPhp } from "react-icons/fa";
import { SiMysql, SiMongodb, SiStyledcomponents } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { Container } from "./styles";

function StacksTag({ title }) {
  const stacks = {
    react: {
      icon: <FaReact size={15} />,
      name: "React JS",
      backgroundColor: "#61DAFB", // cor de fundo para React JS
      textColor: "#000000", // cor de fonte que contrasta bem com a cor de fundo
    },
    php: {
      icon: <FaPhp size={15} />,
      name: "PHP",
      backgroundColor: "#777BB4", // cor de fundo para PHP
      textColor: "#FFFFFF", // cor de fonte que contrasta bem com a cor de fundo
    },
    sql: {
      icon: <SiMysql size={15} />,
      name: "MySQL",
      backgroundColor: "#00758F", // cor de fundo para MySQL
      textColor: "#FFFFFF", // cor de fonte que contrasta bem com a cor de fundo
    },
    html: {
      icon: <AiFillHtml5 size={15} />,
      name: "HTML",
      backgroundColor: "#E34C26", // cor de fundo para HTML
      textColor: "#FFFFFF", // cor de fonte que contrasta bem com a cor de fundo
    },
    css: {
      icon: <DiCss3 size={15} />,
      name: "CSS",
      backgroundColor: "#264DE4", // cor de fundo para CSS
      textColor: "#FFFFFF", // cor de fonte que contrasta bem com a cor de fundo
    },
    mongo: {
      icon: <SiMongodb size={15} />,
      name: "MongoDB",
      backgroundColor: "#4DB33D", // cor de fundo para MongoDB
      textColor: "#FFFFFF", // cor de fonte que contrasta bem com a cor de fundo
    },
    styledComponents: {
      icon: <SiStyledcomponents size={20} />,
      name: "styled-components",
      backgroundColor: "#DB7093", // cor de fundo para styled-components
      textColor: "#FFFFFF", // cor de fonte que contrasta bem com a cor de fundo
    },
  };

  const stack = stacks[title];

  return (
    <Container
      backgroundColor={stack?.backgroundColor}
      textColor={stack?.textColor}
    >
      {stack && (
        <>
          {stack.icon}
          <span>{stack.name}</span>
        </>
      )}
    </Container>
  );
}

export default StacksTag;