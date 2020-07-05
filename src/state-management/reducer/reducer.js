export const reducer = (state, action) =>
{
    let newState = state;
    switch(action.type)
    {
        case "ADD_ARTICLE":
        {
            newState = [...newState, {
                id: Math.random(),
                title: action.article.title,
                body: action.article.body
            }];
            break;
        }
        default:
        {
            
        }
    }
   return newState;
}