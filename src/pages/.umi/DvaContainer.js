import { Component } from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';

let app = dva({
  history: window.g_history,
  
});

window.g_app = app;
app.use(createLoading());
app.use(require('F:/workspace/forever_love/node_modules/dva-immer/lib/index.js').default());
app.model({ namespace: 'app', ...(require('F:/workspace/forever_love/src/models/app.js').default) });
app.model({ namespace: 'model', ...(require('F:/workspace/forever_love/src/pages/home/model.js').default) });
app.model({ namespace: 'model', ...(require('F:/workspace/forever_love/src/pages/newMemorialDay/model.js').default) });
app.model({ namespace: 'model', ...(require('F:/workspace/forever_love/src/pages/interaction/model.js').default) });
app.model({ namespace: 'model', ...(require('F:/workspace/forever_love/src/pages/login/model.js').default) });
app.model({ namespace: 'model', ...(require('F:/workspace/forever_love/src/pages/loveMoment/model.js').default) });
app.model({ namespace: 'model', ...(require('F:/workspace/forever_love/src/pages/myInfo/model.js').default) });

class DvaContainer extends Component {
  render() {
    app.router(() => this.props.children);
    return app.start()();
  }
}

export default DvaContainer;
