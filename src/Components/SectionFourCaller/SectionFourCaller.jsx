import { sectionFourData } from "../../data/data";
import SectionFour from "../SectionFour/SectionFour";
export default function SectionFourCaller() {
  return (
    <section className="section4 my-3 container-fluid">
      <div className="row">
        {sectionFourData.map((section, index) => {
          return <SectionFour {...section} index={index + 3} key={index} />;
        })}
      </div>
    </section>
  );
}
