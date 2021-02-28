
import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { ChallengeBox } from 'components/ChallengeBox';
import { CompleteChallenges } from 'components/CompleteChallenges';
import { Countdown } from 'components/Countdown';
import { ExperienceBar } from 'components/ExperienceBar';
import { Profile } from 'components/Profile';


import { ChallengesProvider, useChallangesContext } from 'hooks/useChallangesContext';
import { CountdownProvider } from 'hooks/useCountdownContext';

import styles from 'styles/pages/Home.module.css';
import { useEffect } from 'react';

interface IHomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: IHomeProps) {
  const { level, currentExperience, challengesCompleted } = props;

  // const formattedTime =
  //   `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  // const titlePage = activeChallenge ? `${formattedTime} | move.it` : 'Início | move.it';


  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <CountdownProvider>
        <div className={styles.container}>
          <Head>
            <title>Início | move.it</title>
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
      </CountdownProvider>
    </ChallengesProvider>
  )
};

export const getServerSideProps:GetServerSideProps = async (context) => {
  const { level, currentExperience, challengesCompleted } = context.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  };
};
