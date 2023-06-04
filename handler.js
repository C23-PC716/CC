const axios = require('axios');
const diseasesModule = require('./diseases');


exports.getDiseasesFromEndpoint = async () => {
  try {
    const response = await axios.get('https://test-dermacare-vz4k62wwoa-as.a.run.app');
    const diseases = response.data;
    return diseases;
  } catch (error) {
    console.error('Error fetching diseases:', error);
    throw new Error('Error fetching diseases');
  }
};

exports.getDiseases = async (request, h) => {
    try {
      const diseases = await diseasesModule.getDiseasesFromEndpoint();
      return diseases;
    } catch (error) {
      console.error('Error fetching diseases:', error);
      return h.response('Error fetching diseases').code(500);
    }
  };
  

  exports.addDisease = async (request, h) => {
    const newDisease = request.payload;
    try {
      // Logika untuk menambahkan penyakit baru ke dataset di GCP menggunakan API atau metode yang sesuai belum dibuat
  
      const response = await axios.post('https://test-dermacare-vz4k62wwoa-as.a.run.app', newDisease);
      const updatedDiseases = response.data;
      
      return { message: 'Disease added successfully' };
    } catch (error) {
      console.error('Error adding disease:', error);
      return h.response('Error adding disease').code(500);
    }
  };
  
  
