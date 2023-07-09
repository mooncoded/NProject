import React from 'react';
import { Container, Spacing, } from "./styles";
import AboutUs from "../../components/AboutUs";
import AboutRow from "../../components/AboutRow";
import Support from "../../components/Support";
import ScrollContainer from "react-indiana-drag-scroll";
import stack1 from "../../assets/images/stack1.png";
import stack2 from "../../assets/images/stack2.png";
import stack3 from "../../assets/images/stack3.png";
import stack4 from "../../assets/images/stack4.png";
import stack5 from "../../assets/images/stack5.png";
import stack6 from "../../assets/images/stack6.png";
import stack7 from "../../assets/images/stack7.png";
import stack8 from "../../assets/images/stack8.png";
import stack9 from "../../assets/images/stack9.png";
import Budget from '../../components/Budget';

function FleetManagement() {
    const stacks = [
        { name: stack8, size: "100px" },
        { name: stack1, size: "60px" },
        { name: stack3, size: "100px" },
        { name: stack6, size: "100px" },
        { name: stack7, size: "100px" },
        { name: stack9, size: "60px" },
      ];

    return (
        <Container>
          <Spacing />
    
          {/* Sobre nós */}
          <AboutUs imageleft/>
    
          {/* Nossos serviços */}
          <AboutRow />
    
          <div style={{ marginBottom: "50px" }}></div>

          {/* Faça seu orçamento */}
          <Budget />
          
          <ScrollContainer className="scroll-container">
            {stacks.map((stack) => (
              <div
                key={stacks[stack.name]}
                style={{
                  scrollBehavior: "smooth",
                  marginBottom: "50px",
                }}
              >
                <img
                  src={stack.name}
                  className="stacks"
                  alt={stack.name}
                  style={{
                    pointerEvents: "none",
                    userSelect: "none",
                    width: stack.size,
                  }}
                />
              </div>
            ))}
          </ScrollContainer>
          <Support copyright/>
        </Container>
    );
}

export default FleetManagement;