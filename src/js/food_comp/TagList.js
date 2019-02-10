import React, {Component} from 'react';
import Chip from 'material-ui/Chip';

class TagList extends Component {
    constructor(props) {
        super(props);
    }

  
    render() {
      const tags = this.props.tags;
      if (Array.isArray(tags)) {
        return <div className='tag-list'>
          {tags.map((tag, tagIndex) => {
              return <Chip className='tag' key={tagIndex}
                style={{margin:4}}>{tag}</Chip>;
            })
          }
        </div>;
      }
      else return <div />;
    }
}

export default TagList;