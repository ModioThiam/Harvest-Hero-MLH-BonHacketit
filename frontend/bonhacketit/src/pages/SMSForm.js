import React, { Component } from 'react';

class SMSForm extends Component {
  render() {
    return (
      <form>
        <div>
          <label htmlFor="to">To:</label>
          <input
            type="tel"
            name="to"
            id="to"
          />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <textarea name="body" id="body" />
        </div>
        <button type="submit">
          Send message
        </button>
      </form>
    );
  }

}

export default SMSForm;
