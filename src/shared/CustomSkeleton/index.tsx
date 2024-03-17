import './styles.css'

type Props = {
    width?: number | string;
    height?: number | string;
    borderRadius?: number | string;
};
export const CustomSkeleton = ({
    width = '',
    height = '',
}: Props) => {
    return (
        <div
            className={'skeleton_container'}
            style={{ width, height }}
        >
            <div className={'skeleton_animation'}></div>
        </div>
    );
};
