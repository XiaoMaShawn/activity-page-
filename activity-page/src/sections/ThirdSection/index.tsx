// import { FC } from "react";

// const FirstSection: FC = () => {

// };
import styles from './styles.module.scss'
import Titile1Image from '../../assets/title1.jpg'
import Titile2Image from '../../assets/title2.jpg'
import CommentImage from '../../assets/comment.jpg'


function ThirdSection() {
  return (
    <div className={styles.thirdSection}>
      <img src={Titile1Image} alt="Title One" />
      <img className={styles.comment} src={CommentImage} alt="Comment1" />
      <img src={Titile2Image} alt="Title Two" />
      <img className={styles.comment} src={CommentImage} alt="Comment2" />
    </div>
  )
}

export default ThirdSection;