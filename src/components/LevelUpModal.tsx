import { useChallangesContext } from 'hooks/useChallangesContext';
import styles from 'styles/components/LevelUpModal.module.css';

export const LevelUpModal = () => {
  const { level, closeLevelUpModal } = useChallangesContext();

  return (
    <div className={styles.overlay}>
      <div className={styles.levelUpModalContainer}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button
          type="button"
          onClick={closeLevelUpModal}
        >
          <img src="icons/close.svg" alt="Fechar modal"/>
        </button>
      </div>
    </div>
  )
};
