import React, { Component } from "react";
import ButtonFeedback from "./components/ButtonFeedback";
import Notification from "./components/Notification";
import Section from "./components/Section";
import Statistics from "./components/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countFeedback = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + 1,
    }));
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.floor((this.state.good * 100) / this.countTotalFeedback());
  };
  render() {
    const btnName = Object.keys(this.state);
    const total = this.countTotalFeedback();
    return (
      <>
        <Section title="Pleace leave feedback">
          <ButtonFeedback
            countFeedback={this.countFeedback}
            btnName={btnName}
          />
        </Section>
        <Section title="Statistics">
          {!total ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              percentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
