import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";

import EmojiResultRow from "./EmojiResultRow";
import "./EmojiResults.css";

export default class EmojiResults extends PureComponent {
  static propTypes = {
    emojiData: PropTypes.array
  };

  componentDidMount() {
    // componentDidMount() is invoked immediately after a component is mounted (inserted into the tree).
    this.clipboard = new Clipboard(".copy-to-clipboard");
  }

  componentWillUnmount() {
    //componentWillUnmount() is invoked immediately before a component is unmounted and destroyed.
    //Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests,
    //or cleaning up any subscriptions that were created in componentDidMount().
    this.clipboard.destroy();
  }

  render() {
    return (
      <div className="component-emoji-results">
        {this.props.emojiData.map(emojiData => (
          <EmojiResultRow
            key={emojiData.title}
            symbol={emojiData.symbol}
            title={emojiData.title}
          />
        ))}
      </div>
    );
  }
}
