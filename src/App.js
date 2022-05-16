import React from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import AppBar from './components/navs/AppBar';
import { NotFound } from './components/NotFound';
import Story from './components/Story';
import './styles/App.css';

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <AppBar />
      <Switch>
        <Route path="/" render={() => <Redirect to="/top" />} exact={true} />
        <Route
          path="/:category"
          render={({ match }) => {
            const { category } = match.params;
            if (!['top', 'new', 'best'].includes(category)) {
              return <Redirect to="/" />;
            }
            return <Story category={category} />;
          }}
        />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </div>
  );
}

export default App;
