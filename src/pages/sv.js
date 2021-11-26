import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const svAPI = () => {
    useEffect(() => {
        // Обновляем заголовок документа
        document.title = 'nginx API — services';
    });
    return (
        <div>
            <h1>Управляемые сервисы</h1>
            <p>Здесь настройки для упр. сервисов</p>
            <ul>
                <li><Link to="/">Пакеты публикации</Link></li>
                <li>Управляемые сервисы</li>
                <li><Link to="/ws">Web-сервисы</Link></li>
                <li><Link to="/hs">Http-сервисы</Link></li>
            </ul>
        </div>
    );
};

export default svAPI;