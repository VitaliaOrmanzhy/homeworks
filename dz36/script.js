const postContainer = document.querySelector('.post-container');

let previousId = '';

function getPost(id) {
    if (id != previousId) {
        const promise = new Promise((resolve, reject) => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then(response => {
                    if (response.ok) {
                        resolve(response.json())
                    } else {
                        reject(error);
                    }
                })
        })
        .then(data => {
            const div = document.createElement('div');
            div.classList.add('post');
            console.log(data)

            div.innerHTML = `
                <div class="post__info">
                    <p class="post__user">User ID: ${data.userId}</p>
                    <h3 class="post__title">${data.title}</h3>
                    <p class="post__body paragraph">${data.body}</p>
                </div>
                <button type="button" class="show-comments_btn btn">Show comments</button>
                <ul class="post__comments"></ul>`;

            postContainer.innerHTML = '';
            postContainer.append(div);
            return data;
        })
        .catch(error => console.log(error));
        
        promise.then(data => {

            fetch(`https://jsonplaceholder.typicode.com/comments`)
                .then(response => response.json())
                .then(comments => {
                    //комментарии поста
                    const filteredComments = comments.filter(el => el.postId === data.id);

                    const commentsUl = document.querySelector('.post__comments');

                    filteredComments.map(el => {
                        const comment = document.createElement('div');
                        comment.classList.add('comment');
                        comment.innerHTML = `
                        <p class="comment__user">${el.email}</p>
                        <p class="comment__body paragraph">${el.body}</p>
                        `
                        commentsUl.append(comment);
                    }) 
                })
        })
    }

    previousId = id;

    return promise;
}

document.querySelector('.post-container').addEventListener('click', (e) => {
    const elem = e.target;
    if (elem.classList.contains('show-comments_btn')) {
        elem.classList.toggle('active');

        if (elem.classList.contains('active')) {
            elem.textContent = 'Hide comments';
        } else {
            elem.textContent = 'Show comments';
        }

        document.querySelector('.post__comments').classList.toggle('open');
    }
})

document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault();
    const inputVal = document.querySelector('.form__input').value;

    getPost(inputVal);
})