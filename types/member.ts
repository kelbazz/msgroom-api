/**
 * Represents a chat user.
 */
export interface ChatMember {
    /**
     * The username of the user.
     */
    user: string;

    /**
     * The user color.
     */
    color: string;

    /**
     * The user ID.
     */
    id: string;

    /**
     * The session ID.
     */
    session_id: string;

    /**
     * User flags.
     */
    flags: string[];
}