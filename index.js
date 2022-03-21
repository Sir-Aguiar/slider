const controllers = document.querySelectorAll('.controllers label')
const container = document.querySelector('.slider')
const images = document.querySelectorAll('.slide')

controllers.forEach(label => {
  label.addEventListener('click', (e) => {
    Carrossel(e.target)
  })
})

const Carrossel = (target) => {
  let index = target.id

  const currentLabel = document.querySelector('.controllers label.active')
  currentLabel.classList.remove('active')
  target.classList.toggle('active')

  const currentImage = document.querySelector('.slide.active')
  currentImage.classList.remove('active')

  images[index].classList.toggle('active')
  container.style.transform = `translateX(-${index * 100}% )`
}
