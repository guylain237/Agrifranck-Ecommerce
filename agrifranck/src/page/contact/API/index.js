import axios from 'axios';

// ****** Get IP adrress
export const IpAddress = async ({ setLoading, setIpData }) => {
  try {
    let res = await axios.get(
      `http://api.ipstack.com/check?access_key=2758b3a263f8ef1c1bbdf1d1d78dd95e`
    );
    if (res) {
      setLoading(false);
      setIpData(res.data.country_name);
    }
  } catch (error) {
    alert(`IP address Error: ${error}`);
  }
};

// *********** Get Countries
export const GetContries = async ({ setLoading, setCountries }) => {
  try {
    let res = await axios.get(
      `https://api.apilayer.com/number_verification/countries`,
      {
        headers: {
          apikey: "5HyFv0NRJMB8Mn0W53UJjbInRVUPNVhU",
        },
      }
    );
    if (res) {
      setLoading(false);
      setCountries(res.data);
    }
  } catch (error) {
    // alert(error.response.data.message);
    setLoading(false);
  }
};

// *********** Send email
/*
export const SendEmail = async ({
  fullName,
  email,
  phone,
  message,
  setSend,
}) => {
  try {
    const datas = { fullName, email, phone, message };
    let res = await axios.post(`http://localhost:8080/send`, datas);
    if (res) {
      setSend(res.data);
    }
  } catch (error) {
    alert(error);
  }
};*/
