import React from 'react';
import type { IconEditorProps } from './icon-editor';
import { IconEditor as IconEditorComponent } from './icon-editor';

const IconEditor: React.FC<IconEditorProps> = (props) => {
  return <IconEditorComponent {...props} />;
};

export default IconEditor;
