import React from 'react';
import { InlineButton } from 'components/Button';

export const getModalContent = (props) => {
  const { buttonAction } = props;

  return {
    holding: {
      title: 'Holding Kota',
      content: 'Pick him up under his chest and the support his bottom with your other hand. His lower body is really sensitive and you can easily give him a hernia by mitake. He likes being horizontal but whatever works. He should be comfortable with any orientation'
    },
    potty: {
      title: 'Going potty',
      content:
        <div>
          <p>Put a leash on Kota and bring him out to the back yard. <InlineButton onClick={ () => buttonAction('holding') }>Carry him down the stairs</InlineButton> and bring him to bring him to the clover &amp; grass area. I do not want him to learn to pee or poop on driveways or roads ideally.
          </p>

          <p>Say <em>Go pee</em>. Be boring until he goes and celebrate when he goes, give him a treat after he does it. He will at some point pee, he might poop. Say go pee when he is going to reinforce the command.</p>

          <p>Walk around with him and give him 5-10 minutes to make sure he has peed and pooped enough. </p>

          <p>If you are expecting him to go and he doesn&apos;t and he&apos;s about to change to a new <InlineButton onClick={ () => buttonAction('activities') }>activity</InlineButton> bring him back in, play with him for 5 or so minutes and try again. Repeat until he goes.</p>
        </div>
    },
    training: {
      title: 'Training',
      content:
        <div>
          <h4>Training good behaviors</h4>
          <p>The basic idea of training things you want is to mark a good behavior, reward him, and re-inforce the behavior.</p>
          <p><strong>Marking</strong> could be excitedly saying <em>Good Boy</em>, <em>Good!</em>, clicking a clicker, saying <em>Yay!</em> etc.</p>
          <p><strong>Rewarding</strong> is easy. Rewards are food, or play. Use higher rewards (chicken) for harder tasks</p>
          <p><strong>Reinforcing</strong> is reminding him why he is getting the reward. You just have to say the command or <em>Good [command]</em></p>

          <h4>Training troublesome behaviors</h4>
          <p>If you are training something where you want him to stop doing something the basic idea is to remove attention and then give him another chance over and over.</p>

          <p>For instance, if you are training him to no jump on you walk up to him excitedly. If he jumps on you <strong>calmly</strong> say <em>Nope</em> and turn away from him, maybe walk away. If you say <strong>NO!</strong> excitedly that is marking it as good because he will think you are playing. Then turn back to him and greet him excitedly, remove attention if he jumps, etc. Eventually he will try somethign new. Reward him when he does the right thing.</p>
        </div>
    },
    activities: {
      title: 'Activities',
      content:
        <ul>
          <li>Playing in the living room</li>
          <li>Spending time alone in Geo room</li>
          <li>Resting in the crate</li>
          <li>Meeting new people</li>
          <li>Eating</li>
          <li>Training</li>
        </ul>
    },
    feeding: {
      title: 'Feeding Kota',
      content: <div>If you can feed him by hand. He currently eats about <em>2 handfuls of kibble</em>. Make sure he is not jumping on you or barking for it when you give it to him, this is an easy way to train him. You can also make him do <InlineButton onClick={ () => buttonAction('tricks') }>tricks</InlineButton> for the food.</div>
    },
    tricks: {
      title: 'Tricks',
      content:
        <div>
          <p>Note: Look at <InlineButton onClick={ () => buttonAction('training') }>Training</InlineButton> for how to train good and bad behaviors.</p>

          <strong>Easy: Teach him his name</strong>
          <p>Just say his name and if he looks at you reward him.</p>

          <strong>Easy: Sit!</strong>
          <p>Raise your hand up into a fist <span role="img">✊</span>and say sit.</p>

          <strong>Medium: Laydown</strong>
          <p>Point to the ground <span role="img">👇</span> and say <em>down</em> or <em>lay down</em></p>

          <strong>Medium: Up</strong>
          <p>When he is laying down raise your hand like the Night King and say up.</p>

          <strong>Hard: O-Te (Paw)</strong>
          <p>When he is sitting, put out your hand and say <em>O-Te</em>. If he gives you his paw reward him.</p>

          <strong>Hard: Jump through hoop</strong>
          <p>There is a small folded hoop in the living room. You can hold it 1 inch off the ground and get him to go through it. You probably will have to start by luring him through with food.</p>
        </div>,
    },
    play: {
      title: 'Play Activities',
      content:
        <div>
          <strong>Tug of War</strong>
          <p>He loves tug of war. You might need to walk with the rope hanging to your side to get him to grab it, but then you can play tug with him. You can slide him around the ground give him little tugs etc. He&apos;s really strong, so you can play kind of hard.</p>

          <strong>Easy: Fetch</strong>
          <p>Once he is engaged with toys you can get him to fetch them. Throw something and say <em>fetch</em>. He will go after it and bring it back to you. If he does not bring it back, you can tell him to come back and he should. He kind of knows <em>Leave it!</em> (use in conjunction with not pulling on the toy)</p>
        </div>
    }
  };
};
