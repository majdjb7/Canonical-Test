class APIManager {
    constructor() {
        this.posts = []
    }

    async fetchPosts() {
        await fetch("https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json", {
            method: 'GET',
        })
        .then((res) => res.json())
        .then((data) => {
            let post = data.map((p) => {
                let authorDetails = p._embedded.author.filter(author => author.id === p.author);

                return {
                    title: p.title.rendered,
                    postLink: p.link,
                    image: p.featured_media,
                    authorName: authorDetails[0].name,
                    authorLink: p._links.self[0].href,
                    date: p.date,
                    postType: p.type
                };
            });
            this.posts.push(post);
        })
        .catch((err) => console.log(err));
        return this.posts
    }
}