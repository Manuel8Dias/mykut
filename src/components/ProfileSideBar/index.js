
import { AlurakutProfileSidebarMenuDefault } from '../../lib/AlurakutCommons'

import Box from '../Box'
import styled from 'styled-components'

export default function ProfileSidebar(props) {
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