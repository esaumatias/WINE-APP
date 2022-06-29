export const getWines = async () => {
    const URL = `https://wine-back-test.herokuapp.com/products?page=1&limit=10`;
    try {
      const response = await fetch(URL, {
        method: "get",
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      const responseJSON = await response.json();
      return responseJSON.items;
    } catch (error) {
      console.log(error);
    }
  };