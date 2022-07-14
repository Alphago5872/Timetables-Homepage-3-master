import Group_pic from "../image/Members/temp-group-pic.jpeg";
import Quotes from "../components/Dev-credits/Quotes";
import DevProfile from "../components/Dev-credits/DevProfile";
import WebCard from "../components/Wrapper-Components/Wrapper-1/WebCard_1";

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

const DevCredits = () => {
  return (
    <WebCard>
      <h1>About us</h1>
      <img src={Group_pic} />
      <Quotes />
      <DevProfile devName={Devs[0].devName} job={Devs[0].job} position={Devs[0].position} />
      <DevProfile devName={Devs[1].devName} job={Devs[1].job} position={Devs[1].position} />
      <DevProfile devName={Devs[2].devName} job={Devs[2].job} position={Devs[2].position} />
      <DevProfile devName={Devs[3].devName} job={Devs[3].job} position={Devs[3].position} />
      <DevProfile devName={Devs[4].devName} job={Devs[4].job} position={Devs[4].position} />
    </WebCard>
  );
};

export default DevCredits;
