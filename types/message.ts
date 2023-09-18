/**
 * Represents a message.
 */
export interface Message {
    /**
     * The message contents.
     */
    content: string;

    /**
     * The sending user name.
     */
    user: string;

    /**
     * The sender color.
     */
    color: string;

    /**
     * The sender ID.
     */
    id: string;

    /**
     * The session ID.
     */
    session_id: string;

    /**
     * Date sent.
     */
    date: Date;
}

/**
 * Represents a client system message.
 */
export interface SysMessage {
    /**
     * Message type.
     */
    type: string;

    /**
     * The message contents.
     */
    message: string;

    /**
     * Whether this is a HTML message.
     */
    isHtml: boolean;
}