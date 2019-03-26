import React from "react"
import { Card, Image } from "semantic-ui-react"

class CrawlCard extends React.Component {
  render() {
    return (
      <Card link>
        <Image
          src={`https://loremflickr.com/320/240/pub?random=${this.props.id}`}
        />
        <div className="content">
          <h3 className="header">{this.props.name}</h3>
          <ul>
            {this.props.pubs.map(pub => (
              <li key={pub.id}>{pub.name}</li>
            ))}
          </ul>
          <p>
            <span role="img">⭐⭐⭐⭐⭐</span>
          </p>
        </div>
      </Card>
    )
  }

  static defaultProps = {}
}

export default CrawlCard
