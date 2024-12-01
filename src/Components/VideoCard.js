const VideoCard = ({ info }) => {
  if (!info) return;
  const { snippet, statistics } = info;
  const { title, thumbnails, channelTitle } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img alt="thumbnail" src={thumbnails.medium.url} className="rounded-lg" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
