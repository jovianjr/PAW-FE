const InstagramIcon = props => (
    <svg
        width={16}
        height={16}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g clipPath="url(#a)">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.977.71C5.759.676 6.008.668 8 .668c1.992 0 2.241.008 3.023.044.781.035 1.314.16 1.781.34.489.185.932.474 1.299.847.373.366.661.809.845 1.298.181.467.305 1 .341 1.78.036.783.044 1.033.044 3.024 0 1.992-.008 2.241-.044 3.023-.035.78-.16 1.314-.341 1.78-.184.49-.473.933-.845 1.3-.367.373-.81.661-1.299.845-.467.181-1 .305-1.78.341-.783.036-1.032.044-3.024.044s-2.241-.008-3.023-.044c-.78-.035-1.314-.16-1.78-.341a3.598 3.598 0 0 1-1.3-.845 3.595 3.595 0 0 1-.846-1.299c-.18-.467-.304-1-.34-1.78C.675 10.241.667 9.991.667 8c0-1.992.008-2.241.044-3.023.035-.781.16-1.314.34-1.781.185-.49.474-.933.847-1.299a3.595 3.595 0 0 1 1.298-.846c.467-.18 1-.304 1.78-.34Zm5.986 1.32C10.19 1.996 9.958 1.989 8 1.989c-1.958 0-2.19.007-2.963.043-.716.032-1.104.152-1.362.252a2.277 2.277 0 0 0-.844.548c-.243.237-.43.525-.548.844-.1.258-.22.646-.252 1.362-.036.773-.043 1.005-.043 2.963 0 1.958.007 2.19.043 2.963.032.716.152 1.104.252 1.362.118.318.305.607.548.844.237.243.526.43.844.548.258.1.646.22 1.362.252.773.036 1.004.043 2.963.043s2.19-.007 2.963-.043c.716-.032 1.104-.152 1.362-.252.342-.134.587-.292.844-.548.243-.237.43-.526.548-.844.1-.258.22-.646.252-1.362.036-.773.043-1.005.043-2.963 0-1.958-.007-2.19-.043-2.963-.032-.716-.152-1.104-.252-1.362a2.276 2.276 0 0 0-.548-.844 2.276 2.276 0 0 0-.844-.548c-.258-.1-.646-.22-1.362-.252Zm-3.9 8.23a2.446 2.446 0 1 0 1.761-4.563 2.447 2.447 0 0 0-1.76 4.564ZM5.335 5.336a3.77 3.77 0 1 1 5.33 5.33 3.77 3.77 0 0 1-5.33-5.33Zm7.27-.543a.893.893 0 0 0-.276-1.474.891.891 0 1 0 .276 1.474Z"
                fill="url(#b)"
            />
        </g>
        <defs>
            <linearGradient
                id="b"
                x1={8}
                y1={0.667}
                x2={8}
                y2={15.333}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#BC2A8D" />
                <stop offset={0.792} stopColor="#FBAD50" />
                <stop offset={1} stopColor="#FCCC63" />
            </linearGradient>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h16v16H0z" />
            </clipPath>
        </defs>
    </svg>
);

export default InstagramIcon;
