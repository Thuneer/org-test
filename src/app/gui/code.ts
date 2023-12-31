export const ExampleCode = `
{
"boxes": [
  {
    "title": "Direktør", 
    "id": "dir", 
    "backgroundColor": "#0062BA"
  },
  {
    "title": "Tilsynet for universell utforming av ikt", 
    "id": "tilsyn", 
    "url": "https://vg.no", 
    "parent": "dir",
    "offset": true,
    "backgroundColor": "#95227D"
  },
  {
    "title": "Kommunikasjon", 
    "id": "kom", 
    "url": "https://vg.no", 
    "parent": "dir"
  },
  {
    "title": "Verksemdstyring", 
    "id": "verk", 
    "url": "https://vg.no", 
    "parent": "dir"
  },
  {
    "title": "HR", 
    "id": "hr", 
    "url": "https://vg.no", 
    "parent": "dir"
  },
  {
    "title": "Tverrgåande marknadsgruppe", 
    "id": "tverr", 
    "url": "https://vg.no", 
    "parent": "dir"
  },
  {
    "title": "Samanhengande tenester og livshendingar", 
    "id": "samenhengende_tjenester", 
    "url": "https://vg.no", 
    "parent": "dir"
  },
  {
    "title": "Seksjon 1", 
    "id": "seksjon_1", 
    "url": "https://vg.no", 
    "parent": "samenhengende_tjenester"
  },
  {
    "title": "Seksjon 2", 
    "id": "seksjon_2", 
    "url": "https://vg.no", 
    "parent": "samenhengende_tjenester"
  },
  {
    "title": "Digital strategi og samhandling", 
    "id": "digital_strategi", 
    "url": "https://vg.no", 
    "parent": "dir"
  },
  {
    "title": "Nasjonal arkitektur", 
    "id": "nasjonal_arkitektur", 
    "url": "https://vg.no", 
    "parent": "digital_strategi"
  }, 
  {
    "title": "Internasjonalt og analyse", 
    "id": "internasjonalt", 
    "url": "https://vg.no", 
    "parent": "digital_strategi"
  }, 
  {
    "title": "Fellesløysingar", 
    "id": "fellesløysinger", 
    "url": "https://vg.no", 
    "parent": "dir"
  },
  {
    "title": "Strategi og forretningsutvikling", 
    "id": "felles_strategi_forretning", 
    "url": "https://vg.no", 
    "parent": "fellesløysinger"
  }, 
  {
    "title": "Utvikling", 
    "id": "utvikling", 
    "url": "https://vg.no", 
    "parent": "fellesløysinger"
  }, 
  {
    "title": "Brukaroppleving og datadeling", 
    "id": "brukaroppleving", 
    "url": "https://vg.no", 
    "parent": "dir"
  },
  {
    "title": "Strategi og forretningsutvikling", 
    "id": "brukar_strategi_forretning", 
    "url": "https://vg.no", 
    "parent": "brukaroppleving"
  }, 
  {
    "title": "Utvikling", 
    "id": "strategi_utvikling", 
    "url": "https://vg.no", 
    "parent": "brukaroppleving"
  }
],
"layout": [
  {
    "cols": [
      {
        "col": ["dir"]
      }
    ]
  },
  {
    "cols": [
      {
        "col": [""]
      },
      {
        "col": ["tilsyn"]
      }
    ]
  },
  {
    "cols": [
      {
        "col": ["kom", "verk"]
      },
      {
        "col": ["hr", "tverr"]
      }
    ]
  },
  {
    "cols": [
      {
        "col": ["samenhengende_tjenester"]
      },
      {
        "col": ["digital_strategi"]
      },
      {
        "col": ["fellesløysinger"]
      },
      {
        "col": ["brukaroppleving"]
      }
    ]
  }
]
}
`;
