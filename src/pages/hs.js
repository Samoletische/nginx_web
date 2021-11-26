import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const hsAPI = () => {
    useEffect(() => {
        // Обновляем заголовок документа
        document.title = 'nginx API — http-services';
    });
    return (
        <div>
            <h1>Http-сервисы</h1>
            <p>Здесь настройки для http-сервисов</p>
            <ul>
                <li><Link to="/">Пакеты публикации</Link></li>
                <li><Link to="/sv">Управляемые сервисы</Link></li>
                <li><Link to="/ws">Web-сервисы</Link></li>
                <li>Http-сервисы</li>
            </ul>
        </div>
    );
};

export default hsAPI;