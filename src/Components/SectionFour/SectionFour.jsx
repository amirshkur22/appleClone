function SectionFour({ bootstrap, h1, h4, index }) {
  const className = index % 2 !== 0 ? "text-white" : "text-dark";
  return (
    <>
      <div className={`Image${index} ${bootstrap} background col-md`}>
        <div className={`pt-${index + 1}`}>
          <h1 className={className}>{h1}</h1>
          <h4 className={className}>{h4}</h4>
          <div className="twolinks">
            <a className="pr-5 text-decoration-none" href="#">
              Learn more <i className="fa-solid fa-angle-right"></i>
            </a>
            <a href="#" className="text-decoration-none">
              Buy <i className="fa-solid fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionFour;
