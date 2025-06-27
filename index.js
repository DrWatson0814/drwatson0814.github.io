async function githubFetch() {
    const response = await fetch('https://api.github.com/users/drwatson0814/repos');
    const data = await response.json(); 
     
}


githubFetch();