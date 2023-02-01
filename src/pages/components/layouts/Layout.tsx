import Box from '@mui/material/Box'
import Head from 'next/head'
import React, { ReactNode } from 'react'
import { Navbar, SideBar } from '../ui';



interface Props {
    title?: string;
}

const Layout: React.FC<{ children: ReactNode; title?: string }> = ({ children, title }) => {
    return (
        <Box sx={{ flexFlow: 1 }}>
            <Head>
                <title>{title}</title>
            </Head>
            <Navbar></Navbar>
            <SideBar></SideBar>
            <Box sx={{ padding: '10px 20px' }}>
                {children}
            </Box>
        </Box>
    )
}

export default Layout;

