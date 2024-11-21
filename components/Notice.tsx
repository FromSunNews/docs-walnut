// Sửa component Notice
import { FC } from 'react';

interface NoticeProps {
  children?: React.ReactNode;
}

const Notice: FC<NoticeProps> = ({ children }) => {
  return (
    <div className="notice">
      {children}
    </div>
  );
};

export default Notice;