// import { FC } from "react";

// const FirstSection: FC = () => {

// };

import { FC, useState } from 'react'
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

  const activate = (key: string) => {
    setActiveTab(key)
    const tabContentEl = document.querySelector(`[data-id=${key}]`);//care about the usage about [] and `` in querySelector
    if (tabContentEl) {
      tabContentEl.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className={styles.secondSection}>
      {/* tabs */}
      <ul>
        {tabs.map((tab) => {
          return (
            <li key={tab.key} onClick={() => activate(tab.key)}>
              <span>{tab.title}</span>
              <span className={classNames(styles.line, { [styles.visible]: activeTab == tab.key })} />
            </li>
          )
        })}
      </ul>

      {/* tab content */}
      <div>
        {tabs.map((tab) => {
          return (
            <section data-id={tab.key}>
              <h2>{tab.title}</h2>
              <img src={CartoonImage} alt={tab.key} />
            </section>
          )
        })}
      </div>
    </div>
  )
}

export default SecondSection;