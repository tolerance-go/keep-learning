import React, { FC, HTMLAttributes, memo, Ref, useRef, useEffect } from 'react';
import withDefaults from 'utils/withDefaults';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const DefaultProps = {
  size: 'small',
};

type ButtonPropsWithoutRef = Props &
  typeof DefaultProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof Props>;

export type ButtonProps = {
  /** 原生 HTMLDivElement 属性全部支持 */
  ref?: Ref<HTMLDivElement>;
} & ButtonPropsWithoutRef;

export const Button: FC<ButtonProps> = memo(
  React.forwardRef<HTMLDivElement, ButtonPropsWithoutRef>((props, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { children, ...rest } = props;

    const fetchData = (a: any) => {
      console.log(1);
    };
    const someArg = 1;
    useEffect(() => {
      fetchData(someArg);
    }, [someArg]);

    return (
      <div ref={containerRef} {...rest}>
        {children}
      </div>
    );
  }),
);

Button.displayName = 'Button';

export default withDefaults(Button, DefaultProps);
