function main() {
    document.addEventListener('DOMContentLoaded', () => {
        fetchRequestFunction();
    });
}

function fetchRequestFunction() {
    let baseURL = 'assets/php/';

    fetch(baseURL+`userMainCommentRead.php`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Invalid response');
            }
            return response.json();
        })
        .then((data) => {
            localStorage.setItem('userPostComment', JSON.stringify(data))
            return fetch(baseURL + `picReadFromDataBase.php`);
        })
        .then((response)=>{
            if (!response.ok) {
                throw new Error('Invalid response');
            }
            return response.json();
        })
        .then((data)=>{
            localStorage.setItem('userPostCommentPicture', JSON.stringify(data))
            console.log(data);
        })
        .catch((e) => {
            alert(e.message);
        });
};

main();