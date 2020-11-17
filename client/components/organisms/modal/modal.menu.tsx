import React from 'react';
import { motion } from 'framer-motion';

/**
 * Styles
 */
import shape from '../../../styles/shape.module.scss';
import color from '../../../styles/color.module.scss';
import layout from '../../../styles/layout.module.scss';

/**
 * Components
 */
import { Button } from '../../../components/atoms/button/button.component';

/**
 * Props
 */
import { MenuModalProps } from './props';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import { useToggleDispatch } from '../../../context/toggle';

/**
 * Renders the menu modal
 * @param refProp
 */
export const MenuModal: React.FC<MenuModalProps> = ({ refProp }) => {
  const toggleDispatch = useToggleDispatch();
  useOnClickOutside(refProp, () => toggleDispatch({ type: 'toggle_menu' }));
  return (
    <motion.div
      ref={refProp}
      exit={{ opacity: 0 }}
      className={[
        shape['br--15'],
        shape['shadow--lg'],
        layout['items-center'],
        color['bg--white__0'],
      ].join(' ')}
      style={{ width: 245, height: 220 }}>
      <div className={[shape['w--inherit']].join(' ')}>
        <div>
          <Button type='option' option='signup' bold />
        </div>
        <div>
          <Button type='option' option='login' />
        </div>
        <div>
          <Button to='/host/homes' type='option' option='home'>
            Host your home
          </Button>
        </div>
        <div>
          <Button type='option' option='experience' />
        </div>
        <div>
          <Button type='option' option='help' />
        </div>
      </div>
    </motion.div>
  );
};
