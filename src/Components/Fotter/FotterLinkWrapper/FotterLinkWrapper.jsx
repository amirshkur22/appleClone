import LinkWrapper1 from "./LinkWrapper1/LinkWrapper1.jsx";
import fotterData from "../../../data/data.jsx";
function FotterLinkWrapper ()  {
    return (
      <div className="footer-links-wrapper row">
        {fotterData.map((section, index) => {
          return <LinkWrapper1 data={section} index={index + 1} key={index} />;
        })}
      </div>
    );
  }

export default FotterLinkWrapper;
