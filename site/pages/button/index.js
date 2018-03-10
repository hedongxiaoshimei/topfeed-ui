import MarkDown from '../../libs/markdown';

export default class Alert extends MarkDown {
  document() {
    return require('../../../docs/button.md');
  }
}
