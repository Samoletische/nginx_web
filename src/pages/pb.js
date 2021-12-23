import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';

import OptionFeed from '../components/OptionFeed';
import styled from "styled-components";
import {format} from "date-fns";
import Button from "../components/Button";

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
    query readAll($resource: Resource) {
        readAll(resource: $resource) {
            id
            author
            destination
            name
            updatedAt
            baseURL
        }
    }
`;

const StyledOption = styled.article`
    max-width: 800px;
    margin: 0 auto;
`;

const MetaData = styled.div`
    @media (min-width: 800px) {
      display: flex;
      align-items: top;
    }
`;

const MetaInfo = styled.div`
    padding-right: 7px;
`;

const UserActions = styled.div`
    margin-left: auto;
`;

const SmallLabel = styled.div`
    width: 40px;
    border: 0px;
    padding: 5px;
    
`;

const MediumLabel = styled.div`
    width: 90px;
    border: 0px;
    padding: 5px;
`;

const LargeLabel = styled.div`
    width: 220px;
    border: 0px;
    padding: 5px;
`;

const pbAPI = () => {
    const resource = 'pb';
    const { data, loading, error, fetchMore } = useQuery(OPTION_READ_ALL, { variables: { resource } });

    useEffect(() => {
        // Обновляем заголовок документа
        document.title = 'Настройки Шины - пакеты';
    });

    if (loading) return <p>загрузка...</p>;
    if (error) return <p>ошибка...</p>;

    return (
        <div>
            <StyledOption>
                <MetaData>
                    <MetaInfo>
                        <SmallLabel>Назначение</SmallLabel>
                        <LargeLabel>Имя типа</LargeLabel>
                        <LargeLabel>URL базы разработчика</LargeLabel>
                        <MediumLabel>Автор</MediumLabel>
                        <MediumLabel>Дата</MediumLabel>
                    </MetaInfo>
                    <UserActions>
                        <Button>
                            Добавить
                        </Button>
                    </UserActions>
                </MetaData>
            </StyledOption>
            <OptionFeed options={data.readAll} />
        </div>
    );
};

export default pbAPI;