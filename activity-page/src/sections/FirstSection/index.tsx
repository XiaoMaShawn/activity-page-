// import { FC } from "react";

// const FirstSection: FC = () => {

// };

import BannerImage from '../../assets/banner.jpg'
import styles from './styles.module.scss'

function FirstSection() {
  return (
    <div className={styles.firstSection}>
      <img src={BannerImage} alt="Banner" />
    </div>
  )
}

export default FirstSection;