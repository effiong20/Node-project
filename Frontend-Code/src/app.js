import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import BookDetail from './components/BookDetail';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={BookList} />
          <Route path="/add" component={BookForm} />
          <Route path="/books/:id" component={BookDetail} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
