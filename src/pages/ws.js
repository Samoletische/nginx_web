import React, { useEffect } from 'react';

const wsAPI = () => {
    useEffect(() => {
        // Обновляем заголовок документа
        document.title = 'Настройки Шины - web-сервисы';
    });
    return (
        <div>
            <p>Здесь настройки для web-сервисов</p>
        </div>
    );
};

export default wsAPI;