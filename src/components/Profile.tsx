import styles from 'styles/components/Profile.module.css';

export const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/hrammos.png" alt="Henrique Ramos"/>

      <div>
        <strong>Henrique Ramos</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  )
}
