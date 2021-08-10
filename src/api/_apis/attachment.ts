import request from 'api/request';
import { GeneralApiResponse } from 'schema';

const AttachmentEndpoint = '/attachment';

export type AttachmentType = 'IMAGE' | 'VIDEO' | 'FILE';

export interface Attachment {
    id?: number;
    size?: number;
    type?: AttachmentType;
    url?: string;
    blob?: string;
    file?: File;
}

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
