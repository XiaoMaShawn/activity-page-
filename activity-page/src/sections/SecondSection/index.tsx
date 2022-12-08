// import { FC } from "react";

// const FirstSection: FC = () => {

// };

import { useState } from 'react'
import CartoonImage from '../../assets/cartoon.jpg'
import FoodImage from '../../assets/food.jpg'
import LifeImage from '../../assets/life.jpg'
import MovieImage from '../../assets/movie.png'
import styles from './styles.module.scss'
import classNames from 'classnames'

const tabs = [
  {
    key: 'cartoon',
    title: 'Cartoon'
  },
  {
    key: 'food',
    title: 'Food'
  },
  {
    key: 'movie',
    title: 'Movie'
  },
  {
    key: 'life',
    title: 'Life'
  }
]

function SecondSection() {
  const [activeTab, setActiveTab] = useState<string>('cartoon');

  return (
    <div className={styles.secondSection}>
      {/* tabs */}
      <ul>
        {tabs.map((tab) => {
          return (
            <li key={tab.key} onClick={() => setActiveTab(tab.key)}>
              <span>{tab.title}</span>
              <span className={classNames(styles.line, { [styles.visible]: activeTab == tab.key })} />
            </li>
          )
        })}
      </ul>

      {/* tab content */}
      <div>
        <section>
          <h2>Cartoon</h2>
          <img src={CartoonImage} alt='cartoon' />
        </section>
        <section>
          <h2>Food</h2>
          <img src={FoodImage} alt='food' />
        </section>
        <section>
          <h2>Movie</h2>
          <img src={MovieImage} alt='movie' />
        </section>
        <section>
          <h2>Life</h2>
          <img src={LifeImage} alt='life' />
        </section>
      </div>
    </div>
  )
}

export default SecondSection;