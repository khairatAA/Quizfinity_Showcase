import styles from '../styles/Global';
import assets from '../assets';

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>Download Quizfinity</h1>
          <p className={`${styles.pText} ${styles.blackText}`}>Expand Your Mind, One Question at a time.</p>
        </div>
        <button>
          <img src={assets.googlePlayBadge} width={200} />
        </button>
        <div className={`${styles.flexCenter} mt-10`}>
          <img
            src={assets.scene}
            alt="download_png"
            className={`${styles.fullImg} lg:w-[70%] h-full`}
          />
        </div>
      </div>
    </div>
  )
}

export default Download