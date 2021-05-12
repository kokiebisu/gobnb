import { useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useOnClickOutside from '@hooks/useOnClickOutside';
import { useLockBodyScroll } from '@hooks/useLockBodyScroll';
import { MenuModal } from '@modal/modal-menu';
import { PrivacyModal } from '@modal/modal-privacy';
import { AuthModal } from '@modal/modal-auth';
import { BookingModal } from '@modal/modal-booking';
import { GlobeModal } from '@modal/modal-globe';
import { LocationModal } from '@modal/modal-location';
import { GuestsModal } from '@modal/modal-guests';
import { CheckModal } from '@modal/modal-check';
import { ListingModal } from '@modal/modal-listing';
import { useToggleDispatch } from '@context/toggle';

export type ModalVariants =
  | 'privacy'
  | 'menu'
  | 'auth'
  | 'booking'
  | 'globe'
  | 'location'
  | 'guests'
  | 'checkin'
  | 'checkout'
  | 'listing';

export interface ModalProps {
  variant: ModalVariants;
  extendsTo?: string;
  dispatch?: any;
  animate?: string;
  lock?: boolean;
  criteria?: any;
  noPadding?: boolean;
  [property: string]: any;
}

/**
 * Bundles all the modal components
 * @param {string} variant - Variant of modal component
 * @param {string} extendsTo - Adds custom styling to the specified component
 * @param {string} dispatchType - The type of dispatch
 */
export const Modal: React.FC<ModalProps> = ({
  variant,
  extendsTo,
  dispatch,
  animate = 'default',
  lock = false,
  noPadding = false,
  ...props
}) => {
  const { criteria } = props;
  const containerRef = useRef();
  const toggleDispatch = useToggleDispatch();
  if (lock) {
    useLockBodyScroll();
  }
  useOnClickOutside(containerRef, () =>
    toggleDispatch({ type: `${dispatch}` })
  );

  const animation = {
    slideup: {
      initial: { y: 400, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.4, ease: 'easeOut' },
    },
    default: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.1, ease: 'easeInOut' },
    },
  };

  const variants: {
    [variant: string]: {
      component: JSX.Element;
      extendsTo?: string;
      noPadding?: boolean;
    };
  } = {
    privacy: {
      component: <PrivacyModal {...props} />,
      extendsTo: 'rounded-md p-5 lg:w-full max-w-[1600px]',
    },
    menu: {
      component: <MenuModal {...props} />,
      extendsTo: 'rounded-lg w-96',
    },
    auth: {
      component: <AuthModal {...props} />,
      extendsTo: `rounded-lg w-full sm:w-[550px]`,
    },
    booking: {
      component: <BookingModal {...props} />,
      extendsTo: 'p-4 border border-gray-600 rounded-lg',
    },
    globe: {
      component: <GlobeModal {...props} />,
      extendsTo: 'p-4 rounded-lg max-w-3xl h-fit',
    },
    location: {
      component: <LocationModal {...props} />,
      extendsTo: 'rounded-lg p-5 max-w-sm',
    },
    guests: {
      component: <GuestsModal {...props} />,
      extendsTo: 'p-5 rounded-lg max-w-xs',
    },
    checkin: {
      component: <CheckModal {...props} />,
      extendsTo: 'px-7 py-5  rounded-lg max-w-2.5xl',
    },
    checkout: {
      component: <CheckModal {...props} />,
      extendsTo: 'rounded-lg px-7 py-5 max-w-2.5xl',
    },
    listing: {
      component: <ListingModal {...props} />,
      extendsTo: 'p-5 rounded-lg max-w-lg',
    },
  };

  if (criteria !== undefined) {
    return (
      <AnimatePresence>
        {criteria && (
          <motion.div
            data-testid={`${variant}-modal`}
            exit={{ opacity: 0 }}
            initial={animation[animate].initial}
            animate={animation[animate].animate}
            transition={animation[animate].transition}
            ref={containerRef}
            className={`shadow-sm bg-white w-full ${variants[variant].extendsTo} ${extendsTo}`}
          >
            {variants[variant].component}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
  return (
    <div
      ref={containerRef}
      className={`shadow-sm bg-white w-full ${variants[variant].extendsTo} ${extendsTo}`}
      data-testid={`${variant}-modal`}
    >
      {variants[variant].component}
    </div>
  );
};