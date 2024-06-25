let TheFirstThreeSections = ({ p1, h1, h3, p2, img, style }) => {
  return (
    <>
      {p1 && <p className="mt-5 pt-3">{p1}</p>}
      <h1>{h1}</h1>
      <h3>{h3}</h3>
      {p2 && <p>{p2}</p>}
      <div className="twolinks">
        <a className="pr-5" href="#">
          Learn more <i className="fa-solid fa-angle-right"></i>
        </a>
        <a href="#">
          Buy <i className="fa-solid fa-angle-right"></i>
        </a>
      </div>
    </>
  );
};
export default TheFirstThreeSections;
