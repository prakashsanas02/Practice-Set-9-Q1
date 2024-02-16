const loadScript = async (src) => {
  return new Promise((resolve, reject) => {
          let script = document.createElement("script")
          script.src = src
          script.onload = () => {
                  resolve(src + " Done Successfully")
          }
          document.head.append(script)
  })
}


let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
a.then((value) => {
  console.log(value)
 })
