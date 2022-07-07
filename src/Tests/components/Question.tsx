import React from 'react';

type Property = {
    content: string;  
}
export function Question(props: Property) {
    return (
        <h2 className='question'>{props.content}</h2>
    );
}