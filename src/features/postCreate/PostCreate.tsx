import clsx from 'clsx';
import { Button, Divider, FlexGrow } from 'components';
import { authSelector } from 'features/auth/authSlice';
import { map } from 'lodash';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineCamera } from 'react-icons/ai';
import { BiHash } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import getBase64 from 'utils/fileRead';
import './PostCreate.scss';
import {
    createPost,
    postCreateSelector,
    updateContent,
    updatePhotos,
} from './postCreateSlice';

const PostCreate = () => {
    const dispatch = useDispatch();

    const { post, status } = useSelector(postCreateSelector);

    const bottomEl = useRef(null);
    const uploadEl = useRef(null);
    const inputEl = useRef(null);

    const [textValue, setTextValue] = useState('');

    const { t } = useTranslation();
    const { user } = useSelector(authSelector);

    const handleContentBlur = (e) => {
        dispatch(updateContent(e.target.value as string));
    };

    const handleContentChange = (e) => {
        setTextValue(e.target.value);
    };

    const handleInputClick = () => {
        uploadEl.current.click();
    };

    const scrollToBottom = () => {
        bottomEl.current.scrollIntoView({ behavior: 'smooth' });
    };

    const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
        const fileList = e.target.files as FileList;
        if (!fileList.length) {
            return;
        }
        const file = e.target.files[0];
        const urlString = await getBase64(file);
        dispatch(
            updatePhotos({
                data: {
                    blob: urlString,
                    file,
                },
            }),
        );
        // scrollToBottom();
    };

    const handleCreatePost = () => {
        dispatch(createPost());
    };

    useEffect(() => {
        if (status) {
            inputEl.current.value = '';
        }
    }, [status]);

    return (
        <form className="post-create">
            <input
                ref={uploadEl}
                type="file"
                onChange={handleUpload}
                style={{ display: 'none' }}
            />
            <div className="post-create__container">
                <textarea
                    ref={inputEl}
                    placeholder={`${t('newsfeed.post_create.placeholder')}, ${
                        user?.username
                    }?`}
                    onChange={handleContentChange}
                    onBlur={handleContentBlur}
                />

                <Divider />
                {post.photos.length ? (
                    <React.Fragment>
                        <div className="photo-group">
                            {map(post.photos, (p, idx) => (
                                <img
                                    key={p.blob.substring(0, 10) + idx}
                                    src={p.blob}
                                    alt="post"
                                    className={clsx(
                                        idx > 0 && 'photo--half',
                                        idx > 2 && 'photo--quater',
                                    )}
                                />
                            ))}
                        </div>
                        {/* <div
                            style={{ float: 'left', clear: 'both' }}
                            ref={bottomEl}
                        ></div> */}
                    </React.Fragment>
                ) : null}
            </div>
            <div className="post-create__action">
                <div className="action-list">
                    <div
                        onClick={handleInputClick}
                        className="action-item camera"
                    >
                        <AiOutlineCamera />
                    </div>
                    <div className="action-item  hash">
                        <BiHash />
                    </div>
                </div>
                <FlexGrow />
                <div className="button-list">
                    <Button type="ghost">
                        {t('newsfeed.post_create.discard')}
                    </Button>
                    <Button
                        loading={status === 'loading'}
                        onClick={handleCreatePost}
                        type="primary"
                    >
                        {t('newsfeed.post_create.post')}
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default PostCreate;
