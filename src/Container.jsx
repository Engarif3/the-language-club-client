import React from 'react';

const Container = ({children}) => {
    return (
        <div className='max-w-[2520px] mx-aut0 xl:px-20 md:px-20 sm:px-2 px-4'>
            {children}
        </div>
    );
};

export default Container;