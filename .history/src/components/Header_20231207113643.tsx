import * as React from 'react';

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <div>
        <h1>This is the header text</h1>
      </div>
    );
  }
}
