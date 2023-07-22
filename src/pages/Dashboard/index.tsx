import React from 'react';
import {FiChevronRight} from 'react-icons/fi'
import {Title, Form, Repos} from './styles'

import logo from '../../assets/logo.svg'

export const Dashboard: React.FC = () => {
    return (
      <>
        <img src={logo} alt="GitCollection"/>

        <Title>Catálogo de Repositórios do GitHub</Title>
        <Form>
          <input placeholder="username/repositorie" />
          <button type='submit'>Buscar</button>
        </Form>

        <Repos>
          <a href="/repositories">
            <img src="https://avatars.githubusercontent.com/u/43724476?v=4" alt="Repositorio" />
            <div>
              <strong>wandersondevops/reactjs-nextjs</strong>
              <p>React and Next Course</p>
            </div>
            <FiChevronRight size={20}/>
          </a>
        </Repos>
      </>
    );
  };
  