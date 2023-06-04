const axios = require('axios');

const getDiseasesFromEndpoint = async () => {
  try {
    const response = await axios.get('https://test-dermacare-vz4k62wwoa-as.a.run.app'); // Ganti URL_ENDPOINT_DATASET dengan URL endpoint dataset yang sesuai
    const diseases = response.data;
    return diseases;
  } catch (error) {
    console.error('Error fetching diseases:', error);
    throw new Error('Error fetching diseases');
  }
};

module.exports = { getDiseasesFromEndpoint };
