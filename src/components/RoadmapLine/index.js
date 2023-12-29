import styles from './index.module.css';
import RoadmapPoint from '../RoadmapPoint';

export default function RoadmapLine() {
  return (
    <div className={`${styles['roadmap-line']}`}>
      <RoadmapPoint date={"DEC 23"} title={"v1.0 Release"} />
      <RoadmapPoint date={"FEB 24"} title={"Customization Update"} />
      <RoadmapPoint date={"JULY 24"} title={"v2.0 Development Begins"} />
      <RoadmapPoint date={"DEC 24"} title={"v2.0 Release"} />
    </div>
  );
}
