import Card from "./components/Card"
import "./App.css"

function PortfolioBase({semanas}) {
  const images = [
      "/represent/backend-wp.jpg",
      "/represent/frontend-wp.jpg",
      "/represent/versioning-wp.jpg",
  ];

  return (
    <>

      {
        semanas.map((subj, i) => (
          <div key={i}>
            <hr />
            <h2 
              style={{
                marginTop: "30px",
                fontSize: "1.5em",
                textDecoration: "underline"
              }}>
              {
                i == 0 ? "Back-end" :
                i == 1 ? "Front-end" :
                "Versionamento de Código"
              }
            </h2>
            <div className="cards-grid">
                {subj.map((week, ii) => (
                    <Card
                        key={ii}
                        title={week.sem}
                        subtitle={week.subject}
                        url={week.url}
                        style={{
                            "--bg-image": `url(${images[i]})`,
                        }}
                    />
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
      {sem: "Semana 1", url: "https://github.com/danielcanunciato/portfolio-1bim/tree/main/Backend/s1back", subject: "BACK-END"},
      {sem: "Semana 2", url: "https://github.com/danielcanunciato/portfolio-1bim/tree/main/Backend/s2back", subject: "BACK-END"},
      {sem: "Semana 3", url: "https://github.com/danielcanunciato/portfolio-1bim/tree/main/Backend/s3back", subject: "BACK-END"},
      {sem: "Semana 4", url: "https://github.com/danielcanunciato/portfolio-1bim/tree/main/Backend/s4back", subject: "BACK-END"},
      {sem: "Semana 5", url: "https://github.com/danielcanunciato/portfolio-1bim/tree/main/Backend/s5back", subject: "BACK-END"},
      {sem: "Semana 6", url: "https://github.com/danielcanunciato/portfolio-1bim/tree/main/Backend/s6back", subject: "BACK-END"},
      {sem: "Semana 7", url: "https://github.com/danielcanunciato/portfolio-1bim/blob/main/Backend/s7back", subject: "BACK-END"}
    ],

    // Frontend
    [
      {sem: "Semana 1", url: "https://github.com/danielcanunciato/portfolio-1bim/blob/main/Frontend/s1front", subject: "FRONT-END"},
      {sem: "Semana 2", url: "https://github.com/danielcanunciato/portfolio-1bim/blob/main/Frontend/s2front", subject: "FRONT-END"},
      {sem: "Semana 3", url: "https://github.com/danielcanunciato/portfolio-1bim/blob/main/Frontend/s3front", subject: "FRONT-END"},
      {sem: "Semana 4", url: "https://github.com/danielcanunciato/portfolio-1bim/blob/main/Frontend/s4front", subject: "FRONT-END"},
      {sem: "Semana 5", url: "https://github.com/danielcanunciato/portfolio-1bim/tree/main/Frontend/s5front", subject: "FRONT-END"},
      {sem: "Semana 6", url: "https://github.com/danielcanunciato/portfolio-1bim/tree/main/Frontend/s6front", subject: "FRONT-END"},
      {sem: "Semana 7", url: "https://github.com/danielcanunciato/portfolio-1bim/blob/main/Frontend/s7front", subject: "FRONT-END"}
    ],

    // Frontend
    [
      {sem: "Semana 1", url: "https://github.com/danielcanunciato/portfolio-1bim/blob/main/Versionamento/s1ver", subject: "VERSIONAMENTO DE CÓDIGO"},
      {sem: "Semana 2", url: "https://github.com/danielcanunciato/portfolio-1bim/blob/main/Versionamento/s2ver", subject: "VERSIONAMENTO DE CÓDIGO"},
      {sem: "Semana 3", url: "https://github.com/danielcanunciato/portfolio-1bim/blob/main/Versionamento/s3ver", subject: "VERSIONAMENTO DE CÓDIGO"},
      {sem: "Semana 4", url: "https://github.com/danielcanunciato/portfolio-1bim/blob/main/Versionamento/s4ver", subject: "VERSIONAMENTO DE CÓDIGO"},
      {sem: "Semana 5", url: "https://github.com/danielcanunciato/portfolio-1bim/blob/main/Versionamento/s5ver", subject: "VERSIONAMENTO DE CÓDIGO"},
      {sem: "Semana 6", url: "https://github.com/danielcanunciato/portfolio-1bim/blob/main/Versionamento/s6ver", subject: "VERSIONAMENTO DE CÓDIGO"},
      {sem: "Semana 7", url: "https://github.com/danielcanunciato/portfolio-1bim/blob/main/Versionamento/s7ver", subject: "VERSIONAMENTO DE CÓDIGO"},
    ],
  ]

  const portfolio_2bim = [
    // Backend
    [
      {sem: "Semana 8", url: "https://github.com/danielcanunciato/Portfolio-2BIM/tree/main/backend/sem8", subject: "BACK-END"},
      {sem: "Semana 9", url: "https://github.com/danielcanunciato/Portfolio-2BIM/tree/main/backend/sem9", subject: "BACK-END"},
      {sem: "Semana 10", url: "https://github.com/danielcanunciato/Portfolio-2BIM/tree/main/backend/sem10", subject: "BACK-END"},
      {sem: "Semana 11", url: "https://github.com/danielcanunciato/Portfolio-2BIM/tree/main/backend/sem11", subject: "BACK-END"},
      {sem: "Semana 12", url: "https://github.com/danielcanunciato/Portfolio-2BIM/tree/main/backend/sem12", subject: "BACK-END"},
      {sem: "Semana 13", url: "https://github.com/danielcanunciato/Portfolio-2BIM/tree/main/backend/sem13", subject: "BACK-END"},
      {sem: "Semana 14", url: "https://github.com/danielcanunciato/Portfolio-2BIM/tree/main/backend/sem14", subject: "BACK-END"}
    ],

    // Frontend
    [
      {sem: "Semana 8", url: "https://github.com/danielcanunciato/Portfolio-2BIM/tree/main/frontend/sem8", subject: "FRONT-END"},
      {sem: "Semana 9", url: "https://github.com/danielcanunciato/Portfolio-2BIM/tree/main/frontend/sem9", subject: "FRONT-END"},
      {sem: "Semana 10", url: "https://github.com/danielcanunciato/Portfolio-2BIM/tree/main/frontend/sem10", subject: "FRONT-END"},
      {sem: "Semana 11", url: "https://github.com/danielcanunciato/Portfolio-2BIM/tree/main/frontend/sem11", subject: "FRONT-END"},
      {sem: "Semana 12", url: "https://github.com/danielcanunciato/Portfolio-2BIM/tree/main/frontend/sem12", subject: "FRONT-END"},
      {sem: "Semana 13", url: "https://github.com/danielcanunciato/Portfolio-2BIM/tree/main/frontend/sem13", subject: "FRONT-END"},
      {sem: "Semana 14", url: "https://github.com/danielcanunciato/Portfolio-2BIM/tree/main/frontend/sem14", subject: "FRONT-END"}
    ],

    // Versionamento
    [
      {sem: "Semana 8", url: "https://github.com/danielcanunciato/Portfolio-2BIM/tree/main/versionamento/sem8", subject: "VERSIONAMENTO DE CÓDIGO"},
      {sem: "Semana 9", url: "https://github.com/danielcanunciato/Portfolio-2BIM/tree/main/versionamento/sem9", subject: "VERSIONAMENTO DE CÓDIGO"},
      {sem: "Semana 10", url: "https://github.com/danielcanunciato/Portfolio-2BIM/tree/main/versionamento/sem10", subject: "VERSIONAMENTO DE CÓDIGO"},
      {sem: "Semana 11", url: "https://github.com/danielcanunciato/Portfolio-2BIM/tree/main/versionamento/sem11", subject: "VERSIONAMENTO DE CÓDIGO"},
      {sem: "Semana 12", url: "https://github.com/danielcanunciato/Portfolio-2BIM/tree/main/versionamento/sem12", subject: "VERSIONAMENTO DE CÓDIGO"},
      {sem: "Semana 13", url: "https://github.com/danielcanunciato/Portfolio-2BIM/tree/main/versionamento/sem13", subject: "VERSIONAMENTO DE CÓDIGO"},
    ]
  ]

  return (
    <>
    
      <div className="intro">
        <h1>PORTFÓLIO</h1>
        <p>
          Sou <b>Daniel Anunciato</b>, um estudante no ensino técnico em Desenvolvimento de Sistemas, 
          produzi este portfólio como uma atividade que incluí os repositórios das atividades 
          do primeiro bimestre até o quarto bimestre.
        </p>
        <p>
          Estudo no Curso Técnico de DS com Ensino Médio na escola <b>E.E. P.E.I. Josue Benedicto Mendes Professor</b>, aqui fica todas as atividades das matérias de 
          Back-end, Front-end e Versionamento de Código feitos durante o curso em 2026.
        </p>
      </div>

      <div className="pf-bim">
        <h1>Portfólio 1º Bimestre</h1>
        <PortfolioBase semanas={portfolio_1bim} />
      </div>

      <div className="divider" />

      <div className="pf-bim">
        <h1>Portfólio 2º Bimestre</h1>
        <PortfolioBase semanas={portfolio_2bim} />
      </div>

      <div className="divider" />

      <div className="pf-bim">
        <h1>Portfólio 3º Bimestre</h1>
        <p style={{marginBottom: "10px"}}>Em breve.</p>
      </div>

      <div className="divider" />

      <div className="pf-bim">
        <h1>Portfólio 4º Bimestre</h1>
        <p style={{marginBottom: "10px"}}>Em breve.</p>
      </div>

      <div className="divider" />

      <div className="pf-bim">
        <h1>TCC</h1>
          <Card
              title="Cointrive"
              subtitle="Projeto de TCC"
              url="https://github.com/danielcanunciato/TCC-PROJ-FINAL"
              style={{
                  "marginLeft" : "auto",
                  "marginRight" : "auto",
                  "marginBottom" : "20px",
                  "display" : "flex",
                  "flexDirection" : "column",
                  "alignItems" : "center",
                  "width" : "75%",
                  "--bg-image": `url(/represent/tcc-wp.png)`,
              }}
          />
      </div>

    </>
  )
}