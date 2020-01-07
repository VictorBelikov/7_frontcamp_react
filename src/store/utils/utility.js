import cloneDeep from 'clone-deep';

export const buildRequest = (stateQuery, genre) => {
  let queryStr = '';
  const query = cloneDeep(stateQuery);

  if (genre) {
    query.search = genre;
    query.searchBy = 'genres';
  }

  Object.entries(query).forEach((el) => {
    queryStr = queryStr.concat(`${el.join('=')}&`);
  });
  return queryStr;
};
