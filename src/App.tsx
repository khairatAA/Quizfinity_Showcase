import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <div
        className={`flex justify-start items-center px-20 py-5 gap-8 w-full sm:px-8`}
      >
        <a
          href="https://play.google.com/store/apps/details?id=com.wa2goose.quizfinity"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={assets.Logo} alt="Quizfinity Logo" width={34} />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.wa2goose.quizfinity"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1
            className={`
        font-IBMPlex font-extrabold text-3xl md:text-2xl sm:text-xl
        `}
          >
            Quizfinity
          </h1>
        </a>
      </div>
      <SectionWrapper
        title="Expand Your Mind, One Question at a time."
        description="Quizfinity, the ultimate mobile app for quiz
        enthusiasts of all ages! Dive into a world of intriguing questions and
        trivia across a wide range of topics."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Interactive Design"
        description="User-friendly interface with smooth navigation through different quiz categories and levels."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Time-Based Challenges"
        description="Stay sharp with timed quizzes to test your quick thinking and knowledge retention."
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Progress Tracking"
        description="With Quizfinity, you can monitor your achievements and strive for perfection by completing all levels in each mode."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with love by{" "}
          <a
            href="https://www.linkedin.com/in/khairat-adesina1234/"
            target="_blank"
            className=" font-bold text-tertiary"
          >
            Khairat Adesina
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default App;
