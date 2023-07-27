import { IconProps } from './interfaces';

export default function MoveUpIcon(
    props: Omit<React.SVGProps<SVGElement>, 'ref'> & {
        size?: IconProps['size'];
    }
) {
    const { size: _, ...etc } = props;
    return (
        <svg
            {...etc}
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            viewBox="0 -960 960 960"
            width="40"
        >
            <path d="M328.847-180.001q-109.692 0-186.961-75.346Q64.617-330.693 64.617-440q0-109.846 80.129-182.871 80.128-73.025 190.615-72.897l-65.95-66.514q-7.358-7.82-7.358-18.025 0-10.205 7.275-17.48 7.904-7.904 18.173-7.712 10.268.193 17.499 7.423l106.154 106.154q9.358 9.359 9.358 21.923 0 12.564-9.358 21.923L305.615-542.538q-7.82 7.82-17.999 7.82-10.179 0-18.083-7.82-7.532-7.821-7.545-17.987-.012-10.166 7.218-17.397l67.848-67.847q-90.001 1.794-156.091 60.038Q114.872-527.488 114.872-440q0 88.231 62.808 148.987 62.808 60.757 151.551 60.757h75.641q10.852 0 17.99 7.141 7.137 7.142 7.137 18t-7.137 17.986q-7.138 7.128-17.99 7.128h-76.025Zm232.609-343.845q-13.737 0-22.596-8.907t-8.859-22.375v-193.436q0-13.717 8.907-22.576t22.374-8.859h267.261q13.738 0 22.597 8.907 8.859 8.907 8.859 22.375v193.436q0 13.717-8.907 22.576t-22.375 8.859H561.456Zm0 343.845q-13.737 0-22.596-8.907t-8.859-22.375v-193.436q0-13.717 8.907-22.576t22.374-8.859h267.261q13.738 0 22.597 8.907 8.859 8.907 8.859 22.375v193.436q0 13.717-8.907 22.576t-22.375 8.859H561.456Zm18.8-50.255h229.488v-155.643H580.256v155.643Z" />
        </svg>
    );
}