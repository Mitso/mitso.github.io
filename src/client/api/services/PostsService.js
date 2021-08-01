import Server from "./server";

export default {
  fetchPosts () {
    return Server().get("posts");
  }
};