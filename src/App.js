import React, { memo } from 'react';
import { AppBar, Toolbar, Box, Link, Button, Container } from '@mui/material'; // Используем компоненты
import { ReactComponent as Logo } from './assets/logo.svg'; // Импортируем логотип
import { ReactComponent as ProfileIcon } from './assets/profile.svg';
import { ReactComponent as NotificationIcon } from './assets/notification.svg';

// Получение текущей даты в нужном формате
const getFormattedDate = () => {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
};

// Стили
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

// Кнопка crm
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
// Основной компонент приложения
function App() {
    return (
        <Box sx={{ backgroundColor: '#F4F4F4', minHeight: '100vh', paddingTop: '64px', fontFamily: 'Inter, sans-serif' }}>
            {/* Навигационная панель */}
            <AppBar position="fixed" sx={{ backgroundColor: '#FFFFFF', boxShadow: 'none' }}>
                <Toolbar>
                    {/* Логотип */}
                    <Box sx={{ position: 'relative', left: '250px', display: 'flex', alignItems: 'center' }}>
                        <Logo style={{ height: '40px' }} />
                    </Box>

                    {/* Меню */}
                    <Menu />

                    {/* Кнопка crm */}
                    <CrmButton />

                    {/* Профиль и иконки */}
                    <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '60px' }}>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <ProfileIcon />
                            <NotificationIcon />
                        </div>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Основной контент */}
            <Container>
                <Box
                    sx={{
                        padding: '16px',
                        position: 'relative',
                        left: '50px', // Совпадает с отступом логотипа
                        marginTop: '25px', // Увеличен отступ после AppBar
                    }}
                >
                    {/* Отображение даты */}
                    <Box
                        sx={{
                            fontSize: '14px', // Сделано чуть толще
                            color: '#545C6E',
                            fontWeight: 545, // Увеличен вес шрифта
                            marginBottom: '1px', // Увеличен отступ перед Hello Andrew
                        }}
                    >
                        {getFormattedDate()}
                    </Box>

                    {/* Текст Hello Andrew */}
                    <Box sx={{ fontSize: '32px', color: '#151E2D', fontWeight: 'bold' }}>
                        Hello Andrew
                    </Box>

                    {/* Контейнер с размером 1160x418 и фоном #FCFCFC */}
                    <Box
                        sx={{
                            width: '1160px',
                            height: '418px',
                            backgroundColor: '#FCFCFC',
                            borderRadius: '8px', // Радиус углов (если нужно)
                            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Тень (если нужно)
                            padding: '16px', // Внутренние отступы
                            display: 'flex', // Для расположения элементов
                            flexDirection: 'row', // Горизонтальное расположение элементов
                            alignItems: 'flex-start', // Поднимите элементы наверх
                            gap: '12px', // Отступы между элементами
                            marginTop: '16px', // Отступ сверху, чтобы контейнер был ровно под надписью
                        }}
                    >
                        {/* Иконка профиля с размером 36x36 */}
                        <ProfileIcon style={{ width: '36px', height: '36px' }} />

                        {/* Текст My Task */}
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