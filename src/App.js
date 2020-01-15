import React from 'react';
import styled from 'styled-components';
import Modal from 'components/Modal';
import Button, { InlineButton } from 'components/Button';
import { getModalContent } from 'data/modalData';

function App() {

  const [ modalIsOpen, setIsOpen ] = React.useState(false);
  const [ modalData, setModalData ] = React.useState({});

  function openModal(modalName) {
    const data = getModalContent({ buttonAction: openModal })[modalName];

    if(!data) return null;

    const { title, content } = data;

    setModalData({ title, content });

    setIsOpen(true);
  }

  function closeModal() {
    setModalData({});
    setIsOpen(false);
  }

  function renderQuickLinks() {
    const modals = getModalContent({ buttonAction: openModal });

    return Object.entries(modals).map(([ key, value ]) => {
      return (
        <Button
          key={ key }
          onClick={ () => openModal(key) }>
          { value.title }
        </Button>
      );
    });
  }

  return (
    <AppContainer id="app-container" className="App">
      <header className="App-header">
        <h2>Kotaro Manual</h2>
      </header>
      <nav style={ { display: 'none' } }>
        <ul>
          <li>Typical Day</li>
          <li>TroubleShooting</li>
          <li>Commands + Hand Signals</li>
        </ul>
      </nav>
      <main>
        {
          modalIsOpen &&
          <Modal
            isOpen={ modalIsOpen }
            onRequestClose={ closeModal }
            contentLabel="Example Modal"
            title={ modalData.title }
            content = { modalData.content }
          />
        }

        <div>
          <h3>Quick Links</h3>
          {renderQuickLinks()}
        </div>

        <h3>Documents from Training Classes</h3>
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

        <h3>Nightime Guide</h3>
        <p>Currently he cannot sleep on the bed. He should sleep in Geo&apos;s with a human. You will need to wake up in regular intervals and <InlineButton onClick={ () => openModal('potty') }>bring him out to pee</InlineButton> in regular intervals. Current interval is <strong>3 hours</strong>. I recommend giving him something to chew and getting him to stay in the travel crate for at least 1 interval.
        </p>

        <h3>Goals of confinement and supervision</h3>
        <p>The idea of confining him to an area when not actively playing is so he knows where he stays in home. Dogs do not pee in their homes, so we need to slowly get him used to the house being his home.</p>

        <h3>Good Behavior, Bad Behavior, and Affection</h3>
        <p>See <InlineButton onClick={ () => openModal('training') }>Training</InlineButton> For more information.</p>
        <p>Be sure to reward <strong>good behavior</strong>, even if he is just doing it on his own. Catch him doing good things and feed him. Best example is if people are talking and he is sitting near you not begging for attention.</p>

        <p>For <strong>bad behavior</strong> you need to withdraw attention. Turn around and walk away and then 5 seconds later try again. He will try new things until you continue to give him attention.</p>

        <p><strong>Affection</strong>: Everyone wants to cuddle him. He is soft and cute, but if he is in play or chew mode, he needs to play or chew. Forcing him to be subdued when he is in a pumped up state will just cause him to be more insane later and reinforce bad inter-human behavior. Another case of this is him jumping on you to greet you. It is adorable, but if you keep giving him attention when he jumps on your he will do that forever. When he is 60 LBS this is going to be a problem. Try to withdraw attention if he jumps, turn around and greet him again until he stops. He should sit in front of you, if you put your hand out he should touch his nose to your hand (targeting). This is all ideal and not always realistic.</p>

        <h3>Trying to tell if he needs to pee</h3>
        <p>If he goes towards the gate to Geo&apos;s, or grabs a leash, or starts smelling around like he is looking for something, or goes away from people: these are all signs he might need to go out. When in doubt take him him out. Going potty indoors gains momentum each time he does it.</p>

        <h3>General Notes</h3>
        <div>
          <ul>
            <li>Watch him all the time to make sure he&apos;s not eating something he&apos;s not supposed to. I caught him outside trying to eat a self-tapping screw <span role="img">🤦</span>
            </li>
            <li>He needs water fairly often. Everytime you fill it add a capful of the teeth cleaner if you remember. Watch for signs of needing to pee after he drinks water!</li>
            <li>If you want to learn new things or do research on your own you can use <a href="https://www.youtube.com/channel/UCZzFRKsgVMhGTxffpzgTJlQ">Zak George on youtube</a> or read one of the books I have left out</li>
            <li>He can&apos;t be in the kitchen/living room unless you&apos; re actively playing with him. My room is okay for him to just be chilling.</li>
            <li>If he gets crazy you can crate him. Generally if you&apos;re near the crate he doesn&apos;t mind.</li>
            <li>So far giving him a bull/buffalo stick has made him to lay down and chew for an hour so maybe can be used in emergency</li>
          </ul>
        </div>

        <h4>Troubleshooting</h4>
        <strong>He is biting pants / feet when you walk around</strong>
        <p>Put him in a confined area (behind the fence in Geo room area for instance). Ignore him for 10 seconds. Open the gate to let him out again. If he bites pants again, repeat.</p>

        <h4> Old Notes</h4>

        <p>Things you can do are: say his name if he looks at you give him a treat (i have shredded chicken) he kind of knows sit, laydown and o-te (shake) give him treats if he does it. He can play fetch if he&apos;s engaged and he loves tug of war.</p>

        <p>if he&apos;s doing something you don&apos;t like you can just turn away and not give him attention because attention is what he wants. but he has an attention span of about 2 seconds so you can turn around once he stops and he&apos;ll probably try something else.</p>

        <p>He generally likes being around people so if you&apos;re in the kitchen, he might just hang out on the other side of the gate, as long as he can see you he&apos;s happy. He also apparently likes the crate in my room and goes in there to hang out when I&apos;m sitting on my computer.</p>

      </main>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 8px;
`;
