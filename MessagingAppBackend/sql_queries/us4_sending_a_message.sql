-- EXECUTE FOR PRECONDITION FULLFILMENT (not necessary for the real project)
-- we have a user in our db:
INSERT INTO user_info (user_name, user_password)
VALUES("us4_user", "password");
-- we have a member of chat to invite to:
-- let it be the admin of this chat (not mandatory)
INSERT INTO user_info (user_name, user_password)
VALUES("us4_admin", "other_password");

-- Here user_id is hardcoded, should be the user_id of the user, who sent his birthdate and email data
-- birthdate and email are provided for select, select chooses only the user_id from the user_info
INSERT INTO admin_info (user_id, birthdate, email)
SELECT user_id, DATE("1999-06-15"), "email@gmail.com" FROM user_info 
WHERE user_name = 'us4_admin';

-- Let this user to create a chat:
INSERT INTO chat (chat_description, chat_name, creator_id)
SELECT "Chat for sending messages", "My Chat for sending a message", user_id FROM user_info 
WHERE user_name = 'us4_admin';
-- additionally we must update the members table to make this user a member of this chat.
INSERT INTO is_member(chat_id, member_id)
SELECT chat_id, creator_id FROM chat 
WHERE chat_name = 'My Chat for sending a message';

-- make them friends:
INSERT INTO is_friend_of(user_id, friend_id)
VALUES((select user_id from user_info where user_name = 'us4_user'), (select user_id from user_info where user_name = 'us4_admin'));

-- PRECONDITION: we have a user, this user is the member of the chat, where "send message" button is clicked.

-- USE CASE 4:

INSERT INTO message(chat_id, content, sender_id)
VALUES((select chat_id from chat where chat_name = "My Chat for sending a message"), "Hello, World!", (select user_id from user_info where user_name = 'us4_user'));