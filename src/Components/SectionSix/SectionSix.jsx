import {Link} from 'react-router-dom'
function SectionSix({ bootstrap, img, h5, index }) {
  return (
    <div className={`Image${index} ${bootstrap} background col-md`}>
      <div className="pt-5">
        {img && <img src={img} alt="" />}
        {h5 && <h5>{h5}</h5>}
        <div className="twolinks pb-5">
          <Link className="pr-5" to="#">
            Learn more <i className="fa-solid fa-angle-right"></i>
          </Link>
          <Link to="#">
            Buy <i className="fa-solid fa-angle-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SectionSix;
