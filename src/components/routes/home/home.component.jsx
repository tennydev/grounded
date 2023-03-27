import { Outlet } from "react-router-dom";

import Directory from "../../../components/directory/categories-directory.component";

const categories = [
  {
    id: 1,
    title: "hats",
    subtitle: '',
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  },
  {
    id: 2,
    title: "jackets",
    subtitle: '',
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
  },
  {
    id: 3,
    title: "sneakers",
    subtitle: '',
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
  },
  {
    id: 4,
    title: "womens",
    subtitle: '',
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
  },
  {
    id: 5,
    title: "mens",
    subtitle: '',
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
  },
];

const Home = () => {
  return (
    <div>
    <Outlet/>
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
