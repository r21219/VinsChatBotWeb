import React, { useState } from 'react';
import ApiClient from "../service/ApiClient";


const DatasetUploader: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            setSelectedFile(files[0]);
        }
    };

    const handleUpload = async () => {
        if (selectedFile) {
            try {
                await ApiClient.uploadDataSet(selectedFile);
                alert('Dataset uploaded successfully.');
                setSelectedFile(null);
            } catch (error) {
                alert('Error uploading dataset. Please try again.');
            }
        } else {
            alert('Please select a file to upload.');
        }
    };

    return (
        <div className="card">
            <div className="card-header">Upload Dataset</div>
            <div className="card-body">
                <input type="file" className="form-control-file" onChange={handleFileChange} />
            </div>
            <div className="card-footer">
                <button className="btn btn-primary" onClick={handleUpload}>Send</button>
            </div>
        </div>
    );
};

export default DatasetUploader;