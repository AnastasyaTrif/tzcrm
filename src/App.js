import React, { memo } from 'react';
import { AppBar, Toolbar, Box, Link, Button, Container } from '@mui/material'; //компоненты
import { ReactComponent as Logo } from './assets/logo.svg';
import { ReactComponent as ProfileIcon } from './assets/profile.svg';
import { ReactComponent as NotificationIcon } from './assets/notification.svg';

const getFormattedDate = () => {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
};

// стили
const commonTextStyle = {
    fontFamily: 'Inter, sans-serif',
    color: '#151E2D',
};

const menuItems = [
    { name: 'Database', link: '/database' },
    { name: 'Outreach', link: '/outreach' },
    { name: 'Ahrefs', link: '/ahrefs' },
    { name: 'DropDomains', link: '/dropdomains' },
    { name: 'Project & Robot', link: '/project-robot' },
    { name: 'Site Scan', link: '/site-scan' },
    { name: 'Audit', link: '/audit' },
    { name: 'Stat', link: '/stat' },
    { name: 'Tools', link: '/tools' },
];

// Компонент для меню
const Menu = memo(() => (
    <Box sx={{ display: 'flex', marginLeft: '300px', gap: '38px' }}>
        {menuItems.map((item, index) => (
            <Link
                key={index}
                href={item.link}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%',
                    color: '#545C6E',
                    textDecoration: 'none',
                    fontSize: '14px',
                    paddingTop: '18px',
                    paddingBottom: '18px',
                }}
            >
                {item.name}
            </Link>
        ))}
    </Box>
));

const CrmButton = memo(() => (
    <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '38px' }}>
        <Button
            sx={{
                backgroundColor: '#E0E0E0',
                color: '#2F83E6',
                borderRadius: '20px',
                padding: '6px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                border: '1px solid #B0B0B0',
                fontSize: '14px',
            }}
        >
            crm
            <Box sx={{ transform: 'rotate(180deg)' }}>
                <svg width="8" height="5" viewBox="0 0 8 5" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1 1L4 4L7 1"
                        stroke="#2F83E6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </Box>
        </Button>
    </Box>
));

// Основной компонент приложения
function App() {
    return (
        <Box sx={{ backgroundColor: '#F4F4F4', minHeight: '100vh', paddingTop: '64px', fontFamily: 'Inter, sans-serif' }}>
            <AppBar position="fixed" sx={{ backgroundColor: '#FFFFFF', boxShadow: 'none' }}>
                <Toolbar>
                    <Box sx={{ position: 'relative', left: '250px', display: 'flex', alignItems: 'center' }}>
                        <Logo style={{ height: '40px' }} />
                    </Box>
                    <Menu />
                    <CrmButton />
                    <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '60px' }}>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <ProfileIcon />
                            <NotificationIcon />
                        </div>
                    </Box>
                </Toolbar>
            </AppBar>

            <Container>
                <Box
                    sx={{
                        padding: '16px',
                        position: 'relative',
                        left: '1px',
                        marginTop: '25px', //ot navbar
                    }}
                >

                    <Box
                        sx={{
                            fontSize: '14px',
                            color: '#545C6E',
                            fontWeight: 545,
                            marginBottom: '1px',
                        }}
                    >
                        {getFormattedDate()}
                    </Box>

                    <Box sx={{ fontSize: '32px', color: '#151E2D', fontWeight: 'bold' }}>
                        Hello Andrew
                    </Box>

                    <Box
                        sx={{
                            width: '1160px',
                            height: '418px',
                            backgroundColor: '#FCFCFC',
                            borderRadius: '8px', // Радиус углов
                            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Тень
                            padding: '16px', // Внутренние отступы
                            display: 'flex', // Для расположения элементов
                            flexDirection: 'row', // Горизонтальное расположение элементов
                            alignItems: 'flex-start', // элементы наверх
                            gap: '12px', // Отступы между элементами
                            marginTop: '16px',
                        }}
                    >
                        <ProfileIcon style={{ width: '36px', height: '36px' }} />
                        <Box sx={{ fontSize: '20px', color: '#151E2D', fontWeight: '550', fontFamily: 'Inter, sans-serif', display: 'flex', alignItems: 'flex-start', marginTop: '5px' }}>
                            My Task
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default App;