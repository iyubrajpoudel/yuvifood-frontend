export const fetchData = async (url, options) => {
    try {
      const res = await fetch(url, options);
      const data = await res.json();
      return data;
    } 
    catch (error) {
      console.log(error);
    }
  }