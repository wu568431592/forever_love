import { Component } from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';

let app = dva({
  history: window.g_history,
  
});

window.g_app = app;
app.use(createLoading());
app.use(require('F:/workspace/forever_love/node_modules/_dva-immer@0.2.3@dva-immer/lib/index.js').default());
app.model({ namespace: 'app', ...(require('F:/workspace/forever_love/src/models/app.js').default) });
app.model({ namespace: 'model', ...(require('F:/workspace/forever_love/src/pages/home/model.js').default) });

class DvaContainer extends Component {
  render() {
    app.router(() => this.props.children);
    return app.start()();
  }
}

export default DvaContainer;
