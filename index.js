const userRepos = document.getElementsByClassName('projects-icon').addEventListener('DOMContentLoaded', () => {
const GITHUB_USERNAME = 'DocWatson0814';
const Personal Access Token = '';



const repoListA = async () => {
const endpoint = 'https://api.github.com/users/DrWatson0814/repos';
try {
        const response = await fetch('https://api.github.com/users/drwatson0814/repos');
        const data = await response.json();
        
        for(const repo in data) {
            const repoInfo = document.createElement('div');
            const repoName = document.createElement('h2');
            const repoLink = document.createElement('a');
            repoLink.classList.add('repoInfo');
            repoLink.href = endpoint;
            repoLink.textContent = repo.name;
            repoName.appendChild('repoLink');
            repoInfo.appendChild('repoName');
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