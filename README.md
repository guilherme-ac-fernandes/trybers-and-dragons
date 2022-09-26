# Projeto Trybers and Dragons 🏹🐲🗡

Consiste em uma estrutura de classes para criação de personagens em jogos de interpretação de papéis, conhecido com RPG (Role Playing Game).

* Construída com Typescript
* Utilizando as os princípios da Arquitetura SOLID e POO

Nele é possível criamos persongens com a raça (anão, elfo, hobbit, orc ou dragão) e podendo ter os arquétipos (mago, necromante, guarda ou guerreiro), juntamento com as informações de nome, pontos de vida, tipo de energia, destreza e defesa. Como descrito na representação abaixo:

```
 Character/Monster
    └─ Archetype
       ├─ Mage
       ├─ Necromancer
       ├─ Ranger
       └─ Warrior
   └─ Defense
   └─ Dexterity
   └─ Energy
   └─ LifePoints
   └─ MaxLifePoints
   └─ Name
   └─ Race
       ├─ Dwarf
       ├─ Elf
       ├─ Halfling
       ├─ Orc
       └─ Dragon
   └─ attack()
   └─ levelUp()
   └─ receiveDamage()
```
Com os personagens e monstros criados podemos realizar batalhas de dois tipos: personagem contra personagem ou personagem contra vários inimigos ou vários personagens rivais.

```
 Battle
   └─ PVE (player versus enemies)
   └─ PVP (player versus player)
```

### Instruções

- Para rodar o repositório localmente, realize o clone do projeto e utilize os comandos a seguir para inicializar o Docker e instalar as dependências:

```
docker-compose up -d
docker exec -it trybers_and_dragons bash
npm install // para instalar as dependências
docker-compose down // para parar completamente a aplicação
```

**Observação:** Após a instalação das dependências confira os arquivos na pasta `./src`, nela consta as classes criadas para construção dos persongens. No arquivo `./src/index.ts` consta alguns exemplos. Caso deseje explorar, construir personagens e realizar batalhas, o comando `npm start` executa esse script de código no terminal.
