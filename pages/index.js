import React from 'react'

import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import ProfileSidebar from '../src/components/ProfileSideBar'

function ProfileRelationsBox(props) {
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
      {props.title} ({props.items.length})
      </h2>
      <ul>
      {/* {seguidores.map((itemAtual) => {
          return (
            <li key={itemAtual.id}>
              <a href={`https://github.com/${itemAtual}.png`}>
                <img src={itemAtual.image} />
                <span>{itemAtual.title }</span>
              </a>
            </li>
          )
        })} */}
      </ul>
    </ProfileRelationsBoxWrapper>
  )
}

export default function Home() {
  const User = 'Manuel8Dias'

  const [comunidades, setComunidades] = React.useState([{
    id: '1237298462367',
    title: 'Eu odeio acordar cedo',
    image: 'http://alurakut.vercel.app/capa-comunidade-01.jpg'
  }])

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

  const [seguidores, setSeguidores] = React.useState([])

  React.useEffect(function() {
    fetch('https://api.github.com/users/Manuel8Dias/followers')
      .then(function(respostaDoServidor) {
        if(respostaDoServidor.ok) {
          return respostaDoServidor.json()
          }
          throw new Error('Aconteceu um problema ' + respostaDoServidor.status)
      })
      .then(function(respostaCompleta) {
        setSeguidores(respostaCompleta)
      })
      .catch(function(erro) {
        console.error(erro)
      })
  }, [])

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
              const dadosDoForm = new FormData(e.target)

              const comunidade = {
                id: new Date().toISOString(),
                title: dadosDoForm.get('title'),
                image: dadosDoForm.get('image'),
              }
              const comunidadesActualizadas = [...comunidades, comunidade]

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
        
        <ProfileRelationsBox
          title="Seguidores"
          items={seguidores}
        />

        <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da Comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
            {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
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
          <h2 className="smallTitle">
              Comunidades ({comunidades.length})
            </h2>
              <ul>
              {comunidades.map((itemAtual) => {
                  return (
                    <li key={itemAtual.id}>
                      <a href={`/users/${itemAtual.title}`}>
                        <img src={itemAtual.image} />
                        <span>{itemAtual.title }</span>
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
