import React from "react"
import "./Article.css"

const article = (({data}) => {
    return(
      <div className="article">
        <h1>{data.title}</h1>
        <p>{data.body}</p>
      </div>
    );
  }
);

export default article;

// class Article extends Component
// {
//   render()
//   {
//     return(
//       <div className="article">
//         <h1>{this.props.data.title}</h1>
//         <p>{this.props.data.body}</p>
//       </div>
//     );  
//   }
// }

// export default Article;