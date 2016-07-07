import vueModal from '../src'

document.querySelector('button').addEventListener('click', e => {
  vueModal({
    title: 'OverWatch',
    msg: 'The World Needs Heros',
    needNoBtn: true,
  })
})
