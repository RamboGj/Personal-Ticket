const socialMedias = {
     whatsapp: 'send?phone=5547996371853',
     github: "RamboGj",
     linkedin: "rambog",
     twitter: "ramboojp",
     instagram: "ramboojg"
}

function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')
        const isLinkedin = social == 'linkedin'
        
        if (social == 'whatsapp') {
            li.children[0].href = `https://api.whatsapp.com/${socialMedias[social]}`
            
        } else {
            isLinkedin? li.children[0].href = `https://${social}.com/in/${socialMedias[social]}/`
            :
            li.children[0].href = `https://${social}.com/${socialMedias[social]}`
        }
    }
}

changeSocialMediaLinks()

function getGithubProfileApi() {
    const apiUrl = `https://api.github.com/users/${socialMedias.github}`

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userDescription.textContent = data.bio
        userGit.href = data.html_url
        userPhoto.src = data.avatar_url
        userLogin.textContent = data.login
    })
}

getGithubProfileApi()