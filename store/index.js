import Cookies from "js-cookie";

export const state = () => ({
  posts: [],
  token: null
});

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
  },
  addPost(state, post) {
    state.posts.push(post);
  },
  editPost(state, postEdit) {
    const indexPost = state.posts.findIndex(post => post.id == postEdit.id);
    state.posts[indexPost] = postEdit;
  },
  setToken(state, token) {
    state.token = token;
  },
  destroyToken(state) {
    state.token = null;
  }
};

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    return this.$axios
      .get(`https://blog-nuxt-js-a2cd0-default-rtdb.firebaseio.com/posts.json`)
      .then(res => {
        const postArray = [];
        for (let key in res.data) {
          postArray.push({ ...res.data[key], id: key });
        }
        commit("setPosts", postArray);
        if (req.headers.cookie) {
          const webCookie = req.headers.cookie
            .split(";")
            .find(t => t.trim().startsWith("jwt="));
          if (!webCookie) return false;
          let token = webCookie.split("=")[1];
          commit("setToken", token);
        }
      });
  },
  signInUserAdmin({ commit }, userAuth) {
    const apiKey = "AIzaSyB4ZhMYfQLYH8KDvRYaJ2mpn-um3mHwoI4";
    return this.$axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
        {
          email: userAuth.email,
          password: userAuth.password,
          returnSecureToken: true
        }
      )
      .then(res => {
        commit("setToken", res.data.idToken);
        Cookies.set("jwt", res.data.idToken);
      });
  },
  logoutUserAdmin({ commit }) {
    Cookies.remove("jwt");
    commit("destroyToken");
  },
  addPost({ commit }, post) {
    this.$axios
      .post(
        `https://blog-nuxt-js-a2cd0-default-rtdb.firebaseio.com/posts.json`,
        post
      )
      .then(res => {
        commit("addPost", { ...post, id: res.data.name });
      });
  },
  editPost({ commit }, post) {
    return this.$axios
      .put(
        `https://blog-nuxt-js-a2cd0-default-rtdb.firebaseio.com/posts/${post.id}.json`,
        post
      )
      .then(res => {
        commit("editPost", post);
      });
  }
};

export const getters = {
  getPosts(state) {
    return state.posts;
  },
  checkUserAuth(state) {
    return state.token != null;
  }
};
