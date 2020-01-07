import cloneDeep from 'clone-deep';

export const buildRequest = (state, genre) => {
  let queryStr = '';
  const query = cloneDeep(state.query);

  if (genre) {
    query.search = genre;
    query.searchBy = 'genres';
  }

  Object.entries(query).forEach((el) => {
    queryStr = queryStr.concat(`${el.join('=')}&`);
  });
  return queryStr;
};
