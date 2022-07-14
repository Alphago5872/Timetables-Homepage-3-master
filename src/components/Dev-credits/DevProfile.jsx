const Devs = [
  {
    devName: "Dhanuphon Boriboonsub",
    job: "Project Evaluator, Project Manager, Quality Controller",
    position: "Supervisor",
  },
  {
    devName: "Thonnisorn Choochaisangrat",
    job: "Project Supervisor, Project Advisor, Quality Controller",
    position: "Supervisor",
  },
  {
    devName: "Prawich Thawansakdivudhi",
    job: "Project Director, Lead Backend Engineer, UI / UX Designer",
    position: "Year 11",
  },
  {
    devName: "Nutnornont Chamadol",
    job: "Lead Designer, General Manager, Front-end Designer",
    position: "Year 12",
  },
  {
    devName: "Koramist Samorapoom",
    job: "Lead Frontend Developer, UX Designer",
    position: "Year 10",
  },
];

const DevProfile = (props) => {
  return (
    <div>
      <img src={props.image} />
      <h2>{props.devName}</h2>
      <h3>{props.job}</h3>
      <h2>{props.position}</h2>
    </div>
  );
};

export default DevProfile;
