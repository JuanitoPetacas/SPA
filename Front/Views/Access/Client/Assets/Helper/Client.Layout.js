import { GetHost, CreateCss, SetIcon, SetHeader, SetNavBar, SetFooter } from '../../../../Assets/Js/globals.functions.js';
import { SetAside } from '../../../Utils/asidebar.js';
CreateCss(`${GetHost()}/Front/Views/Assets/Css/styles.css`);
SetIcon(`${GetHost()}/Front/Views/Assets/Img/Spa_Logo.webp`);
SetHeader('header');
SetNavBar('nav');
const jsonButtons = [
    { text: 'Citas', href: '/Front/Views/Access/Client/Citas/', icon: 'bi-people-fill' },
];
SetAside(jsonButtons);
SetFooter('footer');