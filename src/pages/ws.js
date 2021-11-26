import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const wsAPI = () => {
    useEffect(() => {
        // Обновляем заголовок документа
        document.title = 'nginx API — web-services';
    });
    return (
        <div>
            <h1>Web-сервисы</h1>
            <p>Здесь настройки для web-сервисов</p>
            <ul>
                <li><Link to="/">Пакеты публикации</Link></li>
                <li><Link to="/sv">Управляемые сервисы</Link></li>
                <li>Web-сервисы</li>
                <li><Link to="/hs">Http-сервисы</Link></li>
            </ul>
        </div>
    );
};

export default wsAPI;