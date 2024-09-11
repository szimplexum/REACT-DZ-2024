export const getBurgersData = async (page = 1, perPage = 5, sort = 'burgerName') => {
  const response = await fetch(
    `http://localhost:3000/burgers?_page=${page}&_per_page=${perPage}&_sort=${sort}`,
  );
  return response.json();
};
