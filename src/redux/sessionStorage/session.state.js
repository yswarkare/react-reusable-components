import users from "../../dummy/users/users";

const sessionState = {
  users: users,
  show_api_response_message: false,
  api_response: {
    message: "",
    status: "",
  }
}

export default sessionState;