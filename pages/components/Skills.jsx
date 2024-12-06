const Skill = ({ skills }) => {
  const skillData =
    typeof skills === "function"
      ? skills()
      : { category: "Unknown", items: [] };

  return (
    <div className="skills-container mx-2">
      <div className="mb-4">
        <h3 className="font-medium text-2xl">{skillData.category}:</h3>
        <ul className="list-disc pl-5 text-lg">
          {skillData.items?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skill;
