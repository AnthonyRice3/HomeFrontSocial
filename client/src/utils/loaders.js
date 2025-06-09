import {api} from "./api.js"

export const listPageLoader = async ({ request, params }) => {
    const query = request.url.split("?")[1];
    const postPromise = api("/residency?" + query);
    // return defer({
    //   postResponse: postPromise,
    // });
  };