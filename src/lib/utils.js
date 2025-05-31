import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// This function allows for easier combination of classNames based on different cases
export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
}