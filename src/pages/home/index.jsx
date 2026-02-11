import { Link } from "react-router-dom";

const Home = () => {
  const products = [
    {
      id: 1,
      name: "Jeans",
    },
    {
      id: 2,
      name: "Shirt",
    },
    {
      id: 3,
      name: "Pant",
    },
  ];
  return (
    <div>
      <ul>
        {products?.map((item) => {
          return <li><Link to={`/product/${item?.id}`}>Product {item?.id}</Link></li>
        })}
      </ul>
    </div>
  );
};

export default Home;
