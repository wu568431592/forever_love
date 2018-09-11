import { Component } from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';

let app = dva({
  history: window.g_history,
  
});

window.g_app = app;
app.use(createLoading());
app.use(require('/Users/web/Documents/workspace/forever_love/node_modules/_dva-immer@0.2.3@dva-immer/lib/index.js').default());
app.model({ namespace: 'app', ...(require('/Users/web/Documents/workspace/forever_love/src/models/app.js').default) });
app.model({ namespace: 'model', ...(require('/Users/web/Documents/workspace/forever_love/src/pages/home/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/web/Documents/workspace/forever_love/src/pages/newMemorialDay/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/web/Documents/workspace/forever_love/src/pages/interaction/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/web/Documents/workspace/forever_love/src/pages/login/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/web/Documents/workspace/forever_love/src/pages/loveMoment/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/web/Documents/workspace/forever_love/src/pages/myInfo/model.js').default) });

class DvaContainer extends Component {
  render() {
    app.router(() => this.props.children);
    return app.start()();
  }
}

export default DvaContainer;
