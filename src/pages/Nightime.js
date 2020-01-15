import React from 'react';
import { InlineButton } from 'components/Button';

const Nightime = (props) => {
  const { openModal } = props;

  return (
    <>
      <h3>Nightime Guide</h3>
      <p>Currently he cannot sleep on the bed. He should sleep in Geo&apos;s with a human. You will need to wake up in regular intervals and <InlineButton onClick={ () => openModal('potty') }>bring him out to pee</InlineButton> in regular intervals. Current interval is <strong>3 hours</strong>. I recommend giving him something to chew and getting him to stay in the travel crate for at least 1 interval.
      </p>
    </>
  );
};

export default Nightime;
