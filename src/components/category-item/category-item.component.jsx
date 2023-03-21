import './category-item.styles.scss';

const CategoryItem = ({category}) => {
const {title,id,subtitle,imageUrl} = category;
  return (
    <div className="category-container" key={id}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-info-container">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default CategoryItem;
