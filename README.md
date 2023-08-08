# Documentação da Aplicação
  # Comandos para rodar o projeto
    clonar o repositório git clone https://github.com/fabianomarcos/marvel.git
    rodar mpm i
    npm run dev

  # Breve descrição das tecnologias utilizadas
    Projeto criado com NextJs
    Utilizando styled-components
    Todas as requisições de login são realizadas pelo servidor Node do Next.
    Os usuários são guardados em memória, usuários iniciais:
      {
        id: '1d66e534-c560-4389-adc6-1da629286c4e',
        email: 'geronimo@email.com',
        password: '$2a$08$xNlUZ2I09svqqJO/0Anl4eJMn/Xi8AbZmDUroLfSwxtkwwo2ZRykS'
      },
      {
        id: '2d66e534-c560-4389-adc6-1da629286c4e',
        email: 'ana@email.com',
        password: '$2a$08$xNlUZ2I09svqqJO/0Anl4eJMn/Xi8AbZmDUroLfSwxtkwwo2ZRykS'
      },
      {
        id: '3d66e534-c560-4389-adc6-1da629286c4e',
        email: 'jair@email.com',
        password: '$2a$08$xNlUZ2I09svqqJO/0Anl4eJMn/Xi8AbZmDUroLfSwxtkwwo2ZRykS'
      },
      Todas as senhas são 123456

  # Utilização das funcionalidades - Fluxo
    1 - http://localhost:3000/login
      Utilizar um dos emails e senhas acima para entrar na plataforma;

    2 - Caso a pessoa já tenha escolhido o agente preferido o mesmo ficará salvo no link de perfil, 
    caso contrário será redirecionado para a tela de escolha do agente. http://localhost:3000/agent;

    3 - Voltando à tela de login podemos criar um novo usuário, clicando em Cadastrar usuário. 
    O mesmo será redirecionado para a url http://localhost:3000/create-user, onde deverá colocar um email 
    não cadastrado, uma senha e confirmação da mesma;

    4 - Ao clicar em Esqueceu a senha? O usuário colocando um email cadastrado será redirecionado 
    para a rota de alteração de senha, obs.: o jeito correto seria pelo token recebido pelo email. 
    http://localhost:3000/reset-password

    5 - Colocando um email válido e a senha e confirmação iguais, sua senha será redefinida e o 
    usuário será redirecionado para logar na aplicação

    6 - Ao logar o usuário tem a opção de buscar po algum agente, através do input de busca, pode 
    clicar em cada card e ver as informações do  perfil desejado, ou passear pela paginação no rodapé. 
    Obs.: Limitei a 100 agents, pois não encontrei na documentação como buscar por página, então fiz uma paginação pelo frontend.

    7 - No perfil o usuário pode caminhar pelas abas e verificar as informações do agente.

    No final tive alguns imprevistos pessoais e não tive tempo de montar um layout para smartphone

>

