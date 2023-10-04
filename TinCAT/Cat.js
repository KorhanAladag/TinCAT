import { getImageSrc } from "/utils.js"
import { getImageSrcforSuper } from "/utils.js"

class Cat {
    
    constructor(data) {
        Object.assign(this, data)
        this.imgSrc ="";
    }
    
    setHasBeenSwiped(hasSwiped) {
        this.hasBeenSwiped = hasSwiped
        return this.hasBeenSwiped
    }
  
    setHasBeenLiked(element) {
        if (element.classList.contains("like-icon")) {
        this.hasBeenLiked = true
        }
        return this.hasBeenLiked
    }
    
    setHasBeenSuperLiked(element) {
        if (element.classList.contains("superlike-icon")) {
        this.hasBeenSuperLiked = true
        }
        return this.hasBeenSuperLiked
    }
    
    getAssociatedImageHtml(element) {
            
            this.setHasBeenSuperLiked(element)
            this.setHasBeenLiked(element)
            if (this.hasBeenSuperLiked)
            this.imgSrc = getImageSrcforSuper(this.setHasBeenSuperLiked(element))
            
            else
            this.imgSrc = getImageSrc(this.setHasBeenLiked(element))
            
        this.setHasBeenSwiped(true)
        return `
        <img src="${this.imgSrc}"
        alt="heart or nope image"
        class="like-nope-img"
        />
        `
  }
  
    getCatHtml() {
        const { name, avatar, alt, age, bio } = this
        return `
        <div class="cat-container">
            <img
            src="${avatar}"
            alt="${alt}"
            class="cat-img"
            />
            <div class="cat-info">
                <p class="cat-name-age">${name}, ${age}</p>
                <p class="cat-bio">${bio}</p>
            </div> 
        </div>
        `
  }
}

export default Cat