import axios from "axios";

export const SendEmail = async  ({
  fullName,
  email,
  phone,
  message,
  setSend,
}) => {
  try {
    const datas = { fullName, email, phone, message };
    let res = await axios.post(`${process.env.REACT_APP_SERVER_DOMIN}/send`, datas);
    if (res) {
      setSend(res.data);
    }
  } catch (error) {
    alert(error.response.data.message);
  }
};