// import { FC } from "react";

// const FirstSection: FC = () => {

// };

import { FC, useEffect, useRef, useState } from 'react'
import CartoonImage from '../../assets/cartoon.jpg'
import FoodImage from '../../assets/food.jpg'
import LifeImage from '../../assets/life.jpg'
import MovieImage from '../../assets/movie.png'
import styles from './styles.module.scss'
import classNames from 'classnames'

const tabs = [
  {
    key: 'cartoon',
    title: 'Cartoon',
    image: CartoonImage
  },
  {
    key: 'food',
    title: 'Food',
    image: FoodImage
  },
  {
    key: 'movie',
    title: 'Movie',
    image: MovieImage
  },
  {
    key: 'life',
    title: 'Life',
    image: LifeImage
  }
]


function SecondSection() {
  const [activeTab, setActiveTab] = useState<string>('cartoon');
  const [isFixed, setIsFixed] = useState(false);

  const secondSectionRef = useRef<HTMLDivElement>(null);//must have initial value null

  const activate = (key: string) => {
    setActiveTab(key)
    const tabContentEl = document.querySelector(`[data-id=${key}]`);//care about the usage of [] and `` in querySelector argument
    if (tabContentEl) {
      tabContentEl.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const onScroll = () => {
    if (secondSectionRef.current) {
      //fix tab part
      //get the top value of secondSection
      const { top } = secondSectionRef.current.getBoundingClientRect();
      //fix the tab if top == 0
      setIsFixed(top <= 0);

      //highlight the tab title when u scroll to the section
      //get all the section
      const sectionNodes = secondSectionRef.current.querySelectorAll('section');

      Array.from(sectionNodes).forEach(sectionEl => {
        //get the top value of current section
        const { top } = sectionEl.getBoundingClientRect();
        //get the key of current section
        const key = sectionEl.getAttribute('data-id') || '';
        //set the tab to the current section if it hit the top
        if (top <= 56) {
          setActiveTab(key);
        }
      })

    }


  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, [])

  return (
    <div className={styles.secondSection} ref={secondSectionRef}>
      {/* tabs */}
      <ul className={classNames({ [styles.isFixed]: isFixed })}>
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
              <img src={tab.image} alt={tab.key} />
            </section>
          )
        })}
      </div>
    </div>
  )
}

export default SecondSection;