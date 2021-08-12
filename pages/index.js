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

  const [comunidades, setComunidades] = React.useState([])

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

      // API GraphQL - POST
      fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Authorization': '7f7590695431ea76f84616a4b4d32d',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ "query": `query {
        allCommunities {
          id 
          title
          imageUrl
          creatorSlug
        }
      }`})
    })
    .then((response) => response.json()) // Pega o retorno do response.json() e já retorna
    .then((respostaCompleta) => {
      const comunidadesVindasDoDato = respostaCompleta.data.allCommunities;
      console.log(comunidadesVindasDoDato)
      setComunidades(comunidadesVindasDoDato)
    })
    // .then(function (response) {
    //   return response.json()
    // })

  }, [])

  console.log('seguidores antes do return', seguidores);

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
                title: dadosDoForm.get('title'),
                imageUrl: dadosDoForm.get('image'),
                creatorSlug: User,
              }

              fetch('/api/comunidades', {
                method: 'POST',
                headers: {
                  'Content-Type':'application/json',
                }, 
                body: JSON.stringify(comunidade)
              })
              .then(async (response) => {
                const dados = await response.json()
                console.log(dados)
              })

              // const comunidadesActualizadas = [...comunidades, comunidade]

              // setComunidades(comunidadesActualizadas)
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
                      <a href={`/communities/${itemAtual.id}`}>
                        <img src={itemAtual.imageurl} />
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
