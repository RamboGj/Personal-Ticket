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
            li.children[0].href = 'https://api.whatsapp.com/send?phone=5547996371853' 
            
        } else {
            isLinkedin? li.children[0].href = 'https://www.linkedin.com/in/rambog/'
            :
            li.children[0].href = `https://${social}.com/${socialMedias[social]}`
  
         alert(li.children[0].href)
        }
    }
}

changeSocialMediaLinks()

   