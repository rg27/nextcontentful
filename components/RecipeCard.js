import Link from 'next/link'
const ReciperCard = ({recipe}) => {
    const {title, slug, cookingTime, thumbnail} = recipe.fields
    return ( 
        <div className="card"> 
            <div className="featured">
            </div>
            <div className="content">
                <div className="info">
                    <h4>{title}</h4>
                    <p>Time Preparing {cookingTime}</p>
                </div>
                <div className="actions">
                    <Link href={'/recipes/' + slug}><a>Cook This</a></Link>
                </div>
            </div>
        </div>
     );
}
 
export default ReciperCard;