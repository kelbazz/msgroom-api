import EventEmitter from "events";
import { Socket } from "socket.io-client";
import { ChatMember } from "./member";
import { User } from "./user";

/**
 * Client init options.
 */
interface ClientCreationOptions {
    /**
     * Starting username.
     */
    username: string;
}

/**
 * Represents a MsgRoom client.
 */
export declare class MRClient extends EventEmitter {
    /**
     * Gets the underlying socket.
     */
    socket: Socket;

    /**
     * Represents the current client state.
     */
    state: {
        /**
         * The current client user state.
         */
        user: User;

        /**
         * Other chat members.
         */
        members: ChatMember[];

        /**
         * The ID of the session.
         */
        sessionId: string;
    }

    /**
     * Creates a new client with the specified options.
     * @param options The options to use.
     */
    constructor(options: ClientCreationOptions);

    /**
     * Changes the nickname of this client.
     * @param nick The nickname to set.
     */
    changeNick(nick: string): Promise<void>;

    /**
     * Sends a text message.
     * @param {string} text The text to send.
     */
    sendTextMessage(text: string): void;

    /**
     * Logs in the client.
     */
    login(): Promise<void>;
}
