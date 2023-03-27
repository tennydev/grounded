import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
  const { title, id, subtitle, imageUrl } = category;

  return (
    <div className="category-container" key={id}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-info-container">
        <h2 className={subtitle ? "with-subtitle" : "without-subtitle"}>
          {title}
        </h2>
        {subtitle && <p className="subtitle">{subtitle}</p>}
      </div>
    </div>
  );
};

export default CategoryItem;