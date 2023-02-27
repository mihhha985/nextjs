import React from "react";
import { Container, StepLabel, Stepper, Step, Grid, Card } from "@material-ui/core";

interface StepWrapperProps{
    activeStep: number;
}

const steps = ['Информация о трэке', 'Загрузите обложку', 'Загрузите сам трек'];

const StepWrapper: React.FC<StepWrapperProps> = ({activeStep, children}) => {

    return (
        <Container>
            <Stepper activeStep={activeStep}>
                {steps.map((step, index) =>
                    <Step
                    key={index}
                    completed={activeStep > index}
                    > 
                        <StepLabel>{step}</StepLabel>
                    </Step>    
                )}
            </Stepper>
            <Grid container 
                justifyContent="center" 
                style={{margin:'70px 0', height:'270px'}}
            >
                <Card style={{width: '600px'}}>
                    {children}
                </Card>
            </Grid>       
        </Container>
    )
}

export default StepWrapper;