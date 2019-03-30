# mapa-pos-graduacao-brasileira
Esse app terá o objetivo mapear as universidades que oferecem curso de pós graduação. O MVP do site será: Pós graduação em Ciência da Computação; Sem persistência de dados, apenas um JSON; e integrado com GMaps.

> **As tarefas estão definidas na issue "Dashboard de Tarefas"**

# Pré-Requisitos para o Ambiente de Desenvolvimento
- [Yarn](https://yarnpkg.com/pt-BR/) para gerenciamento de dependências
- [Babel](https://babeljs.io/) para compilar javascript das versões ES6+ para versões anteriores, e manter os scripts cross-browser

# Estrutura de Dados
```json

[
   {
      "name":"...",
      "initials":"...",
      "address":{
         "state":"...",
         "city":"...",
         "coordinates":{
            "latitude":"...",
            "longitude":"..."
         }
      },
      "programs":[
         {
            "name":"...",
            "initials":"...",
            "level":"...",
            "page_link":"...",
            "use_pos_comp":1,
            "research_scholarships":[
               {
                  "scholarship_level":"...",
                  "quantity_scholarship_holders":0
               }
            ],
            "research_lines":[
               {
                  "name":"..."
               }
            ]
         }
      ]
   }
]

```

# Padrão visual (mockup)

- Mapa fullscreen;
- Botão de pesquisa no canto superior direito que abre um sidebar com opções de filtro para pesquisa;
