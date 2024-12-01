const YOUTUBE_API_KEY = "AIzaSyAdas4bSpIs_LSfwg-rxABbo2Ocp9Dy3OY";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  YOUTUBE_API_KEY;
