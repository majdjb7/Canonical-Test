const apiManager = new APIManager();
const renderer = new Renderer();

apiManager.fetchPosts().then(() => renderer.renderPosts(apiManager.posts))