"use client"
import React from 'react';
import Marquee from 'react-fast-marquee';

const MyMarquee = () => {
  return (
    <Marquee pauseOnHover={false} style={{'backgroundColor':'#1e232e'}}>
      <p style={{"color":"white","fontSize":"16px",'paddingTop':'4px','paddingBottom':'4px'}}>Ratan Energy. Hurry Up and get heavy discounts . Offer valid for limited time period.</p>
      <span style={{ marginRight: '40px' }}></span>
    </Marquee>
  );
};

export default MyMarquee;
