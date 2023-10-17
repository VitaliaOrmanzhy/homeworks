const postContainer = document.querySelector('.post-container');


let previousId = '';

function getInputValue() {
    const formData = new FormData(document.querySelector('.form'));
    return formData.get('id');
}

function getPost(id) {
    if (id != previousId) {
        const promise = new Promise((resolve, reject) => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then(response => {
                    if (response.ok) {
                        resolve(response.json())
                    } else {
                        reject(response);
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
        .catch(error => {   
            console.log(error);
        });
    }

    previousId = id;
}

function getComments(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                .then(response => {
                    if (response.ok) {
                        console.log(response)
                        return response.json()
                    }

                    throw new Error( {status: response.status, statusText: response.statusText})
                })
                .then(data => {
                    console.log(data);
                    const commentsUl = document.querySelector('.post__comments');

                    data.map(el => {
                        const comment = document.createElement('li');
                        comment.classList.add('comment');
                        comment.innerHTML = `
                        <p class="comment__user">${el.email}</p>
                        <p class="comment__body paragraph">${el.body}</p>
                        `
                        commentsUl.append(comment);
                    }) 
                })
                .catch(error => console.error(error));
}

document.querySelector('.post-container').addEventListener('click', (e) => {
    const elem = e.target;
    const commentsUl = document.querySelector('.post__comments');

    if (elem.classList.contains('show-comments_btn')) {
        commentsUl.innerHTML == '' ? getComments(getInputValue()) : null;

        elem.classList.toggle('active');

        if (elem.classList.contains('active')) {
            elem.textContent = 'Hide comments';
        } else {
            elem.textContent = 'Show comments';
        }

        commentsUl.classList.toggle('open');
    }
})

document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault();

    const inputVal = getInputValue();
    getPost(inputVal);
})