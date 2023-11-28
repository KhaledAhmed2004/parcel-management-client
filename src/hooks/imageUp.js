import axios from "axios";

const imageUp = async (image) => {
  const formData = new FormData();
  formData.append("image", image);
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb_api_key}`,
    formData
  );
  return data;
};

export default imageUp;
