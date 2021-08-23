import { Text } from 'components';
import PostCreate from 'features/postCreate/PostCreate';
import PostCard from 'features/postsList/PostCard';
import {
    fetchPostList,
    postListSelector,
} from 'features/postsList/postListSlice';
import { map } from 'lodash';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { CellMeasurer } from 'react-virtualized';
import { Post } from 'schema';
import './Newsfeed.scss';

const _renderPostList = (data: Post[] = []): JSX.Element => {
    if (!data.length) return null;
    return (
        <div className="post-list">
            {map(data, (i) => (
                <PostCard key={i.id} data={i} />
            ))}
        </div>
    );
};

const renderRow = ({ index, key, style, parent }, cache, posts) => {
    return (
        <CellMeasurer
            key={key}
            cache={cache}
            parent={parent}
            columnIndex={0}
            rowIndex={index}
        >
            <PostCard data={posts[index]} />
        </CellMeasurer>
    );
};

const Newsfeed = () => {
    const dispatch = useDispatch();

    const { t } = useTranslation();

    const { posts } = useSelector(postListSelector);

    // const cache = new CellMeasurerCache({
    //     fixedWidth: true,
    //     defaultHeight: 500,
    // });

    // const renderRow = ({ index, key, style, parent }) => {
    //     return (
    //         <CellMeasurer
    //             key={key}
    //             cache={cache}
    //             parent={parent}
    //             columnIndex={0}
    //             rowIndex={index}
    //         >
    //             <PostCard data={posts[index]} />
    //         </CellMeasurer>
    //     );
    // };

    useEffect(() => {
        dispatch(fetchPostList());
    }, []);

    return (
        <div className="newsfeed-wrapper">
            <div className="banner">
                <div className="title-wrapper">
                    <div className="title">{t('newsfeed.banner.title')}</div>
                    <Text size="large" className="sub">
                        {t('newsfeed.banner.sub')}
                    </Text>
                </div>
            </div>
            <div className="content">
                <PostCreate />
                {_renderPostList(posts)}
                {/* <AutoSizer>
                    {({ width, height }) => (
                        <List
                            width={width}
                            height={height}
                            deferredMeasurementCache={cache}
                            rowHeight={cache.rowHeight}
                            rowRenderer={renderRow}
                            rowCount={posts.length}
                            overscanRowCount={3}
                        />
                    )}
                </AutoSizer> */}
            </div>
        </div>
    );
};

export default Newsfeed;
