import * as React from 'react';
interface Props {
    intervalMs: number;
    getData: (url: string) => Promise<any>;
}
declare const _default: React.ElementType<Props>;
export default _default;
