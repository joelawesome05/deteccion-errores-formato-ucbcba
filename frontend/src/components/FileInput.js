import React, { Component } from 'react';




class FileInput extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.uploadSingleFile = this.uploadSingleFile.bind(this);
        this.fileInput = React.createRef();
        this.singleUploadForm = document.querySelector('#singleUploadForm');
        this.singleFileUploadInput = document.querySelector('#singleFileUploadInput');
        this.singleFileUploadError = document.querySelector('#singleFileUploadError');
        this.singleFileUploadSuccess = document.querySelector('#singleFileUploadSuccess');
    }
    handleSubmit(event) {
        var files = singleFileUploadInput.files;
        if (files.length === 0) {
            singleFileUploadError.innerHTML = "Please select a file";
            singleFileUploadError.style.display = "block";
        }
        this.uploadSingleFile(files[0]);
        this.props.onChnagee(this.fileInput.current.files[0].name);
        event.preventDefault();
    }

    uploadSingleFile(file) {
        var formData = new FormData();
        formData.append("file", file);

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "api/uploadFile");

        xhr.onload = function () {
            console.log(xhr.responseText);
            var response = JSON.parse(xhr.responseText);
            if (xhr.status == 200) {
                singleFileUploadError.style.display = "none";
                singleFileUploadSuccess.innerHTML = "<p>File Uploaded Successfully.</p><p>DownloadUrl : <a href='" + response.fileDownloadUri + "' target='_blank'>" + response.fileDownloadUri + "</a></p>";
                singleFileUploadSuccess.style.display = "block";
            } else {
                singleFileUploadSuccess.style.display = "none";
                singleFileUploadError.innerHTML = (response && response.message) || "Some Error Occurred";
            }
        }

        xhr.send(formData);
    }

    render() {
        return (
            <div style={{ color: "black" }}>
                <form onSubmit={this.handleSubmit} id="singleUploadForm" name="singleUploadForm">
                    <label>
                        Upload file:
                <input id="singleFileUploadInput" type="file" name="file" className="file-input" required ref={this.fileInput} />
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>
                <div className="upload-response">
                    <div id="singleFileUploadError"></div>
                    <div id="singleFileUploadSuccess"></div>
                </div>
            </div>
        );
    }
}

export default FileInput;