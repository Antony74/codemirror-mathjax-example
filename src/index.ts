import { basicSetup } from 'codemirror';
import { EditorView } from '@codemirror/view';

const editor = document.getElementById('editor');

if (!editor) {
    throw new Error('Editor element not found');
}

const view = new EditorView({
    doc: 'Start document',
    extensions: [basicSetup],
    parent: document.body,
});

// editor.remove();
// view.dom.id = 'editor';
