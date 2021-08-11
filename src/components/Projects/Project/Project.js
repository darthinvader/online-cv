const Project = ({
  link,
  imgLink,
  background,
  title,
  subTitle,
  description,
}) => {
  return (
    <a href={link}>
      <div className="project-container">
        <div className="image-container" style={background}>
          <img src={imgLink} alt={title} />
        </div>
        <div className="project-content">
          <h2 className="project-title">{title}</h2>
          <h3 className="project-subtitle">{subTitle}</h3>
          <p className="project-description">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default Project;
