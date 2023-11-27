import React from 'react';
import './DingReceiveViewer.css'; // スタイルシートをインポート

type DingReceiveViewerProps = {
  dinged: string[];
  dingedBy: string[];
};

const DingReceiveViewer: React.FC<DingReceiveViewerProps> = ({
  dinged,
  dingedBy,
}) => {
  return (
    <div className="ding-sections">
      <div className="dinged-section">
        <h2>送信済み</h2>
        <ul id="dinged-list">
          {dinged.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="dinged-by-section">
        <h2>受信</h2>
        <ul id="dinged-by-list">
          {dingedBy.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DingReceiveViewer;
