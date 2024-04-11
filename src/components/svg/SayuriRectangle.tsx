export const Rectangle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={8} height={44} fill="#D9D9D9" {...props}>
    <path fillRule="evenodd" d="M4 .5 0 22l4 21.5L8 22 4 .5ZM6 22l-2 7-2-7 2-8 2 8Zm-2-8-1-3 1-3 1 3-1 3Zm0 15-1 3 1 3 1-3-1-3Z" clipRule="evenodd" />
  </svg>
);
export default Rectangle;
