const BASE_URL = process.env.NODE_ENV === 'development' 
  ? 'http://127.0.0.1:8001'  
  : 'https://jenyadevelop.pythonanywhere.com';

export default BASE_URL;