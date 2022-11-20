import { CSSProperties } from 'react';
import { SpinnerCircular } from 'spinners-react';

type SpinnerProps = {
    color: string;
    size: number;
    speed: number;
    thickness: number;
    style: CSSProperties;
}

const Spinner = (props: SpinnerProps) => {
    return (
        <SpinnerCircular {...props} />
    )
}

Spinner.defaultProps = {
    color: '#384564',
    size: 100,
    speed: 200,
    thickness: 120,
    style: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    } as CSSProperties
}

export default Spinner;