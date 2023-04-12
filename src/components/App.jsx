import React from 'react';
import { useState } from 'react';
import { Container } from './App.styled';
// import Feedback from './Feedback/Feedback';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notitfication/Notification';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const handleIncrement = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };
  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleIncrement} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={countTotalFeedback()}
            percentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};

export { App };

// class OldApp extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleIncrement = e => {
//     const propertyOfState = e.target.textContent;

//     this.setState(pastState => ({
//       [propertyOfState]: pastState[propertyOfState] + 1,
//     }));
//   };
//   goodFeedback = () => {
//     this.setState(prevState => ({
//       good: prevState.good + 1,
//     }));
//   };

//   neytralFeedback = () => {
//     this.setState(prevState => ({
//       neutral: prevState.neutral + 1,
//     }));
//   };

//   badFeedback = () => {
//     this.setState(prevState => ({
//       bad: prevState.bad + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     return total;
//   };

//   countPositiveFeedbackPercentage = () => {
//     if (this.countTotalFeedback() > 0) {
//       return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//     }

//     return 0;
//   };
//   render() {
//     const { good, neutral, bad } = this.state;
//     const keys = Object.keys(this.state);
//     return (
//       <Container>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={keys}
//             onLeaveFeedback={this.handleIncrement}
//           />
//         </Section>
//         <Section title="Statistics">
//           {this.countTotalFeedback() ? (
//             <Statistics
//               good={good}
//               bad={bad}
//               neutral={neutral}
//               total={this.countTotalFeedback()}
//               percentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </Container>
//     );
//   }
// }
// export { App };
