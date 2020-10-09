import React from 'react';
import shape from '../../../styles/shape.module.scss';
import color from '../../../styles/color.module.scss';
import font from '../../../styles/font.module.scss';
import layout from '../../../styles/layout.module.scss';
import space from '../../../styles/space.module.scss';
import animation from '../../../styles/animation.module.scss';
import modal from './modal.module.scss';
import { motion } from 'framer-motion';
import { Button } from '../../../components/atoms/button/button.component';
import { useToggleDispatch } from '../../../context/toggle';

interface Props {
  refProp?: any;
}

export const MenuModal: React.FC<Props> = ({ refProp }) => {
  const toggleDispatch = useToggleDispatch();
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
          <Button
            onPress={() => {
              toggleDispatch({ type: 'toggle_menu' });
              toggleDispatch({ type: 'toggle_register' });
            }}
            extendsTo={[
              shape['w--full'],
              font['text--left'],
              font['size--14'],
              color['bg--white__0'],
              space['p-h--14'],
              space['p-v--10'],
              layout['block'],
              animation['hover-background--white__1'],
            ].join(' ')}>
            Sign up
          </Button>
        </div>
        <div>
          <Button
            onPress={() => {
              toggleDispatch({ type: 'toggle_menu' });
              toggleDispatch({ type: 'toggle_register' });
            }}
            extendsTo={[
              font['weight--300'],
              shape['w--full'],
              font['text--left'],
              font['size--14'],
              color['bg--white__0'],
              space['p-h--14'],
              space['p-v--10'],
              layout['block'],
              animation['hover-background--white__1'],
            ].join(' ')}>
            Log in
          </Button>
        </div>
        <div>
          <Button
            onPress={() => {
              toggleDispatch({ type: 'toggle_menu' });
              console.log('cliekd host your home');
            }}
            to='/host/home'
            extendsTo={[
              font['weight--300'],
              shape['w--full'],
              font['text--left'],
              font['size--14'],
              color['bg--white__0'],
              space['p-h--14'],
              space['p-v--10'],
              layout['block'],
              animation['hover-background--white__1'],
            ].join(' ')}>
            Host your home
          </Button>
        </div>
        <div>
          <Button
            to='/host/experience'
            onPress={() => {
              toggleDispatch({ type: 'toggle_menu' });
              console.log('clicked host an experience');
            }}
            extendsTo={[
              font['weight--300'],
              shape['w--full'],
              font['text--left'],
              font['size--14'],
              color['bg--white__0'],
              space['p-h--14'],
              space['p-v--10'],
              layout['block'],
              animation['hover-background--white__1'],
            ].join(' ')}>
            Host an experience
          </Button>
        </div>
        <div>
          <Button
            onPress={() => {
              toggleDispatch({ type: 'toggle_menu' });
              console.log('help clicked');
            }}
            extendsTo={[
              font['weight--300'],
              shape['w--full'],
              font['text--left'],
              font['size--14'],
              color['bg--white__0'],
              space['p-h--14'],
              space['p-v--10'],
              layout['block'],
              animation['hover-background--white__1'],
            ].join(' ')}>
            Help
          </Button>
        </div>
      </div>
    </motion.div>
  );
};