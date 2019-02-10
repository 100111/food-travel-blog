import React, { Component } from 'react';
import { Step, Stepper, StepLabel, StepContent, StepButton } from 'material-ui/Stepper';
import Paper from 'material-ui/Paper';

class InstructionDetail extends Component {
  constructor(props) {
    super(props)
    const { steps } = props.recipe.instruction;

    if (steps === undefined) {

    } else {
      var activeSteps = new Array(steps.length);
      activeSteps.fill(true);
      this.state = {
        activeSteps: activeSteps
      };
    }
  }

  renderMedia = (step) => {
    const { mediaId, mediaType } = step;
    if (mediaType === 0 || mediaId < 0) {
      return <div className='rep-d-i-no-media' />
    } else if (mediaType === 1) {
      return <div className='rep-d-i-media'
        style={{ backgroundImage: "url(" + this.props.recipe.images[mediaId].link + ")" }} />
    } else {
      return <div className='rep-d-i-media'
        style={{ backgroundImage: "url(" + this.props.recipe.videos[0].link + ")" }} >
        video
      </div>
    }
  }

  renderHeaderPadding = (step) => {
    const { mediaId, mediaType } = step;
    if (mediaType === 0 || mediaId < 0) {
      return <div className='rep-d-i-media' style={{ height: '1px' }} />
    }
    return <div />
  }

  renderSteps = (steps) => {
    if (steps === undefined) {
      return <div className='rep-d-i-steps'>Error loading steps</div>
    } else {
      return <Paper className='rep-d-i-steps-old'>
        <Stepper linear={false} orientation="vertical" connector={<div></div>}>
          {steps.map((step, stepIndex) => {
            return <Step active={stepIndex % 2 === 0 ? true : false} key={stepIndex}>
              <StepButton>{step.summary}</StepButton>
              <StepContent><p>{step.text}</p></StepContent>
            </Step>
          })}
        </Stepper>
      </Paper>
    }
  }

  renderStepsV2 = (steps) => {
    if (steps === undefined) {
      return <div className='rep-d-i-steps'>Error loading steps</div>
    } else {
      return <div className='rep-d-i-steps'>
        {steps.map((step, stepIndex) => {
          return <Paper className='rep-d-i-step' key={stepIndex}>
            {this.renderMedia(step)}
            <div className='step-side-bar'>
              <span className='step-side-bar-header'>
                <svg viewBox="0 0 24 24" className='step-side-bar-number'>
                  <circle cx="12" cy="12" r="10"></circle>
                  <text x="12" y="16" textAnchor="middle" fontSize="12" fill="#fff">{stepIndex + 1}</text>
                </svg>
                {step.summary}
              </span>
              <div className='step-side-bar-text'><p>{step.text}</p></div>
            </div>

          </Paper>
        })}
      </div>
    }
  }

  render() {
    const recipe = this.props.recipe;
    const { steps, equipment } = recipe.instruction;

    return (<div className='rep-d-instrucion'>
      {/* {this.renderSteps(steps)} */}
      {this.renderStepsV2(steps)}
    </div>);
  }
}

export default InstructionDetail;