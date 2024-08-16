import {promises as fs} from "fs";
import {MessageT, MessageTWithoutId} from "./type";
let messages: MessageT[] = [];
const file = 'messages.json';

const MessageFile = {
    async addMessage (message:MessageTWithoutId) {
        const id = crypto.randomUUID();
        const newMessage = {id,...message};
        messages.push(newMessage);
        await this.save();
        return messages;
    },

    async save () {
        return  await fs.writeFile(file, JSON.stringify(messages));
    },

    async getMessages () {
        try {
            const fileContents = await fs.readFile(file);
            return messages = JSON.parse(fileContents.toString());
        } catch (e) {
            messages = [];
        }
    }
};

export default MessageFile