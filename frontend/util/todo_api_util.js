// const success1 = () => {
//   console.log("happy days!");
// };
// const error1 = () => {
//   console.log("sad days!");
// };
//
//
export const fetchTodos = (success , error ) => {
  $.ajax({
    method: 'GET',
    url: 'api/todos',
    success,
    error
  });
};
