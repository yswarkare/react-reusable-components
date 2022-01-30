import removeApiResponse from "../../actions/removeApiResponse";

const removeSessionApiResponse = (entity) => {
  return removeApiResponse(entity, 'session')
}

export default removeSessionApiResponse;