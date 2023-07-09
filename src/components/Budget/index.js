import React from 'react';
import { Container, ButtonBudget, Button } from './styles';
import { BsWhatsapp } from "react-icons/bs";

function Budget() {
  return (
    <Container>
        <ButtonBudget>
            <div className="main-budget">
              <h1>Faça agora seu orçamento!</h1>
                <Button>
                  <div className='button-manegement'>
                    <BsWhatsapp size={30} />
                    <h4>Clique aqui</h4>
                  </div>
                </Button>
            </div>
        </ButtonBudget>
    </Container>
  );
}

export default Budget;