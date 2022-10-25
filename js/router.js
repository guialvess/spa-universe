export class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    this.handle()
  }

  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]

    switch(pathname) {
      case '/':
        document.body.style.backgroundImage = 'url("../assets/mountains-universe-1.png")'
        document.querySelector('a:nth-of-type(2)').style.fontWeight = 'bold'
        document.querySelector('a:nth-of-type(3)').style.fontWeight = '400'
        document.querySelector('a:nth-of-type(4)').style.fontWeight = '400'
      break;

      case '/universe':
        document.body.style.backgroundImage = 'url("../assets/mountains-universe-2.png")'
        document.querySelector('a:nth-of-type(2)').style.fontWeight = '400'
        document.querySelector('a:nth-of-type(3)').style.fontWeight = 'bold'
        document.querySelector('a:nth-of-type(4)').style.fontWeight = '400'
      break;
      
      case '/exploration':
          document.body.style.backgroundImage = 'url("../assets/mountains-universe-3.png")'
          document.querySelector('a:nth-of-type(2)').style.fontWeight = '400'
          document.querySelector('a:nth-of-type(3)').style.fontWeight = '400'
          document.querySelector('a:nth-of-type(4)').style.fontWeight = 'bold'
      break;
    }

    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector("#app").innerHTML = html
    })
  }
}