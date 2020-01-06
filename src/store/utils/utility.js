export const buildRequest = (state) => {
  let query = '';
  Object.entries(state.query).forEach((el) => {
    query = query.concat(`${el.join('=')}&`);
  });
  return query;
};
