import React from "react";
import './Header.css';

export default({black}) => {
    return (
        <header className={black ? 'black' : '' } >
            <div className="header--logo">
                <a href="/">
                    <img src="https://maisgeek.com/wp-content/uploads/2020/10/netflix_logo-2.png" alt="Netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                <img src="https://i.pinimg.com/originals/a7/50/d6/a750d6fe9faf923f57feaa2cfa5cfc88.png" alt="Usuário"/>
                </a>
            </div>
        </header>
    );
}