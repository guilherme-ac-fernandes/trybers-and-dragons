# Projeto Trybers and Dragons 🏹🐲🗡

Consiste em uma estrutura de classes para criação de personagens em jogos de interpretação de papéis, conhecido com RPG (Role Playing Game).

* Construída com Typescript
* Utilizando as os princípios da Arquitetura SOLID e POO
* Aplicando Arquitetura de Software, com as camadas de Modelo, Serviço e de Controladores

Nele é possível criamos persongens com a raça (anão elfo, hobbit, orc ou dragão) e podendo ter os arquétipos (mago, necromante, guarda ou guerreiro), juntamento com as informações de nome, pontos de vida, tipo de energia, destreza e defesa. Como descrito na representação abaixo:

```
├─ Character/Monster
│   └─ Name
│   └─ MaxLifePoints
│   └─ LifePoints
│   └─ Defense
│   └─ Dexterity
│   └─ Energy
│   └─ Race
│       ├─ Dwarf
│       ├─ Elf
│       ├─ Halfling
│       ├─ Orc
│       └─ Dragon
│   └─ Archetype
│       ├─ Mage
│       ├─ Necromancer
│       ├─ Ranger
│       └─ Warrior
│   └─ receiveDamage()
│   └─ attack()
│   └─ levelUp()
│   └─ Energy
```
Com os personagens e monstros criados podemos realizar batalhas de dois tipos: personagem contra personagem ou personagem contra vários inimigos ou personagens.

```
├─ Battle
│   └─ PVP (player versus player)
│   └─ PVE (player versus enemies)
```
