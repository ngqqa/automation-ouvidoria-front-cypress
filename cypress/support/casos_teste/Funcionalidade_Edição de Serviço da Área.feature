# language: pt

Funcionalidade: Nome da Funcionalidade
 Como supervisor ou ouvidor
  Eu quero editar os dados de um serviço previamente cadastrado
   Para que as informações estejam atualizadas e consistentes

Contexto:
    Dado que estou autenticado como supervisor ou ouvidor
    E existe um serviço ativo com formulários ou assuntos ativos associados

  Cenário: Impedir inativação de serviço com formulários ou assuntos ativos
    Quando eu tento marcar o serviço como inativo
    E clico em salvar
    Então o sistema deve impedir a inativação
    E exibir uma mensagem de erro informando que há dependências ativas

  Cenário: Refletir alterações imediatamente na base de dados
    Dado que estou autenticado como supervisor ou ouvidor
    E acesso a tela de edição de um serviço
    Quando eu altero o nome e a descrição do serviço
    E clico em salvar
    Então o sistema deve atualizar os dados na base de dados
    E os dados atualizados devem aparecer corretamente em todas as telas onde o serviço é exibido

  Cenário: Impedir duplicidade de nome ignorando maiúsculas e minúsculas
    Dado que existe um serviço cadastrado com o nome "Exemplo"
    Quando eu tento salvar um serviço com o nome "exemplo"
    Então o sistema deve impedir o salvamento
    E exibir uma mensagem de erro informando que o nome já está em uso

  Cenário: Verificar unicidade considerando acentuação e caracteres especiais
    Dado que existe um serviço cadastrado com o nome "Área"
    Quando eu tento salvar um serviço com o nome "ÁREA"
    Então o sistema deve considerar os nomes como diferentes
    E permitir o salvamento

  Cenário: Exibir mensagem de erro ao detectar duplicidade
    Dado que estou autenticado como supervisor ou ouvidor
    E tento salvar um serviço com nome já existente
    Quando o sistema detecta a duplicidade
    Então o sistema deve exibir uma mensagem clara informando que o nome já está cadastrado
    E impedir o salvamento
