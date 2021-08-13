const Experience = ({ ExperienceName, ExperienceDetail, Description }) => {
  return (
    <>
      <div className="Experience">
        <h3 className="ExperienceName">{ExperienceName}</h3>
        <h4 className="ExperienceDetails">{ExperienceDetail}</h4>
        <p className="Description">{Description}</p>
      </div>
    </>
  );
};

export default Experience;
