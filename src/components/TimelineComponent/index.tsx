import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

interface TimelineProps {
  source: string;
  scale_factor: number;
  initial_zoom?: number;
  height?: string;
}

// scale_factor = How many screen widths wide the timeline should be at first presentation.
// initial_zoom = The position in the zoom_sequence series used to scale the Timeline when it is first created. Takes precedence over scale_factor.
const TimelineComponent: React.FC<TimelineProps> = ({ source, scale_factor=1, initial_zoom=1, height='600px' }) => (
  <BrowserOnly fallback={<div style={{ height }}>Loading timeline...</div>}>
    {() => {
      // Import here so it's only loaded on client!
      const { useEffect } = require('react');
      const { Timeline } = require('@knight-lab/timelinejs');
      require('@knight-lab/timelinejs/dist/css/timeline.css');

      useEffect(() => {
        new Timeline('timeline-embed', source, {
          language: 'en',
          font: 'amatic-andika',
          debug: (process.env.NODE_ENV === "development"),
          scale_factor: scale_factor,
          initial_zoom: initial_zoom
        });
      }, [source, scale_factor]);

      return <div id="timeline-embed" style={{ height }} />;
    }}
  </BrowserOnly>
);


export default TimelineComponent;
