const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

function getData() {
  header.innerHTML = `<img src="https://photos5.appleinsider.com/gallery/46342-93914-Pink-MacBook-Air-xl.jpg" alt=""/>`
  title.innerHTML = `Lorem ipsum dolor sit amet`
  excerpt.innerHTML = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, aliquam sit tempora odio ex magni.`
  profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/women/26.jpg" alt="">`
  name.innerHTML = `John Doe`
  date.innerHTML = `Jul 11, 2022`
}