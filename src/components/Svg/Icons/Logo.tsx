import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 360 360" {...props}>
      <path d="m193.51 41.474c-3.711 0.84-8.373 2.621-10.671 4.079-0.966 0.612-1.827 1.114-1.913 1.114-0.085 0-1.038 0.523-2.116 1.162-1.62 0.96-7.593 4.415-12.702 7.347-0.611 0.35-3.944 2.268-7.407 4.26-3.463 1.993-6.819 3.921-7.458 4.286-2.346 1.338-17.119 9.834-21.431 12.326-2.445 1.412-5.361 3.069-6.482 3.683-1.12 0.614-2.203 1.24-2.407 1.392s-2.62 1.566-5.37 3.142c-6.652 3.812-6.321 3.622-13.519 7.764-3.463 1.992-6.88 3.955-7.593 4.361-22.457 12.782-24.982 14.41-28.672 18.488-4.408 4.871-7.098 9.971-8.396 15.916-0.704 3.228-0.72 5.056-0.62 72.092l0.102 68.781 0.822 2.592c3.544 11.178 9.066 16.993 24.172 25.456 0.917 0.514 3.667 2.088 6.111 3.499 4.518 2.607 19.314 11.116 21.431 12.324 0.639 0.364 3.995 2.292 7.458 4.285s6.796 3.91 7.407 4.262c0.611 0.351 3.111 1.793 5.556 3.203 4.56 2.632 19.352 11.138 21.431 12.324 1.222 0.697 12.961 7.449 14.865 8.55 0.611 0.354 2.695 1.55 4.63 2.658 1.935 1.109 5.685 3.278 8.333 4.821 14.482 8.437 25.708 9.236 37.407 2.663 2.038-1.144 4.621-2.588 5.741-3.209 1.121-0.62 2.204-1.252 2.408-1.403 0.203-0.152 2.62-1.566 5.37-3.142 6.652-3.812 6.32-3.622 13.519-7.764 3.462-1.993 6.818-3.921 7.457-4.285 2.079-1.186 16.872-9.692 21.431-12.324 2.445-1.41 4.945-2.852 5.556-3.203 0.611-0.352 3.944-2.27 7.407-4.262 3.463-1.993 6.88-3.954 7.593-4.359 44.802-25.449 46.365-26.694 49.585-39.516l0.785-3.126v-70.044-70.044l-0.785-3.127c-2.354-9.371-7.411-15.325-18.289-21.531-1.629-0.93-3.546-2.024-4.259-2.43-0.713-0.407-3.296-1.894-5.741-3.305-4.56-2.631-19.352-11.137-21.431-12.323-0.639-0.365-3.995-2.293-7.458-4.286-3.463-1.992-6.796-3.91-7.407-4.261-0.611-0.352-3.111-1.793-5.556-3.204-4.559-2.631-19.352-11.137-21.431-12.323-0.639-0.365-3.995-2.293-7.457-4.286-3.463-1.992-6.797-3.909-7.408-4.26-5.109-2.932-11.082-6.387-12.701-7.347-1.079-0.639-2.025-1.162-2.103-1.162s-1.445-0.798-3.039-1.773c-8.075-4.94-16.293-6.444-24.755-4.531m10.892 17.441c1.658 0.356 4.063 1.65 20.225 10.883 0.814 0.465 4.314 2.476 7.777 4.469 7.182 4.133 6.846 3.94 13.519 7.765 2.75 1.576 5.167 2.99 5.37 3.141 0.204 0.152 1.287 0.779 2.408 1.393 1.12 0.615 7.453 4.238 14.074 8.052 6.62 3.813 12.703 7.313 13.518 7.777 6.005 3.42 11.542 6.621 11.852 6.852 0.204 0.152 1.287 0.778 2.408 1.392 1.12 0.614 4.037 2.27 6.481 3.68s7.342 4.223 10.882 6.252c8.941 5.122 11.264 7.396 13.139 12.856l0.794 2.314 0.103 63.518c0.112 69.58 0.139 68.609-1.972 72.883-2.23 4.517-4.43 6.322-14.983 12.293-1.324 0.749-4.657 2.662-7.407 4.251s-5.5 3.176-6.112 3.527c-0.611 0.35-3.944 2.268-7.407 4.26-3.463 1.993-6.819 3.921-7.457 4.286-2.346 1.338-17.119 9.834-21.432 12.326-2.444 1.412-5.361 3.069-6.481 3.683-1.121 0.614-2.204 1.241-2.408 1.392-0.203 0.152-2.62 1.566-5.37 3.142-6.673 3.825-6.337 3.631-13.519 7.764-3.463 1.993-6.963 4.001-7.777 4.464-0.815 0.462-5.149 2.95-9.63 5.53-12.577 7.24-15.288 7.475-24.444 2.118-3.26-1.907-22.52-13.004-27.728-15.975-0.639-0.364-3.995-2.293-7.458-4.285-3.463-1.993-6.796-3.911-7.407-4.262s-3.111-1.793-5.556-3.204c-4.559-2.631-19.352-11.137-21.431-12.323-0.639-0.364-3.995-2.293-7.457-4.285-3.463-1.993-6.797-3.91-7.408-4.26s-3.944-2.266-7.407-4.259c-3.463-1.992-6.797-3.908-7.408-4.258-11.736-6.708-12.936-7.639-14.773-11.474l-1.153-2.408-0.1-67.407c-0.066-44.184 0.028-68.011 0.272-69.159 1.005-4.723 3.279-7.3 9.552-10.82 2.393-1.343 5.017-2.83 5.832-3.305 1.31-0.764 12.251-7.065 15.185-8.745 0.611-0.35 3.945-2.267 7.408-4.259 3.462-1.993 6.818-3.921 7.457-4.286 2.079-1.186 16.872-9.692 21.431-12.323 2.445-1.411 4.945-2.852 5.556-3.204 0.611-0.351 3.944-2.269 7.407-4.261 3.463-1.993 6.797-3.91 7.408-4.26s3.944-2.266 7.407-4.259c3.463-1.992 6.796-3.909 7.408-4.258 0.611-0.349 4.859-2.78 9.44-5.402 10.159-5.814 12.185-6.434 17.372-5.322m-4.692 25.244c-0.216 0.26-0.448 0.722-0.516 1.026s-0.373 0.774-0.678 1.045c-0.306 0.27-0.346 0.385-0.09 0.255 0.374-0.19 0.464 15.594 0.457 79.766-7e-3 54.928 0.113 80.55 0.382 81.75 0.567 2.529 1.07 3.261 1.119 1.629 0.022-0.713 0.091-1.547 0.153-1.852 2.187-10.793 4.709-20.362 10.201-38.704 8.336-27.838 10.511-37.808 11.49-52.685 1.428-21.694-4.51-43.712-17.703-65.648-4.046-6.728-4.35-7.143-4.815-6.582m96.213 74.569c-10.537 3.904-23.782 9.781-30 13.311-1.324 0.752-3.324 1.873-4.445 2.492-1.12 0.619-3.086 1.852-4.369 2.741s-2.482 1.617-2.663 1.617c-0.182 0-0.45 0.192-0.595 0.427-0.166 0.268-0.102 0.327 0.169 0.16 0.33-0.204 0.411 4.423 0.335 19.34-0.078 15.567-3e-3 19.572 0.364 19.431 0.255-0.098 0.463-0.327 0.463-0.509s0.236-0.331 0.525-0.331c0.288 0 0.58-0.127 0.648-0.282s1.04-0.933 2.161-1.727c8.487-6.02 19.975-18.199 27.892-29.569 6.219-8.93 17.736-29.557 16.482-29.517-0.267 8e-3 -3.402 1.096-6.967 2.416m-154.82 36.995v19.426l3.154 2.241c12.678 9.011 29.798 16.493 44.531 19.463 1.478 0.298 1.505 0.69-0.326-4.731-5.956-17.634-16.862-33.055-32.107-45.401-3.543-2.87-14.395-10.424-14.974-10.424-0.153-1e-3 -0.278 8.741-0.278 19.426m93.501-0.816-1.464 1.574 1.574-1.464c1.464-1.361 1.744-1.684 1.464-1.684-0.06 0-0.769 0.709-1.574 1.574m-86.093 43.833c-3.736 0.445-8.91 1.367-10.454 1.863l-1.75 0.561-0.204 24.81 1.248-0.234c7.068-1.327 17.773-6.649 25.604-12.728 4.171-3.238 12.11-11.059 11.65-11.477-1.759-1.598-19.862-3.537-26.094-2.795m111.77 13.862c-0.056 6.887-0.045 12.465 0.024 12.396 0.07-0.07 0.788 0.107 1.596 0.392 7.238 2.553 21.589 2.601 33.288 0.109 4.452-0.947 4.42-0.651 0.494-4.55-10.203-10.135-19.947-16.195-31.883-19.83l-3.417-1.04-0.102 12.523m-60.402-0.38c-0.391 2.277-0.756 4.985-0.737 5.463 0.01 0.255 0.039 14.296 0.065 31.204l0.046 30.741h1.774c8.254 0 16.752-7.123 18.606-15.593 1.544-7.055-0.695-13.709-9.273-27.556-6.686-10.793-8.737-15.489-9.783-22.407-0.407-2.692-0.508-2.96-0.698-1.852" fill="#08ba60"/>
      <path d="m197.02 88.549c-2.204 3.244-7.526 12.92-8.646 15.718l-0.956 2.388-0.012 48.252-0.012 48.253 3.164 10.716c3.245 10.992 5.947 21.067 7.055 26.309 0.345 1.63 0.773 3.121 0.953 3.315 0.188 0.203 0.326-33.017 0.326-78.426 0-43.328-0.077-78.778-0.171-78.778-0.095 0-0.86 1.014-1.701 2.253m129.83 113.12c0 34.629 0.043 48.851 0.096 31.603 0.054-17.248 0.054-45.581 0-62.963-0.053-17.382-0.096-3.27-0.096 31.36m-209.81-24.662v13.254l1.173 1.63c3.758 5.221 12.457 14.451 18.086 19.191 4.351 3.663 4.44 3.735 4.633 3.735 0.1 0 0.182-8.714 0.182-19.365v-19.365l-3.611-2.132c-3.414-2.015-12.47-6.589-17.963-9.073l-2.5-1.13v13.255m136.4 2.729c-1.979 1.09-6.908 4.739-10.662 7.893-4.496 3.777-5.356 4.581-9.521 8.91l-2.855 2.967-0.02 15.526c-0.018 14.096-0.077 15.568-0.642 15.989-0.342 0.254-0.457 0.462-0.255 0.462s0.525-0.146 0.719-0.325c0.193-0.179 1.018-0.533 1.833-0.786 5.448-1.694 21.873-10.854 22.248-12.407 0.099-0.407 0.133-9.277 0.077-19.71l-0.103-18.969-0.819 0.45m-12.408 67.446-0.106 8.689 2.963 1.849c5.033 3.14 9.853 5.381 14.444 6.716l2.223 0.646-0.103-12.54c-0.094-11.573-0.151-12.542-0.74-12.568-0.712-0.03-1.542-0.168-4.528-0.749-1.12-0.219-4.739-0.473-8.042-0.565l-6.006-0.168-0.105 8.69m-106.4-5.632c-4.65 1.583-10.818 4.505-15.305 7.249l-2.341 1.432 0.039 8.375c0.036 7.752-0.01 8.385-0.622 8.518-2.249 0.491 11.077 0.233 14.539-0.281 5.986-0.889 5.356 0.7 5.356-13.521 0-6.715-0.125-12.196-0.277-12.18-0.153 0.016-0.778 0.2-1.389 0.408m63.72 18.545c-1.329 3.773-3.805 8.663-6.704 13.24l-2.933 4.63-0.124 5.37-0.123 5.371 1.537-2.373c1.676-2.587 4.503-6.277 4.834-6.31 0.114-0.012-0.287 1.437-0.892 3.22-1.005 2.963-1.118 3.811-1.318 9.907-0.244 7.396-0.574 8.441-2.988 9.441l-1.12 0.464v6.379c0 5.655 0.075 6.447 0.661 6.978 1.414 1.28 6.842 3.206 9.061 3.215l1.018 5e-3v-30.741c0-16.908-0.05-30.741-0.112-30.741-0.061 0-0.42 0.875-0.797 1.945" fill="#2acc67"/>
      <path d="m192.59 282.97c-7.578 10.222-9.681 17.987-5.321 19.644 3.081 1.172 5.169-1.797 5.037-7.165-0.12-4.919 0.319-8.427 1.533-12.251 0.494-1.553 0.847-2.824 0.786-2.824s-0.976 1.169-2.035 2.596" fill="#f4faf7"/>
      <path d="m185.66 110.47c-8.524 20.62-10.192 41.487-5.271 65.946 1.335 6.633 6.167 24.703 6.767 25.303 0.14 0.14 0.255-21.189 0.255-47.399s-0.041-47.651-0.092-47.646-0.797 1.713-1.659 3.796m-88.619 46.015c0 0.506 5.956 11.993 8.386 16.173 3.468 5.966 8.664 13.954 10.678 16.415l0.909 1.111 0.014-13.19 0.013-13.191-1.759-0.658c-0.968-0.361-1.926-0.783-2.13-0.936-0.915-0.688-16.111-6.087-16.111-5.724m132.78 43.884c-0.129 0.408-0.366 0.741-0.525 0.741-1.001 0-9.415 12.507-12.369 18.388-2.867 5.705-7.013 16.829-6.473 17.368 0.501 0.502 15.358-3.812 18.302-5.315 0.841-0.429 1.591-0.717 1.667-0.641s0.139-6.931 0.139-15.571c0-14.561-0.118-16.934-0.741-14.97m6.481 38.764c-0.509 0.088-2.342 0.397-4.074 0.686-1.731 0.29-4.03 0.791-5.108 1.113l-1.961 0.587 1.183 1.493c2.375 2.999 13.367 12.543 14.445 12.543 0.183 0 0.33-3.685 0.33-8.27v-8.27l-1.944-0.021c-1.07-0.011-2.361 0.051-2.871 0.139m-121.27 12.672c-3.598 2.442-13.911 11.832-13.911 12.667 0 0.142 0.458 0.343 1.019 0.447 0.56 0.104 2.74 0.541 4.844 0.971s5.271 0.909 7.037 1.064l3.211 0.281v-8.433c0-4.638-0.019-8.433-0.042-8.433-0.024 0-0.995 0.646-2.158 1.436m71.565 29.919c-8.837 14.7-8.588 26.004 0.735 33.393l1.382 1.095-0.11-6.5c-0.084-4.999 1e-3 -6.58 0.37-6.845 0.348-0.25 0.3-0.287-0.171-0.136-4.381 1.411-4.958-4.978-1.099-12.152 0.989-1.838 1.006-1.977 0.825-6.818l-0.186-4.942-1.746 2.905m5.765 11.238c0 1.731 0.063 2.44 0.141 1.574s0.078-2.282 0-3.148-0.141-0.158-0.141 1.574" fill="#3be47d"/>
    </Svg>
  );
};

export default Icon;