import TimetablePreviewCard from "./TimetablePreviewCard";
import { Link } from "react-router-dom";

const TimetablePreview = () => {
  return (
    <div>
      <h1>Timetables</h1>
      <TimetablePreviewCard year='10' />
      <Link to='/timetable'>Timetable </Link>
    </div>
  );
};

export default TimetablePreview;
