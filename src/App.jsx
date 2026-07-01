import Card from "./components/Card"
import "./App.css"

function PortfolioBase({semanas}) {
  return (
    <>

      {
        semanas.map((subj, i) => (
          <div key={i}>
            <hr />
            <h2>
              {
                i == 0 ? "Back-end" :
                i == 1 ? "Front-end" :
                "Versionamento"
              }
            </h2>
            <div className="cards-grid">
              {subj.map((week, ii) => (
                  <Card key={ii} title={week.sem} url={week.url} />
              ))}
            </div>

          </div>
        ))
      }


    
    </>
  )
}

export default function App() {

  const portfolio_1bim = [
    // Backend
    [
      {sem: "Semana 4", url: "https://github.com/danielcanunciato/portfolio-1bim/tree/main/Backend/s4back"},
      {sem: "Semana 5", url: "https://github.com/danielcanunciato/portfolio-1bim/tree/main/Backend/s5back"},
      {sem: "Semana 6", url: "https://github.com/danielcanunciato/portfolio-1bim/tree/main/Backend/s6back"},
      {sem: "Semana 7", url: "https://github.com/danielcanunciato/portfolio-1bim/blob/main/Backend/s7back"}
    ],

    // Frontend
    [
      {sem: "Semana 4", url: "https://github.com/danielcanunciato/portfolio-1bim/blob/main/Frontend/s4front"},
      {sem: "Semana 5", url: "https://github.com/danielcanunciato/portfolio-1bim/tree/main/Frontend/s5front"},
      {sem: "Semana 6", url: "https://github.com/danielcanunciato/portfolio-1bim/tree/main/Frontend/s6front"},
      {sem: "Semana 7", url: "https://github.com/danielcanunciato/portfolio-1bim/blob/main/Frontend/s7front"}
    ]
  ]

  const portfolio_2bim = [
    // Backend
    [
      {sem: "Semana 8", url: "https://github.com/danielcanunciato/Portfolio-2BIM/tree/main/backend/sem8"},
      {sem: "Semana 9", url: "https://github.com/danielcanunciato/Portfolio-2BIM/tree/main/backend/sem9"},
      {sem: "Semana 10", url: "https://github.com/danielcanunciato/Portfolio-2BIM/tree/main/backend/sem10"},
      {sem: "Semana 11", url: "https://github.com/danielcanunciato/Portfolio-2BIM/tree/main/backend/sem11"},
      {sem: "Semana 12", url: "https://github.com/danielcanunciato/Portfolio-2BIM/tree/main/backend/sem12"},
      {sem: "Semana 13", url: "https://github.com/danielcanunciato/Portfolio-2BIM/tree/main/backend/sem13"},
      {sem: "Semana 14", url: "https://github.com/danielcanunciato/Portfolio-2BIM/tree/main/backend/sem14"}
    ],

    // Frontend
    [
      {sem: "Semana 8", url: "https://github.com/danielcanunciato/Portfolio-2BIM/tree/main/frontend/sem8"},
      {sem: "Semana 9", url: "https://github.com/danielcanunciato/Portfolio-2BIM/tree/main/frontend/sem9"},
      {sem: "Semana 10", url: "https://github.com/danielcanunciato/Portfolio-2BIM/tree/main/frontend/sem10"},
      {sem: "Semana 11", url: "https://github.com/danielcanunciato/Portfolio-2BIM/tree/main/frontend/sem11"},
      {sem: "Semana 12", url: "https://github.com/danielcanunciato/Portfolio-2BIM/tree/main/frontend/sem12"},
      {sem: "Semana 13", url: "https://github.com/danielcanunciato/Portfolio-2BIM/tree/main/frontend/sem13"},
      {sem: "Semana 14", url: "https://github.com/danielcanunciato/Portfolio-2BIM/tree/main/frontend/sem14"}
    ],

    // Versionamento
    [
      {sem: "Semana 8", url: "https://github.com/danielcanunciato/Portfolio-2BIM/tree/main/versionamento/sem8"},
      {sem: "Semana 9", url: "https://github.com/danielcanunciato/Portfolio-2BIM/tree/main/versionamento/sem9"},
      {sem: "Semana 10", url: "https://github.com/danielcanunciato/Portfolio-2BIM/tree/main/versionamento/sem10"},
      {sem: "Semana 11", url: "https://github.com/danielcanunciato/Portfolio-2BIM/tree/main/versionamento/sem11"},
      {sem: "Semana 12", url: "https://github.com/danielcanunciato/Portfolio-2BIM/tree/main/versionamento/sem12"},
      {sem: "Semana 13", url: "https://github.com/danielcanunciato/Portfolio-2BIM/tree/main/versionamento/sem13"},
    ]
  ]

  return (
    <>
    
      <h1>PORTFÓLIO</h1>
      <p>Sou Daniel Anunciato, um estudante no ensino técnico em Desenvolvimento de Sistemas, produzi este portfólio como uma atividade que incluí os repositórios das atividades do primeiro bimestre até o quarto bimestre.</p>

      <div className="pf-bim">
        <h3>Portfólio 1 Bimestre</h3>
        <PortfolioBase semanas={portfolio_1bim} />
      </div>

      <div className="pf-bim">
        <h3>Portfólio 2 Bimestre</h3>
        <PortfolioBase semanas={portfolio_2bim} />
      </div>

    </>
  )
}