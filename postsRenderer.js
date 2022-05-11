class Renderer {
    constructor() {
    }

    renderPosts(data) {
        const posts = data;

        const container = document.createElement("div")
        document.body.appendChild(container)
        container.setAttribute("id", "grid")

        for(let post of posts[0]) {

            let card = document.createElement("div");
            card.setAttribute("class","card");
            
            let header = document.createElement('div');;
            const headerText = document.createTextNode("CLOUD AND SERVER");
            header.appendChild(headerText);

            header.setAttribute("class","header");

            card.appendChild(header);

            let midArea = document.createElement("div");
            midArea.setAttribute("class","mid-area");

            let postImage = document.createElement("img");
            postImage.src = post.image

            let postTitle = document.createElement("a");
            const titleText = document.createTextNode(post.title);
            postTitle.appendChild(titleText);

            postTitle.setAttribute("class","post-title");
            postTitle.href = post.postLink;
           
            let postDetails = document.createElement("div");
            const space = document.createElement('br');
            postDetails.appendChild(space);

            const options = {
                year: 'numeric', month: 'long', day: 'numeric'
            };
            const date = new Date(post.date).toLocaleString('en-gb', options);
            const dateContent = document.createTextNode(`By ` );
            const dateText = document.createTextNode(` on ${date}` );

            const authorLink= document.createElement("a");
            const authorText = document.createTextNode(post.authorName);
            authorLink.appendChild(authorText)
            authorLink.href = post.authorLink;

            postDetails.appendChild(dateContent);
            postDetails.appendChild(authorLink);
            postDetails.appendChild(dateText);
            postDetails.setAttribute("class","author-details");
            
            let footer = document.createElement('div');;
            const footerText = document.createTextNode(post.postType);
            footer.appendChild(footerText);

            footer.setAttribute("class","footer");

            container.appendChild(card);
            card.appendChild(midArea)
            midArea.appendChild(postImage);
            midArea.appendChild(postTitle);
            midArea.appendChild(postDetails);
            card.appendChild(footer)
        }
    }
}