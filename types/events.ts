/**
 * Nickname changed event object.
 */
export interface NickChangedEvent {
    /**
     * The old username.
     */
    oldUser: string;

    /**
     * The new username.
     */
    newUser: string;

    /**
     * The user ID.
     */
    id: string;

    /**
     * The user session ID.
     */
    session_id: string;
}