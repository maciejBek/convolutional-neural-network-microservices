import React from 'react';
import axios from 'axios';

const Photo = () => {

  const [statephoto, setStatephoto] = React.useState("None")
  const [img, setImg] = React.useState();

  // a local state to store the currently selected file.
  const [selectedFile, setSelectedFile] = React.useState(null);

  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
  };

  const handleSubmit = (event) => {
    setStatephoto("")
    event.preventDefault()
    const formData = new FormData();
    formData.append("image", selectedFile);

    console.log(selectedFile)

    axios({
      method: "post",
      url: "http://192.168.1.102:5000/images",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
          //handle success
          // console.log(response)
          // console.log(response.data.object)
          setStatephoto(response.data.object)
      })
      .catch(function (response) {
          //handle error
          console.log(response);
      });

  }

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
    setImg(URL.createObjectURL(event.target.files[0]));
  }

  return (
    <div id="Photo">
      <img id="Img" src={img} alt="" />
      <form id="Form" onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileSelect}/>
        <input id="Button2" type="submit" value="Wyślij plik" />
      </form>
      <div id="Ans1">Na zdjęciu wykryto: <div id="Ans2">{statephoto}</div></div>
    </div>
  )
};

export default Photo;