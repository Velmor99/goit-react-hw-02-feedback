import React from 'react' 

const FeedBackOptions = ({onLeaveFeedback}) => (
    <div>
        <button onClick={e => onLeaveFeedback('good')}>Good</button>
        <button onClick={e => onLeaveFeedback('neutral')}>Neutral</button>
        <button onClick={e => onLeaveFeedback('bad')}>Bad</button>
    </div>
);

export default FeedBackOptions