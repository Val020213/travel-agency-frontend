import React from 'react';
import { useState } from 'react';

type MenuProps = {
    defaultOpen?: boolean;
    menuItems: React.ReactNode[];
};

export const Menu: React.FC<MenuProps> = ({
    defaultOpen = false,
    menuItems,
}) => {
    const [show, setShow] = useState<boolean>(false);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleMenuItemClick = (index: number) => {
        setActiveIndex(index);
        setShow(false);
    };

    const handleButtonClick = () => {
        setShow(!show);
    };

    return (
        <div>
            <button onClick={handleButtonClick}>{menuItems[activeIndex]}</button>
            {menuItems.map((menuItem, index) => (
                <button
                    key={index}
                    onClick={() => handleMenuItemClick(index)}
                    className={index === activeIndex ? 'active' : ''}
                >
                    {menuItem}
                </button>
            ))}
        </div>
    );
};
