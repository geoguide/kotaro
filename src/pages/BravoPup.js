import React from 'react';

const BravoPup = () => {
  return (
    <>
      <h3>Documents from Puppy School</h3>
      <p>I believe in the stategies given in the puppy classes. Here are the docs they have sent us so far</p>
      <ul>
        <li>
          <a
            href={ `${process.env.PUBLIC_URL}/PUP1_HW-1_17.pdf` } target="_blank"
            rel="noopener noreferrer"
          >Puppy Homework Jan 14 - 21</a>
        </li>
        <li>
          <a
            href={ `${process.env.PUBLIC_URL}/BravoPup.CrateTraining.pdf` } target="_blank"
            rel="noopener noreferrer"
          >Crate Training</a>
        </li>
        <li>
          <a
            href={ `${process.env.PUBLIC_URL}/BravoPup.ThePottyProject.pdf` } target="_blank"
            rel="noopener noreferrer"
          >The Potty Project</a>
        </li>
        <li>
          <a
            href={ `${process.env.PUBLIC_URL}/BravoPup.PlayBiting.pdf` } target="_blank"
            rel="noopener noreferrer"
          >Play Biting</a>
        </li>
        <li>
          <a
            href={ `${process.env.PUBLIC_URL}/BravoPup.TimeOuts.pdf` } target="_blank"
            rel="noopener noreferrer"
          >Timeouts</a>
        </li>
        <li>
          <a
            href={ `${process.env.PUBLIC_URL}/BravoPup.Socialization.pdf` } target="_blank"
            rel="noopener noreferrer"
          >Socialization</a>
        </li>
        <li>
          <a
            href={ `${process.env.PUBLIC_URL}/BravoPup.BodyHandling.pdf` } target="_blank"
            rel="noopener noreferrer"
          >Body Handling</a>
        </li>
      </ul>
    </>
  );
};

export default BravoPup;
