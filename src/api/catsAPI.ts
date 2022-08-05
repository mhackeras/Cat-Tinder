import axios from 'axios';
import {catsApiKey} from '../../config';

export const fetchCats = async (page: number) => {
  const res = await axios.get(
    `https://api.thecatapi.com/v1/images/search?limit=10&&page=${page}`,
  );
  return res.data;
};

export const catVote = async (imageId: string, vote: number) => {
  axios.defaults.headers.common['x-api-key'] = catsApiKey;
  const res = await axios.post(`https://api.thecatapi.com/v1/votes`, {
    image_id: imageId,
    value: vote,
  });
  return res.data;
};
