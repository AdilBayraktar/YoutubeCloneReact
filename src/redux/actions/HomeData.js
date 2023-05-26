import axios from "axios";
const homeAction = (data) => async (dispatch) => {
  try {
    const options = {
      method: "GET",
      url: "https://youtube-v31.p.rapidapi.com/search",
      params: {
        q: data,
        //   relatedToVideoId: '7ghhRHRP6t4',
        part: "snippet",
        // type: "video",
        maxResults: "50",
        regionCode: "TR",
      },
      headers: {
        "X-RapidAPI-Key": "0413e4c305mshb7d39345827e073p15f5d4jsnf424f6c0fcbf",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };
    await axios
      .request(options)
      .then(function (response) {
        dispatch({ type: "GET_VIDEOS", payload: response.data });
      })
      .catch(function (err) {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
  }
};

export default homeAction;
