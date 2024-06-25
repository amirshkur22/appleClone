import SectionSix from "../SectionSix/SectionSix";
import { sectionSixData } from "../../data/data";

function SectionSixCaller() {
  return (
    <section className="section6 my-3 container-fluid">
      <div className="row">
        {sectionSixData.map((section, index) => {
          return <SectionSix {...section} index={index + 7} key={index} />;
        })}
      </div>
    </section>
  );
}
export default SectionSixCaller;
