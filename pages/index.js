import React from 'react'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

function ProfileSidebar(props) {
  return (
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }} />

      <hr />

      <p>
        <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
          @{props.githubUser}
        </a>
      </p>

      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default function Home() {
  const User = 'Manuel8Dias'

  const [comunidades, setComunidades] = React.useState(['Alurakut'])

  const pessoasFavoritas = [
    'carolinapinheiro',
    'AlexMSMF',
    'nunopereira78lx',
    'jennybeka',
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'RStankov',
    'loiane',
    'wesbos',
    'Quenedi',
    'codingscode',
    'Motirck',
    'nivaldoandrade',
    'lidy2374',
    'CaioS-github',
  ]

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={User} />
        </div>

        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo(a) 
              <OrkutNostalgicIconSet />
            </h1>
          </Box>
          <Box>
            <h2 className="subTitle">O que deseja fazer?</h2>
            <form onSubmit={ function handleCriarComunidade(e) {
              e.preventDefault()

              const comunidadesActualizadas = [...comunidades, 'Alura Stars']

              setComunidades(comunidadesActualizadas)
            }}>
              <div>
                <input
                  placeholder="Qual vai ser o nome da comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da comunidade?"
                  type="text "
                />
              </div>

              <div>
                <input
                  placeholder="Coloque uma URl para usar como capa"
                  name="image"
                  aria-label="Coloque uma URl para usar como capa" 
                />
              </div>

              <button>
                Criar Comunidade
              </button>
            </form>
          </Box>
        </div>

        <div className='profileRelationsArea' style={{gridArea: 'profileRelationsArea'}}>
        <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da Comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
            {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper>
              <ul>
              {comunidades.map((itemAtual) => {
                  return (
                    <li>
                      <a href={`/users/${itemAtual}`} key={itemAtual}>
                        <img src={`http://placehold.it/300x300`} />
                        <span>{itemAtual}</span>
                      </a>
                    </li>
                  )
                })}
              </ul>
          </ProfileRelationsBoxWrapper>

        </div>
      </MainGrid>
    </>
  )
}
