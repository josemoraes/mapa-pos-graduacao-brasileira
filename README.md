# mapa-pos-graduacao-brasileira
Esse app terá o objetivo mapear as universidades que oferecem curso de pós graduação. O MVP do site será: Pós graduação em Ciência da Computação; Sem persistência de dados, apenas um JSON; e integrado com GMaps.

> As tarefas estão definidas na issue "Dashboard de Tarefas"


# Estrutura de Dados
```javascript

college:{
  name: "...",
  initials: "...",
  programs:[
    {
      name: "...",
      initials: "...",
      level: "...",
      page_link: "...",
      use_pos_comp: boolean,
      address:[
        {
          state: "...",
          city: "...",
          coordinates: "...",
        }
      ],
      research_scholarships:[
        {
          scholarship_level: "...",
          quantity_scholarship_holders: 0
        }
      ],
      research_lines:[
        {
          name: "...",
        }
      ]
    }
  ]
}

```