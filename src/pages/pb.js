import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useQuery, gql } from '@apollo/client';

import Button from '../components/Button';

// const OPTION_READ = gql`
//     query read($id: ID!) {
//         read(id: $id) {
//             resource
//             author
//             name
//             methodName
//             id
//             destination
//             createdAt
//         }
//     }
// `;

const OPTION_READ_ALL = gql`
    query readAll($author: String) {
        readAll(author: $author) {
            id
            author
            destination
            name
            methodName
            resource
            createdAt
            updatedAt
            baseURL
        }
    }
`;

const pbAPI = () => {
    const { data, loading, error, fetchMore } = useQuery(OPTION_READ_ALL);

    useEffect(() => {
        // Обновляем заголовок документа
        document.title = 'Настройки Шины - пакеты';
    });

    if (loading) return <p>загрузка...</p>;
    if (error) return (<p>ошибка...</p>);

    return (
        <div>
            <p>Здесь настройки для пакетов публикаций</p>
            <Button>Жми</Button>
            {data.readAll.map(option => (
                <div key={option.id}>{option.author}</div>
            ))}

        </div>
    );
};

export default pbAPI;