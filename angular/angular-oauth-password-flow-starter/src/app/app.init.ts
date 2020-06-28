import { AppService } from './app.service';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

export function initializer(appService: AppService): () => Promise<any> {
    return (): Promise<any> => {
        return new Promise(async (resolve, reject) => {
            try {
                console.log('environment : ' + environment.name);
                const isLogged = appService.checkCredentials();

                console.log('isLogged : ' + isLogged);
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    };
}
