import { theFirstThreeSectionData } from "../../data/data";
import TheFirstThreeSections from "../TheFirstThreeSections/TheFirstThreeSections";

let TheFirstThreeSectionCaller = () => {
  return (
    <>
      {theFirstThreeSectionData.map((section, index) => {
        return (
          <section
            className={`section${index + 1} container-fluid ${
              section.style
            } text-center mb-3`}
            key={index}
          >
            <TheFirstThreeSections {...section} index={index + 2} />
          </section>
        );
      })}
    </>
  );
};

export default TheFirstThreeSectionCaller;
