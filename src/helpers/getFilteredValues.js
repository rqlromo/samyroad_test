export const filterValue = (inputValue, dataFromApi) => {
  let dataFiltered = dataFromApi.filter(element => {
    return (
      element.title.toLowerCase().includes(inputValue.toLowerCase()) ||
      element.author.toLowerCase().includes(inputValue.toLowerCase())
    );
  });
  return dataFiltered;
};
