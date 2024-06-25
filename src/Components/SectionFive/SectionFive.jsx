import { sectionFiveData } from "../../data/data";

function SectionFive() {
  return (
    <>
      <section className="section5 my-3 container-fluid">
        <div className="row">
          {sectionFiveData.map((data, index) => {
            const { bootstrap, img, h1, h5 } = data;
            const className=index%2===0?'text-white':'text-dark'
            return (
              <>
                <div
                  className={`Image${index + 5} ${bootstrap} background col-md ${className}`}
                >
                  {img && <img src={img} className="pt-5 pb-3"></img>}
                  {h1 && <h1 className="pt-5">{h1}</h1>}
                  {h5 && <h5>{h5}</h5>}
                </div>
                ;
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default SectionFive;
