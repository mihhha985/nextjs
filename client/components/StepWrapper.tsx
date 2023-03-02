import React from "react";

interface StepWrapperProps{
    activeStep: number;
    children:any;
}

const StepWrapper: React.FC<StepWrapperProps> = ({activeStep = 0, children}) => {

    return (
        <div>
            {activeStep === 0 && 'done!'}
            {children}    
        </div>
    )
}

export default StepWrapper;