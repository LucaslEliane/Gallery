require('normalize.css/normalize.css');
require('styles/App.less');

var imageDatas = require('json!../data/imageDatas.json');

import React from 'react';


imageDatas = (function (imageDatasArr) {
  imageDatasArr.forEach((value, index) => {
    imageDatasArr[index].imageUrl = require('../images/' + value.fileName);
  });
  return imageDatasArr;
})(imageDatas);

window.console.log(imageDatas);



class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">
        </section>
        <nav className="controller-nav">
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;