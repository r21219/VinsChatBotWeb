import axios, { AxiosResponse } from 'axios';

class ApiClient {
    private static readonly baseUrl = 'http://localhost:8080';

    public static async  sendMessage(userMessage: string): Promise<string> {
        try {
            const response: AxiosResponse<string> = await axios.post(`${ApiClient.baseUrl}/chat`, { message: userMessage });
            return response.data;
        } catch (error) {
            console.error('Error chatting with API:', error);
            throw error;
        }
    }

    public static async  uploadDataSet(file: File): Promise<void> {
        try {
            const formData = new FormData();
            formData.append('file', file);
            await axios.post(`${ApiClient.baseUrl}/upload-dataset`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        } catch (error) {
            console.error('Error uploading dataset:', error);
            throw error;
        }
    }
}

export default ApiClient;