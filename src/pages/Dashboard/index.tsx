import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>
    <Form>
      <input type="text" placeholder="Digite aqui" />
      <button type="submit">Pesquisar</button>
    </Form>
    <Repositories>
      <a href="teste">
        <img
          src="https://avatars0.githubusercontent.com/u/2254731?s=460&u=c34dfbafb54d6bb7c3f715ebe93a811cc7355771&v=4"
          alt="Diego Fernandes"
        />
        <div>
          <strong>Rocketseat/unform</strong>
          <p>
            Easy peasy highly scalable ReactJS & React Native forms!
          </p>
        </div>
        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img
          src="https://avatars0.githubusercontent.com/u/2254731?s=460&u=c34dfbafb54d6bb7c3f715ebe93a811cc7355771&v=4"
          alt="Diego Fernandes"
        />
        <div>
          <strong>Rocketseat/unform</strong>
          <p>
            Easy peasy highly scalable ReactJS & React Native forms!
          </p>
        </div>
        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img
          src="https://avatars0.githubusercontent.com/u/2254731?s=460&u=c34dfbafb54d6bb7c3f715ebe93a811cc7355771&v=4"
          alt="Diego Fernandes"
        />
        <div>
          <strong>Rocketseat/unform</strong>
          <p>
            Easy peasy highly scalable ReactJS & React Native forms!
          </p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
