import React, { useEffect, useState } from "react";
import { YoutubeVideoData } from "../../data/data";

function AppleYoutubeVideos() {
  const [videos, setVideo] = useState([]);
  //https://developers.google.com/youtube/v3
  useEffect(() => {
    async function fetchData() {
      const respond = await fetch(
        "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=AIzaSyAQgX-UblwwFTnqU5JO9GrZDFlj6kwya8I"
      );
      const data = await respond.json();
      // console.log(data)
      setVideo(data.items);
    }
    fetchData();
    //same as
    // fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=AIzaSyB-jdTtvin6j5ryzvHShE531tA6GsGz5jU').then((response) => response.json()).then((data) => {
    //     console.log(data)
    //     setVideo(data.items)
    // })
        // setVideo(YoutubeVideoData.items)
  }, []);
  // console.log(videos);

  return (
    <div className="container">
      <div className="row text-center ">
        <div className="col-12 my-4">
          <h1>Latest Videos</h1>
        </div>
        {videos.map((video,index) => {
          let vidId = video.id.videoId;

          let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
          return (
            <>
              <div key={index} className="col-12 col-md-6 col-lg-4 mb-3">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank" rel="noreferrer">
                      <img
                        className="img-fluid"
                        src={video.snippet.thumbnails.high.url}
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="videoInfoWrapper">
                  <div className="videoTitle">
                    <a href={vidLink} target="_blank" rel="noreferrer">
                      {video.snippet.title}
                    </a>
                  </div>
                </div>
                <div className="videoDesc">
                  <p>{video.snippet.description}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default AppleYoutubeVideos;
