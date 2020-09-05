import config from './config';
import * as signalR from '@microsoft/signalr';

const connection = new signalR.HubConnectionBuilder()
    .withUrl(`${config.API_URL}/hub`)
    .build();

if (connection) {
    connection.start()
        .then(() => {})
        .catch(err => console.log(err));
}

export default Object.freeze({
    bringThing: () => {
        return connection.invoke("bringThing");
    },
    comeUp: () => {
        return connection.invoke("comeUp");
    },
    toCheckout: () => {
        return connection.invoke("toCheckout");
    }
})