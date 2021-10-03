import React from 'react';

const Spinner = (props) => {
    return (
        <div>
            <div className="ui active inline loader"></div>
            <span>{props.message}</span>
        </div>
        
    );
};

Spinner.defaultProps = {
    message: 'Loading...'
};

export default Spinner;