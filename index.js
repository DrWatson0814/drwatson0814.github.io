document.getElementById('repoList');
const userRepos = document.addEventListener('DOMContentLoaded', () => {
const GITHUB_USERNAME = 'DocWatson0814';
const personalAccessToken = '';



const repoListA = async () => {
const endpoint = 'https://api.github.com/users/drwatson0814/repos';
try {
        const response = await fetch('https://api.github.com/users/drwatson0814/repos');
        const data = await response.json();
        const repoContainer = document.getElementById('repoList')
        
        for(const repo of data) {
            const repoInfo = document.createElement('div');
            const repoName = document.createElement('h2');
            const repoLink = document.createElement('a');
            repoLink.classList.add('repo-info');
            repoLink.href = repo.html_url;
            repoLink.textContent = repo.name;
            repoName.appendChild('repoLink');
            repoInfo.appendChild('repoName');
            repoContainer.appendChild('repoInfo');
        };
    }catch(error) {
        console.error(error);
    }
    
};

repoListA();

});




// function populateList(obj) {


// }



document.addEventListener('DOMContentLoaded', () => {

})