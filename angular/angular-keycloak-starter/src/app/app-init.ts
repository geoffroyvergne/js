import { environment } from './../environments/environment';
import { Configuration } from './configration';
import { KeycloakService } from 'keycloak-angular';

export function initializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        await keycloak.init({
            config: {
                /*url: 'http://localhost:8080/auth',
                realm: 'test',
                clientId: 'test',*/
                /*credentials: {
                  secret: ''
                }*/
                // Configuration.ENV.sso.options
                // url: Configuration.ENV.sso.url,
                url: '/auth',
                realm: Configuration.ENV.sso.realm,
                clientId: Configuration.ENV.sso.clientId
            },
            initOptions: {
                onLoad: 'check-sso',
                checkLoginIframe: false
            },
            bearerExcludedUrls: [
                '/assets',
                '/api/test/index'
            ]
        });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };
}
