import React from 'react';

const ScrollSnapContainer = () => {
  const parentStyles = {
    overflow: 'scroll',
    height: '100vh',
    scrollSnapPointsY: 'repeat(100vh)',
    scrollSnapType: 'y mandatory',
  };

  const sectionStyles = {
    height: '100vh',
    scrollSnapAlign: 'start',
    position: 'relative',
  };

  const containerStyles = {
    display: 'flex',
  };

  const childStyles = {
    flex: '0 0 100%',
  };

  return (
    <div className="parent row" style={parentStyles}>
      <section className="one" style={{ ...sectionStyles, backgroundColor: 'red' }}>
        <!-- Add content for section one here -->
      </section>
      <section className="two" style={{ ...sectionStyles, backgroundColor: 'blue' }}>
        <!-- Add content for section two here -->
      </section>
      <section className="three" style={{ ...sectionStyles, backgroundColor: 'grey' }}>
        <!-- Add content for section three here -->
      </section>
      <section className="four" style={{ ...sectionStyles, backgroundColor: 'green' }}>
        <!-- Add content for section four here -->
      </section>
    </div>
  );
};

export default ScrollSnapContainer;
