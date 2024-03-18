// start image carousel
function startCarousel() {
  let activeImage = 0;
  const images = document.querySelectorAll("#picCarousel img")
  console.log(images)

  function cycleImages() {
    if (!images[activeImage]) {
      clearInterval(intervalId)
      return
    }
    //loop carousel
    images[activeImage].classList.remove("active")
    activeImage = (activeImage + 1) % images.length 
    images[activeImage].classList.add("active")
  }
  let intervalId = setInterval(cycleImages, 3000)
}

function checkForError() {
  const urlParams = new URLSearchParams(window.location.search)
  if (urlParams.has('error')) {
    alert("Validation failed. name and description required.")
  }
}

// Start the carousel and check for errors when page loads
window.onload = function() {
  startCarousel()
  checkForError()
}

function editItem(id, name, description) {
  // hidden field populate with id
  document.getElementById('updateId').value = id

  // form fields with existing item data
  document.getElementById('updateName').value = name
  document.getElementById('updateDescription').value = description

  // update forms action attribute
  document.getElementById('updateForm').action = `/item/update/${id}`
}

async function deleteItem(id) {
  try {
    const response = await fetch(`http://localhost:3000/item/delete/${id}`, {
      method: 'DELETE'
    })
    if (response.ok) {
      console.log('Item deleted successfully')
      location.reload()
    } else {
      console.log('Failed to delete item')
    }
  } catch(err) {
    console.log('An error occurred deleting: ', err)
  }
}