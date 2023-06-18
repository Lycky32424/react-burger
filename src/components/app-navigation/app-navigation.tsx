import React from 'react';
import { Button, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-navigation.module.css'


export default function AppNavigation () {
    const [currentPage, setCurrentPage] = React.useState(0);
    const pages = ["Конструктор", "Лента заказов", "Личный кабинет"]
    const [icons, setIcons] = React.useState([
        <BurgerIcon type="primary" />,
        <ListIcon type="secondary" />,
        <ProfileIcon type="secondary" />
    ]);

    React.useEffect(() => {
        switch(currentPage) {
            case 0:
                setIcons([<BurgerIcon type="primary" />,
                <ListIcon type="secondary" />,
                <ProfileIcon type="secondary" />]);
                break;
            case 1:
                setIcons([<BurgerIcon type="secondary" />,
                <ListIcon type="primary" />,
                <ProfileIcon type="secondary" />]);
                break;
            case 2:
                setIcons([<BurgerIcon type="secondary" />,
                <ListIcon type="secondary" />,
                <ProfileIcon type="primary" />]);
                break;
        }
    }, [currentPage]);

    return (
        <nav className={`${styles.nav} pt-4 pb-4`}>
            {
                pages.map((page, i) => {
                    return (
                        <Button htmlType="button" type="secondary" size="medium" onClick={() => setCurrentPage(i)} key={i}
                        { ...currentPage === i ? {extraClass: `${styles.nav_button} pl-5 pr-5 ${styles.active_nav_button}`} 
                        : {extraClass: `${styles.nav_button} pl-5 pr-5 text_color_inactive`}}>
                            <div className='pr-2'>
                                {icons[i]}
                            </div>
                            {page}
                        </Button>
                    )
                })
            }
        </nav>
    );
}