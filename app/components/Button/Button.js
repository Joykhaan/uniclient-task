import React from 'react';

const Button = ({text,w}) => {
    return (
        <div className={`inline-flex items-center border-0 py-1 px-3  md:mt-0 ${w}`}>
            <button className='btns '>{text}</button>
            
        </div>
    );
};

export default Button;