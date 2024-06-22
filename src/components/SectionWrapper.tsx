import styles from "../styles/Global";
import assets from "../assets";

type SectionWrapperTypes = {
  title?: string;
  description?: string;
  showBtn?: boolean;
  mockupImg?: string;
  banner?: string;
  reverse?: boolean;
};
const SectionWrapper = ({
  title,
  description,
  showBtn,
  mockupImg,
  banner,
  reverse,
}: SectionWrapperTypes) => {
  return (
    <div
      className={`min-h-screen ${styles.section} 
      ${reverse ? styles.bgWhite : styles.bgPrimary} 
      ${banner}`}
    >
      <div
        className={`flex items-center 
        ${reverse ? styles.boxReverseClass : styles.boxClass} 
        w-11/12 sm:w-full minmd:w-3/4`}
      >
        <div
          className={`${styles.descDiv} 
          ${reverse ? " fadeRightMini" : " fadeLeftMini"}
          ${reverse ? styles.textRight : styles.textLeft}
        `}
        >
          <h1
            className={`
          ${reverse ? styles.blackText : styles.whiteText}
          ${styles.h1Text}`}
          >
            {title}
          </h1>
          <p
            className={`
          ${reverse ? styles.blackText : styles.whiteText}
          ${styles.descriptionText}`}
          >
            {description}
          </p>
          {showBtn && (
            <a
              href="https://play.google.com/store/apps/details?id=com.wa2goose.quizfinity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.googlePlayBadge} width={200} />
            </a>
          )}
        </div>
        <div className={`flex-1 ${styles.flexCenter}p-8 sm:px-0`}>
          <img
            src={mockupImg}
            alt="mockup"
            className={`
           ${reverse ? " fadeLeftMini" : " fadeRightMini"}
          ${styles.sectionImg}`}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
