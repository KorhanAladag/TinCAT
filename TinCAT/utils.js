function getImageSrc(isImageLiked) {
  return isImageLiked
    ? "images/badge-like.png"
    : "images/badge-nope.png"
}

function getImageSrcforSuper(isImageSuperLiked) {
    return isImageSuperLiked
    ? "images/meow-badge.jpg"
    : "images/meow-badge.jpg"
    
}

function disableButtons(isDisabled) {
  document.querySelector(".like-icon").disabled = isDisabled
  document.querySelector(".nope-icon").disabled = isDisabled
  document.querySelector(".superlike-icon").disabled = isDisabled
}

export { getImageSrc, getImageSrcforSuper, disableButtons }