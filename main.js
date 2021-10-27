const LinksSocialMedia = {
    github:"LuisHenriqueDuarte",
   youtube: "channel/UCKXhrfvGQijd8YmpWdzAa_g",
   facebook:"luishenrique.duarte.90",
   twitter:"i/flow/login",
   instagram:"luis_h.duarte",
  }

  function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
      const social = li.getAttribute('class')

      li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

    }
  }
  changeSocialMediaLinks()

  function gitGitHubProfileInfos(){
      const url = `https://api.github.com/users/${LinksSocialMedia.github}`

      fetch(url)
      .then(response => response.json() )
      .then (data => {userName.textContent= data.name
        userBio.textContent=data.bio
        userLink.href=data.html_url
        userImage.src=data.avatar_url
        userLogin.textContent = data.login
    } ) 

      
  }
gitGitHubProfileInfos()
