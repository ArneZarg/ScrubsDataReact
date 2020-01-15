import axios from "axios";
import * as serviceHelper from "./serviceHelpers";

const url = `${serviceHelper.API_HOST_PREFIX}/api/admin`;

const getCompliantProviders = () => {
  const settings = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    url: `${url}/providers`,
    withCredentials: true,
    crossdomain: true
  };
  return axios(settings)
    .then(serviceHelper.onGlobalSuccess)
    .catch(serviceHelper.onGlobalError);
};
const getCompliantProvidersByState = id => {
  const settings = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    url: `${url}/providers/${id}`,
    withCredentials: true,
    crossdomain: true
  };
  return axios(settings)
    .then(serviceHelper.onGlobalSuccess)
    .catch(serviceHelper.onGlobalError);
};

export { getCompliantProviders, getCompliantProvidersByState };
