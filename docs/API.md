## vueAlert
`vueAlert` is just a function, you can pass an optional `object` as params.

```javascript
import vueAlert from 'path/to/vue-alert-go`

const options = {
  title: 'OverWatch',
}

vueAlert(options)
```

## Default Options
| Prop        | Type      | Default   | Description |
| -----       | ----      | ----      | ----        |
| align       | String    | 'left'    | text align  |
| animate    | String   | 'fade'      | [animation](#animate) of in and out |
| animateDuration| String | '0.2s'     | animation duration |
| autoCloseTimeout | Number | 0       | if `<= 0` wont autoclose |
| cbWhenClose  |  Function | ''       | callback when alert is closed |
| closeWhenClickMask|  Boolean | ture | click mask && close alert |
| icon        | String    | ''        | status icon |
| msg         | String    | ''        | alert message     |
| needNoBtn   | Boolean   | false     | display no button |
| needCloseBtn| Boolean   | false      | display close button  |
| needYesBtn  | Boolean   |  true     |
| noBtnText   | String    | 'NO'      | no button text |
| onClickYesBtn | Function |           | call function when clicking yes button |
| onClickNoBtn | Function |           | call function when clicking no button |
| style        | Object   | [??](#style)     | customize default styles |
| type        |  String   | ''        | specify type and get its icon |
| title       | String    | ''        |             |
| yesBtnText  | String    | 'YES'     | yes button text |

### style
default styles:

```javascript
style: {
  box: {
    padding: '24px 20px',
    borderRadius: '2px',
    bgColor: '#fff',
  },
  yesBtnBgColor: '#2bb56f',
  textColor: '#656b78',
},
```

### animate
There are 3 types of animation: 

- `fade`: opacity transition
- `bound`: scale transition
- `slide`: translateY 