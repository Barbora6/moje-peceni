import { ImageListItem, ImageListItemBar } from "@mui/material"

export const RecipeBox = ({id, image, title}) => {
    
    return <a href={`/OneRecipe/${id}`}>
        <ImageListItem>
                <img 
                src={`/pictures/${image}`} 
                alt='' 
                loading='lazy' />
            <ImageListItemBar title={title}/>
        </ImageListItem>
    </a>   
}