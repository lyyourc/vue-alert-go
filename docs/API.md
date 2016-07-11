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
| autoCloseTimeout | Number | 0       | if `<= 0` wont autoclose |
| icon        | String    | ''        | status icon |
| msg         | String    | ''        | alert message     |
| needNoBtn   | Boolean   | false     | display no button |
| needCloseBtn| Boolean   | true      | display close button  |
| noBtnText   | String    | 'NO'      | no button text |
| onClickYesBtn | Function |           | call function when clicking yes button |
| onClickNoBtn | Function |           | call function when clicking no button |
| style        | Object   | [??](#style)     | customize default styles |
| title       | String    | ''        |             |
| yesBtnText  | String    | 'YES'     | yes button text |

### style
default styles:

```javascript
{
  padding: '20px',
  yesBtnColor: '',
  background: '#fff',
}
```

### animate
There are 3 types of animation: 

- `fade`: opacity transition
- `bound`: scale transition
- `slide`: translateY 