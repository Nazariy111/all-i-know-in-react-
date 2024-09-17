import axios from "axios";

// axios.defaults.baseURL = "https://api.unsplash.com/search";

axios.defaults.headers = "Authorization: Client-ID cpuvLz83K9IQztnVTg1DOeQWm3mmVmD8mJRvQERnDBY"

export const getPhotoByQuery = async (query) => {
    const params = {
        per_page: 9,
        page: 1,
    }
    const response = await axios.get(`https://api.unsplash.com/search/photos?query=${query}`, { params });
        
    return response;
}