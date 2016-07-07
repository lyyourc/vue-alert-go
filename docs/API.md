## vueAlert
`vueAlert` is just a function, you can pass an optional `object` as params.

```javascript
const options = {
  title: 'OverWatch',
}

vueAlert(options)
```

## Default Options
```javascript
{
  title: '',
  msg: '',
  icon: '',

  align: 'left',  // left, center, right
  autoCloseTimeout: 0, // auto close alert in mile second

  needNoBtn: false, // display no btn
  needCloseBtn: true, // display close btn
  yesBtnText: 'YES',
  noBtnText: 'NO',

  onClickYesBtn: () => ({}), // yes btn click handler
  onClickNoBtn: () => ({}), // no btn click handler
}
```