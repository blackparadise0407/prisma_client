import request from 'api/request';
import { Attachment, GeneralApiResponse } from 'schema';

const AttachmentEndpoint = '/attachment';

const attachmentApi = {
    uploadImage: (blob: File) => {
        const formData = new FormData();
        formData.append('file', blob);
        return request<GeneralApiResponse<Attachment>>(
            'POST',
            AttachmentEndpoint + '/image',
            formData,
        );
    },
};

export default attachmentApi;
