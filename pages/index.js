import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

function ProfileSidebar(props) {
  return (
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }} />
    </Box>
  )
}

export default function Home() {
  const User = 'Manuel8Dias'
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
        </div>
      </MainGrid>
    </>
  )
}
