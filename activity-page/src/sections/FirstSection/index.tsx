// import BannerImage from '../../assets/banner.jpg'
import styles from './styles.module.scss'
import Fade from './Fade';

function FirstSection() {
  return (
    <div className={styles.firstSection}>
      {/* <img src={BannerImage} alt="Banner" /> */}
      <Fade />
    </div>
  )
}

export default FirstSection;