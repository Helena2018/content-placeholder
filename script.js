const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile-img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 1000)

function getData() {
  header.innerHTML = `<img src="https://photos5.appleinsider.com/gallery/46342-93914-Pink-MacBook-Air-xl.jpg" alt=""/>`
  title.innerHTML = `Lorem ipsum dolor sit amet`
  excerpt.innerHTML = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, aliquam sit tempora odio ex magni.`
  profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/women/26.jpg" alt="">`
  name.innerHTML = `John Doe`
  date.innerHTML = `Jul 11, 2022`

  animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach(text => text.classList.remove('animated-bg-text'))
}