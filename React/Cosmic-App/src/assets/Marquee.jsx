import React from 'react';

const Marquee = () => {
  return (
    <div>
      <marquee className="marq" direction="right" loop="" scrollamount="6">
        <div className="geek1">
          <img src="vogue.svg" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img src="harpers.svg" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img src="martha.svg" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img src="nytm.svg" />
        </div>
      </marquee>
      <marquee className="marq2" direction="left" loop="" scrollamount="6">
        <div className="geek2">
          <h4>Planning an event should, in fact, be fun and enjoyable.</h4>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img src="star.png" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <h4>Our clients never need to spend a single iota of time searching for inspiration.</h4>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img src="star.png" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <h4>You don’t know what you don’t know—but we do.</h4>
        </div>
      </marquee>
    </div>
  );
};

export default Marquee;