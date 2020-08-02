import React, { Component, Fragment } from 'react';
import Section from './Section/Section';
import FeedBackOptions from './FeedBackOptions/FeedBackOptions';
import Statistics from './Statistics/Statistics';

class App extends Component {


	state = {
		good: 0,
		neutral: 0,
		bad: 0
	};

	CheckForAvailability = () => {
		const { good, neutral, bad } = { ...this.state };
		if (good === 0 && neutral === 0 && bad === 0) {
			return false;
		}
	};

	handleAdd = field => {
		this.setState((prevState) => {
			return {
			[field]: prevState[field] + 1
			};
		});
	}


	countTotalFeedback = (good, neutral, bad) => {
		return  good + bad + neutral;
	};

	countPositiveFeedbackPercentage = (good, neutral, bad) => {
		const sum = good + neutral + bad;
		return Math.floor(good * 100 / sum);
	};

	render() {
		const { good, neutral, bad } = { ...this.state };
		return (
			<Fragment>
				<Section title={'Please leave feedback'}>
					<FeedBackOptions
					    options={this.state}
						onLeaveFeedback={this.handleAdd}
					/>
				</Section>
				<Section title={'Statistics'}>
					{this.CheckForAvailability() !== false ? (
						<Statistics
							good={good}
							neutral={neutral}
							bad={bad}
							total={this.countTotalFeedback}
							percentage={this.countPositiveFeedbackPercentage}
						/>
					) : (
						<p>No feedback given</p>
					)}
				</Section>
			</Fragment>
		);
	}
}

export default App;