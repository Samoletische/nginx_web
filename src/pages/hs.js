import React, { useEffect } from 'react';

const hsAPI = () => {
    useEffect(() => {
        // Обновляем заголовок документа
        document.title = 'Настройки Шины - http-сервисы';
    });
    return (
        <div>
            <p>Здесь настройки для http-сервисов</p>
        </div>
    );
};

export default hsAPI;