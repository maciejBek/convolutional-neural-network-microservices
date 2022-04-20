import React from 'react';
import axios from 'axios';

const Photo = () => {
  // a local state to store the currently selected file.
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append("image", selectedFile);

    axios({
      method: "post",
      url: "http://192.168.1.102:5000/images",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
          //handle success
          console.log(response)
          console.log(response.data.object)
      })
      .catch(function (response) {
          //handle error
          console.log(response);
      });

  }

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileSelect}/>
      <input type="submit" value="Wyślij plik" />
    </form>
  )
};

export default Photo;