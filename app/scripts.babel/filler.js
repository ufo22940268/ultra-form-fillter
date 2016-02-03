/**
 * Created by cc on 2/3/16.
 */
"use strict";

class FormFiller {

  fill() {
    Array.from(document.getElementsByTagName('input')).forEach(el => el.value = '123123123');
  }

  find( ) {
  }
}


class TextFormFiller extends FormFiller{
  getSelection() {
    return 'input';
  }
}

new TextFormFiller().fill();
