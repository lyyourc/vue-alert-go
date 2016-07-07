# Vue-Modal
a modal component for vue.js

## Basic
only `title` and `msg`.

```javascript
import vueModal from '../src'

vueModal({
  title: 'OverWatch',
  msg: 'The World Needs Heros',
})
```

![basic](./screenshots/basic.png)


## Align
you can specify the `align` property to align text.

```javascript
vueModal({
  title: 'OverWatch',
  msg: 'The World Needs Heros',
  align: 'center', // add this!
})
```

![align](./screenshots/align.png)


## Icon
specify status icon via `icon` property.

```javascript
import correctIcon from './correct.svg'

vueModal({
  msg: 'The World Needs Heros',
  align: 'center', 
  icon: correctIcon, // add this!
})
```

![icon](./screenshots/icon.png)


## Handler
If you like, you can add some listeners for some events.

```javascript
vueModal({
  msg: 'The World Needs Heros',
  align: 'center',
  needNoBtn: true,
  onClickYesBtn() {
    console.log('Hello World')
  }, // add this!
})
```

![click yes btn](./screenshots/handler2.png)
![handler result](./screenshots/handler1.png)