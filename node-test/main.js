console.log('hello')
let btn = document.getElementById('btn')
btn.onclick = () => {
  let req = new XMLHttpRequest()
  req.onreadystatechange = () => {
    if (req.readyState === 4) {
      console.log('请求完成')
      console.log(req)
    }
  }
  req.open("GET", "/sayhello")
  req.send()

}
