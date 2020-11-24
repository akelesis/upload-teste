const fileInput = document.getElementById("file-input")

fileInput.addEventListener("change", (event) => {
    const img = event.target.files[0]

    const formData = new FormData()

    formData.append("image", img)

    axios.post("https://teste-upload-the-second.herokuapp.com/upload", formData)
        .then(res => console.log(res))
})