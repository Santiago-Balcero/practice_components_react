import { Button } from '@mui/material';
import { useMemo, useState } from 'react';

export type GameActionButtonProps = {
  onClick: () => void;
  children: string;
  type: 'team' | 'opponent';
};

export function ActionButton({ onClick, children, type }: GameActionButtonProps) {
  const [backgroundColor, setBackgroundColor] = useState('');
  const [color, setColor] = useState('');
  const [borderColor, setBorderColor] = useState('');
  const [borderWidth, setBorderWidth] = useState('');

  useMemo(() => {
    switch (type) {
      case 'team':
        setBackgroundColor('#29D998');
        setColor('#FFFFFF');
        break;
      case 'opponent':
        setBackgroundColor('#FFFFFF');
        setColor('#382859');
        setBorderColor('#382859');
        setBorderWidth('1.5px');
        break;
    }
  }, [type]);

  return (
    <Button
      onClick={onClick}
      sx={{
        padding: '10px',
        fontSize: '16px',
        borderRadius: '50px',
        border: 0,
        maxWidth: '110px',
        minWidth: '100px',
        minHeight: '55px',
        maxHeight: '55px',
        fontWeight: 'bold',
        backgroundColor,
        color,
        borderColor,
        borderWidth,
        margin: '10px',
      }}
    >
      {children}
    </Button>
  );
}
