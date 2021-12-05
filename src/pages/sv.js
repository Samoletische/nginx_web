import React, { useEffect } from 'react';

const svAPI = () => {
    useEffect(() => {
        // Обновляем заголовок документа
        document.title = 'Настройки Шины - упр. сервисы';
    });
    return (
        <div>
            <p>Здесь настройки для упр. сервисов</p>
        </div>
    );
};

export default svAPI;