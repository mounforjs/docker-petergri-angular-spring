-- we have a user in our db:
INSERT INTO user_info (user_name, user_password)
VALUES("us4_user1", "password");
-- we have a member of chat to invite to:
-- let it be the admin of this chat (not mandatory)
INSERT INTO user_info (user_name, user_password)
VALUES("us4_admin1", "other_password");

-- Here user_id is hardcoded, should be the user_id of the user, who sent his birthdate and email data
-- birthdate and email are provided for select, select chooses only the user_id from the user_info
INSERT INTO admin_info (user_id, birthdate, email)
SELECT user_id, DATE("1999-06-15"), "email@gmail.com" FROM user_info 
WHERE user_name = 'us4_admin1';

-- Let this user to create a chat:
INSERT INTO chat (chat_description, chat_name, creator_id)
SELECT "Chat for sending messages", "Chat for sending a message 1", user_id FROM user_info 
WHERE user_name = 'us4_admin1';
-- additionally we must update the members table to make this user a member of this chat.
INSERT INTO is_member(chat_id, member_id)
SELECT chat_id, creator_id FROM chat 
WHERE chat_name = 'Chat for sending a message 1';

-- make them friends:
INSERT INTO is_friend_of(user_id, friend_id)
VALUES((select user_id from user_info where user_name = 'us4_user1'), (select user_id from user_info where user_name = 'us4_admin1'));

INSERT INTO invites(chat_id, invited_by_id, user_id)
VALUES((select chat_id from chat where chat_name = "Chat for sending a message 1"), (select user_id from user_info where user_name = 'us4_user1'), (select user_id from user_info where user_name = 'us4_admin1'));

INSERT INTO is_member(chat_id, member_id)
VALUES((select chat_id from chat INNER JOIN user_info ON creator_id = user_id where user_name = 'us4_admin1'), (select user_id from user_info where user_name = 'us4_user1'));

INSERT INTO message(chat_id, content, sender_id)
VALUES((select chat_id from chat where chat_name = "Chat for sending a message 1"), "Hello, World!", (select user_id from user_info where user_name = 'us4_user1'));

INSERT INTO message(chat_id, content, sender_id)
VALUES((select chat_id from chat where chat_name = "Chat for sending a message 1"), "Hello, World 2!", (select user_id from user_info where user_name = 'us4_admin1'));

INSERT INTO message(sent_time, chat_id, content, sender_id)
VALUES(DATE("2020-06-15"), (select chat_id from chat where chat_name = "Chat for sending a message 1"), "Hello, World!", (select user_id from user_info where user_name = 'us4_user1'));

-- ===================================================================================

-- we have a user in our db:
INSERT INTO user_info (user_name, user_password)
VALUES("us4_user2", "password");

INSERT INTO user_info (user_name, user_password)
VALUES("us4_user3", "password");

-- we have a member of chat to invite to:
-- let it be the admin of this chat (not mandatory)
INSERT INTO user_info (user_name, user_password)
VALUES("us4_admin2", "other_password");

-- Here user_id is hardcoded, should be the user_id of the user, who sent his birthdate and email data
-- birthdate and email are provided for select, select chooses only the user_id from the user_info
INSERT INTO admin_info (user_id, birthdate, email)
SELECT user_id, DATE("1999-06-15"), "email@gmail.com" FROM user_info 
WHERE user_name = 'us4_admin2';

-- Let this user to create a chat:
INSERT INTO chat (chat_description, chat_name, creator_id)
SELECT "Chat for sending messages", "Chat for sending a message 2", user_id FROM user_info 
WHERE user_name = 'us4_admin2';
-- additionally we must update the members table to make this user a member of this chat.
INSERT INTO is_member(chat_id, member_id)
SELECT chat_id, creator_id FROM chat 
WHERE chat_name = 'Chat for sending a message 2';

-- make them friends:
INSERT INTO is_friend_of(user_id, friend_id)
VALUES((select user_id from user_info where user_name = 'us4_user2'), (select user_id from user_info where user_name = 'us4_admin2'));

INSERT INTO invites(chat_id, invited_by_id, user_id)
VALUES((select chat_id from chat where chat_name = "Chat for sending a message 2"), (select user_id from user_info where user_name = 'us4_user2'), (select user_id from user_info where user_name = 'us4_admin2'));

INSERT INTO is_member(chat_id, member_id)
VALUES((select chat_id from chat INNER JOIN user_info ON creator_id = user_id where user_name = 'us4_admin2'), (select user_id from user_info where user_name = 'us4_user2'));

INSERT INTO is_friend_of(user_id, friend_id)
VALUES((select user_id from user_info where user_name = 'us4_user3'), (select user_id from user_info where user_name = 'us4_admin2'));

INSERT INTO invites(chat_id, invited_by_id, user_id)
VALUES((select chat_id from chat where chat_name = "Chat for sending a message 2"), (select user_id from user_info where user_name = 'us4_admin2'), (select user_id from user_info where user_name = 'us4_user3'));

INSERT INTO is_member(chat_id, member_id)
VALUES((select chat_id from chat INNER JOIN user_info ON creator_id = user_id where user_name = 'us4_admin2'), (select user_id from user_info where user_name = 'us4_user3'));

INSERT INTO message(chat_id, content, sender_id)
VALUES((select chat_id from chat where chat_name = "Chat for sending a message 2"), "Hello, World from user3!", (select user_id from user_info where user_name = 'us4_user3'));

INSERT INTO message(chat_id, content, sender_id)
VALUES((select chat_id from chat where chat_name = "Chat for sending a message 2"), "Hello, World!", (select user_id from user_info where user_name = 'us4_user2'));

INSERT INTO message(chat_id, content, sender_id)
VALUES((select chat_id from chat where chat_name = "Chat for sending a message 2"), "Hello, World 2!", (select user_id from user_info where user_name = 'us4_admin2'));

INSERT INTO message(sent_time, chat_id, content, sender_id)
VALUES(DATE("2020-06-15"), (select chat_id from chat where chat_name = "Chat for sending a message 2"), "Hello, World!", (select user_id from user_info where user_name = 'us4_user2')); 

-- we have a user in our db:
INSERT INTO user_info (user_name, user_password)
VALUES("us4_user4", "password");
-- we have a member of chat to invite to:
-- let it be the admin of this chat (not mandatory)
INSERT INTO user_info (user_name, user_password)
VALUES("us4_admin3", "other_password");

-- Here user_id is hardcoded, should be the user_id of the user, who sent his birthdate and email data
-- birthdate and email are provided for select, select chooses only the user_id from the user_info
INSERT INTO admin_info (user_id, birthdate, email)
SELECT user_id, DATE("1999-06-15"), "email@gmail.com" FROM user_info 
WHERE user_name = 'us4_admin3';

-- Let this user to create a chat:
INSERT INTO chat (chat_description, chat_name, creator_id)
SELECT "Chat for sending messages", "Chat for sending a message 3", user_id FROM user_info 
WHERE user_name = 'us4_admin3';
-- additionally we must update the members table to make this user a member of this chat.
INSERT INTO is_member(chat_id, member_id)
SELECT chat_id, creator_id FROM chat 
WHERE chat_name = 'Chat for sending a message 3';

-- make them friends:
INSERT INTO is_friend_of(user_id, friend_id)
VALUES((select user_id from user_info where user_name = 'us4_user4'), (select user_id from user_info where user_name = 'us4_admin3'));

INSERT INTO invites(chat_id, invited_by_id, user_id)
VALUES((select chat_id from chat where chat_name = "Chat for sending a message 3"), (select user_id from user_info where user_name = 'us4_user4'), (select user_id from user_info where user_name = 'us4_admin3'));

INSERT INTO is_member(chat_id, member_id)
VALUES((select chat_id from chat INNER JOIN user_info ON creator_id = user_id where user_name = 'us4_admin3'), (select user_id from user_info where user_name = 'us4_user4'));

INSERT INTO message(chat_id, content, sender_id)
VALUES((select chat_id from chat where chat_name = "Chat for sending a message 3"), "Hello, World!", (select user_id from user_info where user_name = 'us4_user4'));

INSERT INTO message(chat_id, content, sender_id)
VALUES((select chat_id from chat where chat_name = "Chat for sending a message 3"), "Hello, World 2!", (select user_id from user_info where user_name = 'us4_admin3'));

INSERT INTO message(sent_time, chat_id, content, sender_id)
VALUES(DATE("2020-06-15"), (select chat_id from chat where chat_name = "Chat for sending a message 3"), "Hello, World!", (select user_id from user_info where user_name = 'us4_user4'));

-- ===================================================================================

-- we have a user in our db:
INSERT INTO user_info (user_name, user_password)
VALUES("us4_user5", "password");

INSERT INTO user_info (user_name, user_password)
VALUES("us4_user6", "password");

-- we have a member of chat to invite to:
-- let it be the admin of this chat (not mandatory)
INSERT INTO user_info (user_name, user_password)
VALUES("us4_admin4", "other_password");

-- Here user_id is hardcoded, should be the user_id of the user, who sent his birthdate and email data
-- birthdate and email are provided for select, select chooses only the user_id from the user_info
INSERT INTO admin_info (user_id, birthdate, email)
SELECT user_id, DATE("1999-06-15"), "email@gmail.com" FROM user_info 
WHERE user_name = 'us4_admin4';

-- Let this user to create a chat:
INSERT INTO chat (chat_description, chat_name, creator_id)
SELECT "Chat for sending messages", "Chat for sending a message 4", user_id FROM user_info 
WHERE user_name = 'us4_admin4';
-- additionally we must update the members table to make this user a member of this chat.
INSERT INTO is_member(chat_id, member_id)
SELECT chat_id, creator_id FROM chat 
WHERE chat_name = 'Chat for sending a message 4';

-- make them friends:
INSERT INTO is_friend_of(user_id, friend_id)
VALUES((select user_id from user_info where user_name = 'us4_user5'), (select user_id from user_info where user_name = 'us4_admin4'));

INSERT INTO invites(chat_id, invited_by_id, user_id)
VALUES((select chat_id from chat where chat_name = "Chat for sending a message 4"), (select user_id from user_info where user_name = 'us4_user5'), (select user_id from user_info where user_name = 'us4_admin4'));

INSERT INTO is_member(chat_id, member_id)
VALUES((select chat_id from chat INNER JOIN user_info ON creator_id = user_id where user_name = 'us4_admin4'), (select user_id from user_info where user_name = 'us4_user5'));

INSERT INTO is_friend_of(user_id, friend_id)
VALUES((select user_id from user_info where user_name = 'us4_user6'), (select user_id from user_info where user_name = 'us4_admin4'));

INSERT INTO invites(chat_id, invited_by_id, user_id)
VALUES((select chat_id from chat where chat_name = "Chat for sending a message 4"), (select user_id from user_info where user_name = 'us4_admin4'), (select user_id from user_info where user_name = 'us4_user6'));

INSERT INTO is_member(chat_id, member_id)
VALUES((select chat_id from chat INNER JOIN user_info ON creator_id = user_id where user_name = 'us4_admin4'), (select user_id from user_info where user_name = 'us4_user6'));

INSERT INTO message(chat_id, content, sender_id)
VALUES((select chat_id from chat where chat_name = "Chat for sending a message 4"), "Hello, World from user3!", (select user_id from user_info where user_name = 'us4_user6'));

INSERT INTO message(chat_id, content, sender_id)
VALUES((select chat_id from chat where chat_name = "Chat for sending a message 4"), "Hello, World!", (select user_id from user_info where user_name = 'us4_user5'));

INSERT INTO message(chat_id, content, sender_id)
VALUES((select chat_id from chat where chat_name = "Chat for sending a message 4"), "Hello, World 2!", (select user_id from user_info where user_name = 'us4_admin4'));

INSERT INTO message(sent_time, chat_id, content, sender_id)
VALUES(DATE("2020-06-15"), (select chat_id from chat where chat_name = "Chat for sending a message 4"), "Hello, World!", (select user_id from user_info where user_name = 'us4_user5')); 

