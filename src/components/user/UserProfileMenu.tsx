import { Menu, MenuButton, MenuList, MenuItem, Avatar } from '@chakra-ui/core'
import { signOut } from 'next-auth/client'

interface Props {
  user: {
    name: string 
    email: string 
    image: string
  }
}

const UserProfileMenu: React.FC<Props> = ({ user }) => {
  return (
    <Menu>
      <MenuButton>
        <Avatar src={user.image} cursor="pointer" />
      </MenuButton>
      <MenuList>
        <MenuItem>Configurações</MenuItem>
        <MenuItem onClick={async () => await signOut()}>Sair</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default UserProfileMenu