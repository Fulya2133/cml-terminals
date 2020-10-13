import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the cml-terminals extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'cml-terminals',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension cml-terminals is activated!');
  }
};

export default extension;
