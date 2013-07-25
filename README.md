Tie.js
======
Licensed under the EUPL V.1.1

Node.js
-------
```js
var cheerio = require('cheerio');
var tie = require('tie').tie;
var html = '<table>\n' +
'  <thead>\n' +
'    <tr>\n' +
'      <th>Date</th>\n' +
'      <th>Activity</th>\n' +
'      <th>Comment</th>\n' +                                                                                                                                                                                                                                     
'      <th>Name</th>\n' +
'    </tr>\n' +
'  </thead>\n' +
'  <tbody class="activities">\n' +
'    <tr>\n' +
'      <td class="date"></td>\n' +
'      <td class="activity"></td>\n' +
'      <td class="comment"></td>\n' +
'      <td class="name"></td>\n' +
'    </tr>\n' +
'  </tbody>\n' +
'</table>'
  
var data = { activities:
             [ { date: '2011-08-23',
                 activity: 'Jogging',
                 comment: 'Early morning run',
                 name: 'Harry Potter' },
               { date: '2011-09-13',
                 activity: 'Gym',
                 comment: 'Chest workout',
                 name: 'Batman' } ] };
  
var $ = cheerio.load(html)
tie($.root(), data)
console.log($.html())
```
  
Browser
-------
  
Be sure to include jQuery or Zepto before Tie
  
HTML

```html
<table>
  <thead>
    <tr>
      <th>Date</th>
      <th>Activity</th>
      <th>Comment</th>
      <th>Name</th>
    </tr>
  </thead>
  <tbody class="activities">
    <tr>
      <td class="date"></td>
      <td class="activity"></td>
      <td class="comment"></td>
      <td class="name"></td>
    </tr>
  </tbody>
</table>
```
  
```js
var data = { activities:
             [ { date: '2011-08-23',
                 activity: 'Jogging',
                 comment: 'Early morning run',
                 name: 'Harry Potter' },
               { date: '2011-09-13',
                 activity: 'Gym',
                 comment: 'Chest workout',
                 name: 'Batman' } ] };
  
tie($('table'), data)
```
