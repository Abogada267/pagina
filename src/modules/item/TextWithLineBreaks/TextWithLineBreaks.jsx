import React from 'react';

function TextWithLineBreaks({ onlyBreakFirstLine, styled, children }) {
  const stylesFirstLine = 'text-2xl font-bold sm:text-lg';
  const stylesOtherLines = 'text-base italic font-normal';

  if (typeof children !== 'string') {
    console.error('TextWithLineBreaks component expects a string as children.');
    return null;
  }

  const lines = children.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {index === 0 && styled ? (
        <span className={stylesFirstLine}>{line.trim()}<br /></span>
      ) : (
        <span className={styled && stylesOtherLines}>{line.trim()} </span>
      )}
    </React.Fragment>
  ));

  return lines;
}

export default TextWithLineBreaks;
