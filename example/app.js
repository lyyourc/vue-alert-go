import vueAlert from '../src'
import correctIcon from './correct.svg'

document.querySelector('.basic')
  .addEventListener('click', () => {
    vueAlert({
      title: 'OverWatch',
      msg: 'The World Needs Heros',
    })
  })

document.querySelector('.align')
  .addEventListener('click', () => {
    vueAlert({
      title: 'OverWatch',
      msg: 'The World Needs Heros',
      align: 'center',
    })
  })

document.querySelector('.icon')
  .addEventListener('click', () => {
    vueAlert({
      msg: 'The World Needs Heros',
      align: 'center',
      icon: correctIcon,
    })
  })

document.querySelector('.handler')
  .addEventListener('click', () => {
    vueAlert({
      msg: 'The World Needs Heros',
      align: 'center',
      needNoBtn: true,
      onClickYesBtn() {
        console.log('Hello World')
      },
    })
  })

document.querySelector('.style')
  .addEventListener('click', () => {
    vueAlert({
      title: 'OverWatch',
      msg: 'The World Needs Heros',
      style: {
        padding: '5px',
        yesBtnColor: '#4993e5',
        background: '#FCDEED',
      },
    })
  })
