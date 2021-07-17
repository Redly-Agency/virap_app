import * as React from "react";

function SvgLogo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1017 341.682"
      {...props}
    >
      <g data-name="Group 1">
        <text
          transform="translate(354 253)"
          fontSize={241}
          fontFamily="Poppins-SemiBold, Poppins"
          fontWeight={600}
        >
          <tspan x={0} y={0}>
            {"Virap"}
          </tspan>
        </text>
        <path
          data-name="Icon metro-fire"
          d="M83.31 341.683c-22.716-47.268-10.619-74.353 6.84-99.872 19.119-27.945 24.047-55.609 24.047-55.609s15.03 19.539 9.018 50.1c26.553-29.558 31.563-76.65 27.555-94.686 60.019 41.944 85.669 132.762 51.1 200.069 183.861-104.028 45.734-259.686 21.687-277.22 8.016 17.534 9.536 47.216-6.657 61.62C189.489 22.14 121.712.837 121.712.837c8.016 53.6-29.057 112.221-64.806 156.02-1.256-21.375-2.59-36.124-13.83-56.579-2.523 38.83-32.2 70.482-40.234 109.386-10.885 52.687 8.157 91.263 80.468 132.019z"
          fill="red"
        />
      </g>
    </svg>
  );
}

export default SvgLogo;
