import React from 'react';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import styled from 'styled-components';
import Button from './Button';

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

const SmallField = styled.input`
    width: 40px;
    border: 0px;
    padding: 5px;
`;

const MediumField = styled.input`
    width: 100px;
    border: 0px;
    padding: 5px;
`;

const LargeField = styled.input`
    width: 220px;
    border: 0px;
    padding: 5px;
`;

const MediumLabel = styled.label`
    width: 90px;
    border: 0px;
    padding: 5px;
`;

const Option = ({ option }) => {
    return (
        <StyledOption>
            <MetaData>
                <MetaInfo>
                    <SmallField
                        type="text"
                        className="destination"
                        placeholder="gp"
                        value={option.destination}
                    />
                    <LargeField
                        required
                        type="text"
                        className="name"
                        placeholder="typeInvoice"
                        value={option.name}
                    />
                    <LargeField
                        required
                        type="text"
                        className="baseURL"
                        placeholder="http://sandbox-1.dellin.local"
                        value={option.baseURL}
                    />
                    <MediumField
                        required
                        type="text"
                        className="author"
                        placeholder="dkhodosevich"
                        value={option.author}
                    />
                    <MediumLabel>
                        {format(option.updatedAt, 'DD.MM.YYYY')}
                    </MediumLabel>
                </MetaInfo>
                <UserActions>
                    <Button>
                        Применить
                    </Button>
                </UserActions>
            </MetaData>
        </StyledOption>
    );
};
export default Option;