import React from 'react'

const Statistics = ({good, neutral, bad, total, percentage}) => (
    <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total(good, neutral, bad)}</p>
        <p>Positive feedback: {percentage(good, neutral, bad, total)}%</p>
    </div>
);

export default Statistics