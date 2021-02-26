
import { useChallangesContext } from 'hooks/useChallangesContext';
import styles from 'styles/components/CompleteChallenges.module.css';

export const CompleteChallenges = () => {
  const { challengesCompleted } = useChallangesContext();

  return (
    <div className={styles.completedChallangesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  )
}
