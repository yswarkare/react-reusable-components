import axios from "axios";

const getUsers = async () => {
  let res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
  return res;
}

export default getUsers;