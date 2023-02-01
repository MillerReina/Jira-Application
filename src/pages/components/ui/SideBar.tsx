import { useContext } from 'react';
import Box from '@mui/material/Box';
import { ListItem, Typography, List, ListItemIcon, ListItemText, Drawer } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import EmailIcon from '@mui/icons-material/Email';
import { UIContext } from '@/context/ui';

const menuItems = ['Inbox', 'Starred', 'Send email', 'Drafts'];

const SideBar = () => {

    const { sideMenuOpen, closeSideMenu } = useContext(UIContext);


    return (
        <Drawer anchor="left" open={sideMenuOpen} onClose={closeSideMenu}>
            <Box sx={{ width: 250 }}>
            </Box>
            <Box sx={{ padding: '5px 10px' }}>
                <Typography variant="h4">
                    Menú
                </Typography>
            </Box>
            <List>
                {
                    menuItems.map((text, index) => (
                        <ListItem key={text}>
                            <ListItemIcon>
                                {index % 2 ? <InboxIcon /> : <EmailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text}>
                            </ListItemText>
                        </ListItem>
                    ))
                }
            </List>
        </Drawer>
    )
}

export default SideBar