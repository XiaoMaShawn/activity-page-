// import { FC } from "react";

// const FirstSection: FC = () => {

// };

import CartoonImage from '../../assets/cartoon.jpg'
import FoodImage from '../../assets/food.jpg'
import LifeImage from '../../assets/life.jpg'
import MovieImage from '../../assets/movie.png'

function SecondSection() {
  return (
    <div>
      {/* tabs */}
      <ul>
        <li>Cartoon</li>
        <li>Food</li>
        <li>Movie</li>
        <li>Life</li>
      </ul>

      {/* tab content */}
      <div>
        <section>
          <h2>Cartoon</h2>
          <img src={CartoonImage} alt='Cartoon image' />
        </section>
        <section>
          <h2>Food</h2>
          <img src={FoodImage} alt='Food image' />
        </section>
        <section>
          <h2>Movie</h2>
          <img src={MovieImage} alt='Movie image' />
        </section>
        <section>
          <h2>Life</h2>
          <img src={LifeImage} alt='Life image' />
        </section>
      </div>
    </div>
  )
}

export default SecondSection;