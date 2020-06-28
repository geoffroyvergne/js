import {environment} from '../../environments/environment';
const packageJson = require('../../../package.json');

export class Configuration {
  public static ENV = environment;
  public static APP_NAME = 'AngularJs Bootstrap Starter Kit';
  public static APP_Version = packageJson.version;
}
