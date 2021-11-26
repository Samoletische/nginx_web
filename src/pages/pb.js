import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const pbAPI = () => {
    useEffect(() => {
        // Обновляем заголовок документа
        document.title = 'nginx API — public data';
    });
    return (
        <div>
            <h1>Пакеты публикации</h1>
            <p>Здесь настройки для пакетов публикаций</p>
            <ul>
                <li>Пакеты публикации</li>
                <li><Link to="/sv">Управляемые сервисы</Link></li>
                <li><Link to="/ws">Web-сервисы</Link></li>
                <li><Link to="/hs">Http-сервисы</Link></li>
            </ul>
        </div>
    );
};

export default pbAPI;