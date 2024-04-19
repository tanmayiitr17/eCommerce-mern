import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';

const Home = () => {

  return (
    <div>
      <Slider />
      <h2 style={{ textAlign: "center", color: "teal", margin: "15px 0" }}>Categories</h2>
      <Categories />
      <h2 style={{ textAlign: "center", color: "teal", margin: "15px 0" }}>Trending Products</h2>
      <Products />
    </div>
  )
}

export default Home
