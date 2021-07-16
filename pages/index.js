import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'

export default function Home() {
  return (
    <MainGrid>
      <div className='profileArea' style={{gridArea: 'profileArea'}}>
        <Box>
          <img src="https://github.com/Manuel8Dias.png" />
        </Box>
      </div>

      <div className='welcomeArea' style={{gridArea: 'welcomeArea'}}>
      <Box>
        Bem-vindo(a) 
      </Box>
      </div>

      <div className='profileRelationsArea' style={{gridArea: 'profileRelationsArea'}}>
        <Box >
          Pessoas da Comunidade
        </Box>
        <Box >
          Comunidades
        </Box>
      </div>
    </MainGrid>
  )
}
