import React from 'react';
import type { IconEditorProps } from './icon-editor';
import KonvaCanvas from './icon-editor/KonvaCanvas';

const IconEditor: React.FC<IconEditorProps> = (props) => {
  return <KonvaCanvas {...props} />;
};

export default IconEditor;
