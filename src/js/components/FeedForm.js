import React from 'react';

class FeedForm extends React.Component {
  render() {
    return (
      <form className="container">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Titles" />
          <input type="text" className="form-control" placeholder="Description" />
          <button className="btn btn-primary btn-block" type="submit">Add</button>
        </div>
      </form>
    );
  }
}

export default FeedForm;
