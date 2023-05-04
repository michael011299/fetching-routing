import axios from "axios";

const generalApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPhotos = async () => {
    try {
      const { data } = await generalApi.get("/photos");
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  export const getPosts = async () => {
    try {
      const { data } = await generalApi.get("/posts");
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  export const getAlbums = async () => {
    try {
      const { data } = await generalApi.get("/albums");
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  export const getUsers = async () => {
    try {
      const { data } = await generalApi.get("/users");
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  export const getToDo = async () => {
    try {
      const { data } = await generalApi.get("/todos");
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  export const getComments = async () => {
    try {
      const { data } = await generalApi.get("/comments");
      return data;
    } catch (err) {
      console.error(err);
    }
  };


  export const getCommentsByPostId = async (postId) => {
    try {
        const {data} = await generalApi.get(`/posts/${postId}/comments`)
      return data;
    } catch (err) {
        console.error(err)
    }
  };
