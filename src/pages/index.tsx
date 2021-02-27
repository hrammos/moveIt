
import Head from 'next/head';

import { ChallengeBox } from 'components/ChallengeBox';
import { CompleteChallenges } from 'components/CompleteChallenges';
import { Countdown } from 'components/Countdown';
import { ExperienceBar } from 'components/ExperienceBar';
import { Profile } from 'components/Profile';
import { useCountdownContext } from 'hooks/useCountdownContext';

import styles from 'styles/pages/Home.module.css';

export default function Home() {
  const { minutes, seconds, isActive } = useCountdownContext();

  const formattedTime =
    `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <div className={styles.container}>
      <Head>
        {isActive ? (
          <title>{formattedTime} | move.it</title>
        ) : (
          <title>Início | move.it</title>
        )}
      </Head>
      <ExperienceBar />

      <section>
        <div >
          <Profile />
          <CompleteChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  )
}
