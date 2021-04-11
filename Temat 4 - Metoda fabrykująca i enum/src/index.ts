import './main.scss';
import { Options } from './ts/Options';
import { DOM } from './ts/DOM';

const dom = new DOM();
dom.createDOM();
const options = new Options();
options.initializeOptions();
