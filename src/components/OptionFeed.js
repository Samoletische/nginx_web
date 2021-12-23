import React from 'react';

import styled from 'styled-components';
const OptionWrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
    /*margin-bottom: 2em;
    padding-bottom: 2em;*/
    border-bottom: 1px solid #f5f4f0;
`;

import Option from './Option';

const OptionFeed = ({ options }) => {
    return (
        <div>
            {options.map(option => (
                <OptionWrapper key={option.id}>
                    <Option option={option} />
                </OptionWrapper> ))}
        </div> );
};
export default OptionFeed;