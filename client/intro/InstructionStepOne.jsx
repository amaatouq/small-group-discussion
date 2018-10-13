import React from "react";

import { Centered } from "meteor/empirica:core";

import ExampleBoard from "./ExampleBoard";

export default class InstructionStepOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guess: 0
    };
  }

  updateArrow = guess => {
    this.setState({ guess: guess });
  };

  render() {
    const { hasPrev, hasNext, onNext, onPrev, game } = this.props;
    console.log(game);

    return (
      <Centered>
        <div className="instructions">
          <h1 className="bp3-heading">Task Description </h1>
          <p>
            In this experiment, you will perform repeated instances of a visual
            perception task. In the task, you will see a set of dots moving in a
            circular zone as illustrated in the example below:
          </p>

          <div className="taskExample">
            <ExampleBoard
              guess={this.state.guess}
              isOutcome={false}
              stage={null}
              disabled={false}
              socialGuess={null}
              stageName={"response"}
              taskData={{
                answer: 0,
                answerProportion: 0.7,
                dotSpeed: 100,
                nDots: 50
              }}
              actions={{
                updateArrow: this.updateArrow
              }}
            />
          </div>
          <p>
            Some dots are moving in the same direction. It's the{" "}
            <strong>main movement direction</strong>. The other dots are just
            moving randomly.
          </p>
          <p>
            You will have to <strong>click in the circle</strong> to indicate
            the direction of the main movement (try clicking in the above
            example).
          </p>
          <p>
            Note that{" "}
            <strong>
              the number of dots that move in the same direction can vary
            </strong>
            , which can <strong>make it easier or harder</strong> to guess the
            main movement direction.
          </p>

          <button
            type="button"
            className="bp3-button bp3-intent-nope bp3-icon-double-chevron-left"
            onClick={onPrev}
            disabled={!hasPrev}
          >
            Previous
          </button>
          <button
            type="button"
            className="bp3-button bp3-intent-primary"
            onClick={onNext}
            disabled={!hasNext}
          >
            Next
            <span className="bp3-icon-standard bp3-icon-double-chevron-right bp3-align-right" />
          </button>
        </div>
      </Centered>
    );
  }
}
