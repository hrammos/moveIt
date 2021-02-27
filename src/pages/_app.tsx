import { ChallengesProvider } from 'hooks/useChallangesContext';
import { CountdownProvider } from 'hooks/useCountdownContext';

import 'styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <CountdownProvider>
        <Component {...pageProps} />
      </CountdownProvider>
    </ChallengesProvider>
  )
}

export default MyApp
