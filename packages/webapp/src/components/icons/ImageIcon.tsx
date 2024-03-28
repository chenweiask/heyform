import type { FC } from 'react'

export const ImageIcon: FC<IComponentProps<HTMLOrSVGElement>> = props => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.1888 10.4056C13.5338 9.97435 14.1631 9.90442 14.5944 10.2494L17.6247 12.6737C18.056 13.0187 18.1259 13.648 17.7809 14.0792C17.4359 14.5105 16.8066 14.5804 16.3753 14.2354L14.1259 12.4359L12.8453 14.0366L14.9033 15.7087C15.332 16.057 15.3971 16.6868 15.0488 17.1154C14.7006 17.5441 14.0708 17.6092 13.6421 17.261L9.5361 13.9248L7.74741 15.9371C7.38049 16.3499 6.74842 16.3871 6.33564 16.0201C5.92285 15.6532 5.88567 15.0211 6.25259 14.6084L8.67683 11.8811C9.0323 11.4812 9.63957 11.4319 10.0548 11.7693L11.293 12.7754L13.1888 10.4056Z"
        fill="currentColor"
      />
      <path
        d="M9.5 7C8.67157 7 8 7.67157 8 8.5C8 9.32843 8.67157 10 9.5 10C10.3284 10 11 9.32843 11 8.5C11 7.67157 10.3284 7 9.5 7Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6ZM6 5C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V6C19 5.44772 18.5523 5 18 5H6Z"
        fill="currentColor"
      />
    </svg>
  )
}