import clsx from 'clsx';
import React from 'react';
import './styles.scss';

type SkeletonShape = 'circle' | 'rect';

type Props = {
    shape?: SkeletonShape;
};

const Skeleton = ({ shape = 'rect' }: Props) => {
    return <div className={clsx('skeleton', 'skeleton--' + shape)}></div>;
};

export default React.memo(Skeleton);
