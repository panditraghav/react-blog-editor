import React from 'react';
import { useVeridicalTheme } from '../../../utils';

export default function DialogContentContainer({
    children,
}: {
    children?: React.ReactNode;
}) {
    const theme = useVeridicalTheme()?.dialog;
    return <div className={theme?.contentContainer}>{children}</div>;
}
