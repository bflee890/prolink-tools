type Props = {
  size: number;
};

const Logo = ({size}: Props) => (
  <svg
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 501 501"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M251 463a212 212 0 100-425 212 212 0 000 425zm0 37a250 250 0 100-500 250 250 0 000 500z"
      fill="currentColor"
    />
    <circle cx="251" cy="249.3" r="67.3" fill="#F84B4B" />
    <path
      d="M329 93l-4-1-26 56a111 111 0 014 2l29-55-3-2zM345 103l-6-4-32 54 5 2 33-52zM318 89l-7-3-21 58 4 2 24-57zM358 111l-6-4-36 51 4 3 38-50zM304 83l-7-2-17 60 5 2 19-60zM369 121l-5-5-41 48 4 3 42-46zM289 79l-7-1-11 61 4 1 14-61zM380 132l-5-5-44 44 3 3 46-42zM274 76h-7l-6 62h5l8-62zM390 144l-5-6-48 40 3 4 50-38zM259 75h-8v62l5 1 3-63zM399 156l-5-6-51 36 3 4 53-34zM244 75l-8 1 5 62 5-1-2-62zM406 170l-3-7-55 31 3 4 55-28zM228 76l-7 1 11 62 4-1-8-62zM413 184l-3-7-57 26 2 4 58-23zM213 79l-7 2 16 60 5-1-14-61zM418 198l-3-7-58 21 1 5 60-19zM199 83l-8 2 22 59 4-1-18-60zM422 213l-2-8-61 16 2 5 61-13zM184 88l-7 3 27 57 4-2-24-58zM424 228l-1-8-61 11v5l62-8zM171 94l-7 4 31 54 4-2-28-56zM426 243l-1-8-62 6v4l63-2zM157 102l-6 4 35 52 5-3-34-53zM426 258v-7l-63-1v5l63 3zM145 111l-6 4 40 48 4-3-38-49zM424 273l1-7-62-6-1 5 62 8zM133 120l-6 6 44 44 4-3-42-47zM421 288l2-7-62-11-1 5 61 13zM122 131l-5 6 48 40 3-3-46-43zM417 303l3-7-61-17-1 5 59 19zM112 143l-4 6 51 36 3-4-50-38zM412 318l3-8-59-21-2 4 58 25zM103 155l-4 7 55 31 2-4-53-34zM407 328l2-4-57-26a120 120 0 01-2 4l56 29 1-3zM96 169a175 175 0 00-4 6l57 27a117 117 0 012-4l-55-29zM398 344l4-6-54-31-3 4 53 33zM89 182l-3 7 59 22 2-4-58-25zM389 357l5-6-51-36-3 4 49 38zM84 197l-2 7 60 16 2-4-60-19zM379 369l5-6-47-40-4 3 46 43zM80 211l-2 8 62 11 1-5-61-14zM368 379l6-5-44-44-4 3 42 46zM77 226l-1 8 63 6v-5l-62-9zM357 389l6-5-40-48-4 3 38 50zM76 242v7h62v-4l-62-3zM344 398l7-4-36-52-4 3 33 53zM76 257v8l63-6-1-5-62 3zM331 405l7-3-31-54-5 2 29 55zM77 272l1 8 62-11-1-5-62 8zM317 412l7-3-26-57-5 2 24 58zM80 287l1 8 61-16-1-5-61 13zM303 417l7-2-21-59-5 1 19 60zM84 302l2 7 59-21-2-5-59 19zM288 421l7-2-16-60-4 1 13 61zM89 316l3 7 57-26-2-4-58 23zM273 424l7-2-10-61-5 1 8 62zM95 330l4 7 54-31-2-4-56 28zM258 425l7-1-5-62h-5l3 63zM103 343l4 7 51-36-2-4-53 33zM242 425h8v-63h-5l-3 63zM111 356l5 6 48-40-3-4-50 38zM227 423l8 1 5-62-4-1-9 62zM212 421l8 1 11-61-5-1-14 61zM197 417l8 2 16-60-5-2-19 60z"
      fill="currentColor"
    />
  </svg>
);

export default Logo;
