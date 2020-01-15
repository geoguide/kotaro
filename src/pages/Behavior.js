import React from 'react';
import { InlineButton } from 'components/Button';

const Behavior = (props) => {

  const { openModal } = props;

  return (
    <>
      <h3>Good Behavior, Bad Behavior, and Affection</h3>
      <p>See <InlineButton onClick={ () => openModal('training') }>Training</InlineButton> For more information.</p>
      <p>Be sure to reward <strong>good behavior</strong>, even if he is just doing it on his own. Catch him doing good things and feed him. Best example is if people are talking and he is sitting near you not begging for attention.</p>

      <p>For <strong>bad behavior</strong> you need to withdraw attention. Turn around and walk away and then 5 seconds later try again. He will try new things until you continue to give him attention.</p>

      <p><strong>Affection</strong>: Everyone wants to cuddle him. He is soft and cute, but if he is in play or chew mode, he needs to play or chew. Forcing him to be subdued when he is in a pumped up state will just cause him to be more insane later and reinforce bad inter-human behavior. Another case of this is him jumping on you to greet you. It is adorable, but if you keep giving him attention when he jumps on your he will do that forever. When he is 60 LBS this is going to be a problem. Try to withdraw attention if he jumps, turn around and greet him again until he stops. He should sit in front of you, if you put your hand out he should touch his nose to your hand (targeting). This is all ideal and not always realistic.</p>
    </>
  );
};

export default Behavior;
