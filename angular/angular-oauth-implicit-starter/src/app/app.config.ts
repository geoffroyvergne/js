import { AuthConfig } from 'angular-oauth2-oidc';

export const config = {
    apiBaseUrl: 'http://localhost:9001/',
    identityBaseUrl: 'http://localhost:9000/'
};

export const authConfigSpring: AuthConfig = {
    // Spring
    loginUrl: 'http://localhost:9000/identity/oauth/authorize',
    redirectUri: 'http://localhost:4200',
    clientId: 'implicittest',
    scope: 'openid read write foo bar',
    oidc: false,
    clearHashAfterLogin: true,
    disableAtHashCheck: true,
    logoutUrl: 'http://localhost:9000/identity/session/logout?redirect_uri=http%3A%2F%2Flocalhost%3A4200',
    userinfoEndpoint: 'http://localhost:9000/resource/user/me'
};

export const authConfigKeycloak: AuthConfig = {
    // Keycloak
    issuer: 'http://localhost:8080/auth/realms/angular',
    redirectUri: 'http://localhost:4200',
    clientId: 'angular',
    requireHttps: false,
    logoutUrl: 'http://localhost:8080/auth/realms/angular/protocol/openid-connect/logout?redirect_uri=http%3A%2F%2Flocalhost%3A4200',
    userinfoEndpoint: 'http://localhost:8080/auth/realms/angular/protocol/openid-connect/userinfo',
    scope: 'openid profile'
};

export const authConfigWso2: AuthConfig = {
    // Wso2
    issuer: 'https://localhost:9443/oauth2/oidcdiscovery',
    redirectUri: 'http://localhost:4200',
    clientId: '7mETTt_RwUw76kksO_KWyWBkPb4a',
    // dummyClientSecret: '',
    requireHttps: false,
    skipIssuerCheck: true,
    strictDiscoveryDocumentValidation: false,
    scope: 'openid',
    userinfoEndpoint: 'https://localhost:9443/oauth2/userinfo?schema=openid'
};

export const authConfigAuth0: AuthConfig = {
    // Auth0
    issuer: 'https://gvergne.eu.auth0.com/',
    redirectUri: 'http://localhost:4200',
    clientId: 'OHoSdIXqpMp7xz5OFffam94d9OYEvL7h',
    requireHttps: false,
    logoutUrl: 'https://gvergne.eu.auth0.com/v2/logout?federated',
    userinfoEndpoint: 'https://gvergne.eu.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid profile email name user_metadata groups permissions roles'
};
