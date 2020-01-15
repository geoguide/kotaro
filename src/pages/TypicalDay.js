import React from 'react';
import { InlineButton } from 'components/Button';

const TypicalDay = (props) => {
  const { openModal } = props;

  return (
    <article>
      <h3>A Typical (Ideal) Day</h3>
      <p>Here is an optimal day. You will have to sort of work with him depending on his schedule. Eyes out for signs that he might want to go out at any time. When in doubt bring him out.</p>

      <h4>7AM: Wake up</h4>
      <section>Get Kota up if he is sleeping (he probably will awake). Immediately bring him to <InlineButton onClick={ () => openModal('potty') }>go potty</InlineButton>.</section>
      <section>Bring him inside, let him chew on some stuff and drink some water. Leave him in Geo&apos;s while you make coffee or whatever. Then <InlineButton onClick={ () => openModal('feeding') }>feed him</InlineButton>.</section>

      <h4>7:30am - 10am: Play & Entertain</h4>
      <section><InlineButton onClick={ () => openModal('tricks') }>Play Games with kota</InlineButton>. He is going to have a lot of energy, try running around outside or playing in the living room. You have to be engaged with him in the living room. If he is just going to chill, keep him in Geo&apos;s. Give him one Angel Eyes treat (to help with his eye irritation). <InlineButton onClick={ () => openModal('potty') }>Go potty.</InlineButton></section>

      <h4>10am - 11am: Training</h4>
      <section><InlineButton onClick={ () => openModal('training') }>Train him</InlineButton> on some of his <InlineButton onClick={ () => openModal('tricks') }>tricks</InlineButton>. Reward him with high value treats. <InlineButton onClick={ () => openModal('potty') }>Go potty</InlineButton>
      </section>

      <h4>11am - 1pm: Crating</h4>
      <div>The idea here is that we want him to reset his potty schedule. If he rests for 2 hours as soon as he comes out of the crate he will <InlineButton onClick={ () => openModal('potty') }>need to go potty</InlineButton>. Put him in the crate and give him something to chew on. Give him treats as he lays down in the crate, give him a few as you close the gate through the cage. He should eventually chill and sleep.</div>

      <h4>1pm - 5pm: Repeat play and training</h4>
      <div>This is another time for you to go through playing with him and training him. Bring him out every hour or so to run around and potentially pee.</div>

      <h4>5pm - 7pm: Something new</h4>
      <div>Show him something he has never seen before. A new person, a new object, try a new activity, whatever really. Get him to be comfortable with something and see how he does. Make sure that he goes out intermittently to pee.</div>

      <h4>7pm - 9pm: Crating</h4>

      <h4>9pm - 11pm: Chilling, general attention or chewing</h4>

      <h4>Go to sleep</h4>
    </article>
  );
};

export default TypicalDay;
