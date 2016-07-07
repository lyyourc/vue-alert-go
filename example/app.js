import vueModal from '../src'
import correctIcon from './correct.svg'

document.querySelector('.basic')
  .addEventListener('click', () => {
    vueModal({
      title: 'OverWatch',
      msg: 'The World Needs Heros',
    })
  })

document.querySelector('.align')
  .addEventListener('click', () => {
    vueModal({
      title: 'OverWatch',
      msg: 'The World Needs Heros',
      align: 'center',
    })
  })

document.querySelector('.icon')
  .addEventListener('click', () => {
    vueModal({
      msg: 'The World Needs Heros',
      align: 'center',
      icon: correctIcon,
    })
  })

document.querySelector('.handler')
  .addEventListener('click', () => {
    vueModal({
      msg: 'The World Needs Heros',
      align: 'center',
      needNoBtn: true,
      onClickYesBtn() {
        console.log('Hello World')
      },
    })
  })
