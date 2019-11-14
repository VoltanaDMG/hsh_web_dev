import { VueConstructor } from 'vue';
import { version } from '../../package.json';
import { IDateFormatConfig, dateFormat } from './dateFormat';

export { dateFormat } from './dateFormat';

export default {
  install(Vue: VueConstructor, baseConfig: IDateFormatConfig): void {
    Vue.filter('dateFormat', (date: Date, format: string, config: IDateFormatConfig = {}) => {
      return dateFormat(date, format, { ...baseConfig, ...config });
    });
  },
  version
};